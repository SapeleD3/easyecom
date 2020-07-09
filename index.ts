import 'dotenv/config';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import {log} from './util/logs';
import paysheet from './routes/paysheets';
import calender from './routes/calender';
import {
  ROUTES,
  SERVER,
  PORT_CONSTANT,
  MORGAN_PARAMS,
  VIEWS,
  VIEW_ENGINE,
  HTML,
} from './constants';

const {PORT} = process.env;
const {PAYSHEET_ROUTE, HOME_ROUTE, STATTIC_ROUTE, VIEW_ROUTE, PUBLIC} = ROUTES;

const app = express();

app.use(STATTIC_ROUTE, express.static(path.join(__dirname, PUBLIC)));
app.set(VIEWS, __dirname + VIEW_ROUTE);
app.set(VIEW_ENGINE, HTML);
app.engine(HTML, ejs.renderFile);
//middleware
app.use(helmet());
app.use(morgan(MORGAN_PARAMS));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

//routes
app.use(PAYSHEET_ROUTE, paysheet);
app.use(HOME_ROUTE, calender);

//server
const port = !!PORT ? PORT : PORT_CONSTANT;
app.listen(port, () => {
  log(SERVER(port));
});
