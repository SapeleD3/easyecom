import * as express from 'express';
import {genPaysheet, getPaysheet} from '../controller/paysheet';
const router = express.Router();
import * as multer from 'multer';
import {ROUTES, DEST} from '../constants';

const upload = multer({dest: DEST});

const {HOME_ROUTE} = ROUTES;

router.get(HOME_ROUTE, getPaysheet);
router.post(HOME_ROUTE, upload.array('doc'), genPaysheet);

export default router;
