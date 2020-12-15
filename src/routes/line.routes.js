import {Router} from 'express'
const router = Router();

import * as lineCtrl from "../controllers/line.controller";
import { authJwt } from '../middlewares/index';

router.get('/', lineCtrl.getLine);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], lineCtrl.createLine);
router.get('/:id', lineCtrl.getLineById);
router.put('/:id',[authJwt.verifyToken,authJwt.isAdmin], lineCtrl.updateLinelById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin], lineCtrl.deleteLinelById);
export default router;