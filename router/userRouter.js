const router = require('express').Router()
const Validation = require('../validation/joi')
const Controller =require('../controller/userController')

router.post('/createUser',Validation.createUser,Controller.createUserController)
router.get('/getAllUsers',Controller.getUserController)
router.get('/getbyid/:userId',Controller.getSingleUserController)
router.put('/update/:userId',Controller.UpdateController)
router.delete('/delete/:userId',Controller.deleteController)

module.exports = router