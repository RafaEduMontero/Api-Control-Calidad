import {Router} from 'express'
const router = Router()

import * as defectCtrl from "../controllers/defects.controller";
import { authJwt } from '../middlewares/index';

router.get('/', defectCtrl.getDefect);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], defectCtrl.createDefect);
router.get('/:id', defectCtrl.getDefectById);
router.put('/:id',[authJwt.verifyToken,authJwt.isAdmin], defectCtrl.updateDefectById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin], defectCtrl.deleteDefectById);
export default router;