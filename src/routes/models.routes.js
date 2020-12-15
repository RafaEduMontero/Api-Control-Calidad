import {Router} from 'express'
const router = Router();

import * as modelCtrl from "../controllers/model.controller";
import { authJwt } from '../middlewares/index';

router.get('/', modelCtrl.getModel);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], modelCtrl.createModel);
router.get('/:id', modelCtrl.getModelById);
router.put('/:id',[authJwt.verifyToken,authJwt.isAdmin], modelCtrl.updateModelById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin], modelCtrl.deleteModelById);
export default router;