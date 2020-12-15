import {Router} from 'express'
const router = Router()

import * as colortCtrl from "../controllers/color.controller";
import { authJwt } from '../middlewares/index';

router.get('/', colortCtrl.getColor);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], colortCtrl.createColor);
router.get('/:id', colortCtrl.getColorById);
router.put('/:id',[authJwt.verifyToken,authJwt.isAdmin], colortCtrl.updateColorById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin], colortCtrl.deleteColorById);
export default router;