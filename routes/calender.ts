import * as express from 'express';
import {calender, createEvent} from '../controller/calender';
import {CALENDAR, EVENT, REFRESH, ROUTES} from '../constants';
const router = express.Router();

const {CALENDAR_ROUTE, HOME_ROUTE, EVENTS_ROUTE} = ROUTES;

let events = [REFRESH];
router.post(CALENDAR_ROUTE, (req, res) => {
  const tkn = req.body.token;
  calender(req, res, tkn, events);
  res.send(events);
  res.render(CALENDAR);
});

router.get(HOME_ROUTE, (req, res) => {
  res.render(CALENDAR);
});

router.post(EVENTS_ROUTE, (req, res) => {
  const to = req.body.to;
  const summary = req.body.summary;
  const description = req.body.description;
  createEvent(to, summary, description);
  res.render(EVENT);
});

export default router;
