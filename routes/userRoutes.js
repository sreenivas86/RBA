const router=require('express').Router();
const {admin,manager,user}=require('../controllers/userControllers')
const validToken=require('../middlewares/validToken')
const authorizeRoles=require('../middlewares/roleMiddleware')
// urlss

router.get("/admin",validToken,
    authorizeRoles("admin"),
    admin)
router.get('/manager',validToken,
    authorizeRoles("admin","manager"),
    manager)
router.get('/user',validToken,
    authorizeRoles("admin","manager","user"),
    user)


module.exports=router;