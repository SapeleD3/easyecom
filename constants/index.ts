/**
 * Application's namespace
 * @constant
 */
export const NAMESPACE = 'easyecom';

/**
 * Development environment
 * @constant
 */
export const DEV_ENVIRONMENT = 'development';

/**
 * paths to htnl views
 * @constant
 */
export const PAYSHEET = 'paysheet.html';
export const CALENDAR = 'index.html';
export const EVENT = 'event.html';

/**
 * token Path
 * @constant
 */
export const TOKEN_PATH = './token.json';
/**
 * credential.json Path
 * @constant
 */
export const CREDENTIAL_PATH = './credentials.json';
/**
 * Scope
 * @constant
 */
export const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

/**
 * static texts
 * @constant
 */
export const messages = {
  welcome: 'Welcome to easyEcom',
};

export const SERVER = (port) => `App Running on port ${port}`;
export const PORT_CONSTANT = 7000;
export const PRIMARY = 'primary';
export const START_TIME = 'startTime';
export const SHEET1 = 'Sheet1';
export const NEWFILE = 'newFile.csv';
export const TEXT_CSV = 'text/csv';
export const REFRESH = 'Refresh to view upcoming events';
export const DEST = 'uploads/';
export const MORGAN_PARAMS = 'tiny';
export const VIEW_ENGINE = 'view engine';
export const HTML = 'html';
export const VIEWS = 'views';

/**
 * logs constant
 * @constant
 */

export const logMessage = {
  TOKEN_LOG: () => `Token stored to: ${TOKEN_PATH}`,
  FILE_GEN_ERROR: (err) => `Error loading client secret file: ${err}`,
  TOKEN_ERROR1: (err) => `Error retrieving access token, ${err}`,
  LIST_EVENT_ERROR1: (err) => `The API returned an error: ${err}`,
  UPCOMING_EVENT: 'No upcoming events found. ',
  FREE_BUSY_ERROR1: (err) => `Free Busy Query err: ${err}`,
  FREE_BUSY_ERROR2: (err) => `Error creating calender Event: ${err}`,
  SUCCESSFUL_EVENT: `Event created successfully`,
  BUSY_ERROR: `Sorry my schedule is busy at the moment`,
  ERROR_MESSAGE: 'Must input 2 files',
};

export const ROUTES = {
  HOME_ROUTE: '/',
  EVENTS_ROUTE: '/calendar/events',
  CALENDAR_ROUTE: '/calendar',
  PAYSHEET_ROUTE: '/pay',
  STATTIC_ROUTE: '/static',
  VIEW_ROUTE: '/public/views',
  PUBLIC: 'public',
};
