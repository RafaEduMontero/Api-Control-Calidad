import {Router} from 'express'
const router = Router();
import * as userCtrl from '../controllers/user.controller';
import {authJwt} from '../middlewares';
import {verifySignup} from '../middlewares'


router.post('/',[authJwt.verifyToken,authJwt.isAdmin],userCtrl.createUser);
router.get('/',userCtrl.getUsers);
router.get('/:id',userCtrl.getUserById)
router.put('/:id',verifySignup.checkDuplicateUsernameOrEmail,[authJwt.verifyToken,authJwt.isAdmin],userCtrl.updateUserById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin],userCtrl.deleteUserById);
export default router;