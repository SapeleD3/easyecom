import * as fs from 'fs';
import {google} from 'googleapis';
import {
  TOKEN_PATH,
  CREDENTIAL_PATH,
  logMessage,
  PRIMARY,
  START_TIME,
} from '../constants';
import {log} from '../util/logs';

const {
  TOKEN_LOG,
  FILE_GEN_ERROR,
  LIST_EVENT_ERROR1,
  TOKEN_ERROR1,
  UPCOMING_EVENT,
  FREE_BUSY_ERROR1,
  FREE_BUSY_ERROR2,
  SUCCESSFUL_EVENT,
  BUSY_ERROR,
} = logMessage;
export const calender = (req, res, tkn, eventArray) => {
  fs.readFile(CREDENTIAL_PATH, (err, content: any) => {
    if (err) return log(FILE_GEN_ERROR(err));
    authorize(JSON.parse(content), listEvents);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  const authorize = (credentials, callback) => {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0],
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token: any) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  };

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  function getAccessToken(oAuth2Client, callback) {
    oAuth2Client.getToken(tkn, (err, token) => {
      if (err) return log(TOKEN_ERROR1(err));
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return log(err);
        log(TOKEN_LOG());
      });
      callback(oAuth2Client);
    });
  }

  /**
   * Lists the next 10 events on the user's primary calendar.
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  const listEvents = (auth) => {
    const work = async () => {
      const calendar = await google.calendar({version: 'v3', auth});
      calendar.events.list(
        {
          calendarId: PRIMARY,
          timeMin: new Date().toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: START_TIME,
        },
        (err, res) => {
          if (err) LIST_EVENT_ERROR1(err);
          const events = res.data.items;
          if (events.length) {
            events.map((event, i) => {
              const start = event.start.dateTime || event.start.date;
              log(`${start} - ${event.summary}`);
              eventArray.push(event);
            });
          } else {
            log(UPCOMING_EVENT);
          }
        },
      );
    };
    work();
  };
};

const {CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN} = process.env;

export const createEvent = async (to, summary, description) => {
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);

  oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  const calender: any = google.calendar({version: 'v3', auth: oAuth2Client});
  const eventStartTime = new Date();
  eventStartTime.setDate(eventStartTime.getDate() + 2);

  const eventEndTime = new Date();
  eventEndTime.setDate(eventEndTime.getDate() + 2);
  eventEndTime.setMinutes(eventEndTime.getMinutes() + 60);

  const event = {
    summary,
    description,
    colorId: 6,
    start: {
      dateTime: eventStartTime,
    },
    end: {
      dateTime: eventEndTime,
    },
  };

  calender.freebusy.query(
    {
      resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        items: [{id: PRIMARY}],
      },
    },
    (err, res) => {
      if (err) return log(FREE_BUSY_ERROR1(err));

      const eventArr = res.data.calendars.primary.busy;
      if (eventArr.length === 0) {
        calender.events.insert(
          {
            calendarId: PRIMARY,
            resource: event,
          },
          (err) => {
            if (err) return log(FREE_BUSY_ERROR2(err));
            return log(SUCCESSFUL_EVENT);
          },
        );
      }
    },
  );
  return log(BUSY_ERROR);
};
