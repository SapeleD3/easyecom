import * as express from 'express';
import {genPaysheet} from '../controller/paysheet';
const router = express.Router();

router.get('/', genPaysheet);

export default router;
