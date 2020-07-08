import 'dotenv/config';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import * as ejs from 'ejs';
import {log} from './util/logs';
import paysheet from './routes/paysheets';
import {calender, createEvent} from './controller/calender';

const {PORT} = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
//middleware
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/pay', paysheet);
// app.use('/ca', calender);
app.get('/', (req, res) => {
  res.render('index.html');
});

let events = ['Refresh to view upcoming events'];
app.post('/', (req, res) => {
  const tkn = req.body.token;
  calender(req, res, tkn, events);
  res.send(events);
  res.render('index.html');
});

app.post('/events', (req, res) => {
  const to = req.body.to;
  const summary = req.body.summary;
  const description = req.body.description;
  createEvent(to, summary, description);
  res.render('event.html');
});

//server
const port = !!PORT ? PORT : 7000;
app.listen(port, () => {
  log(`App Running on port ${port}`);
});
