const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/users.controller');

userRouter.get('/',userController.getUsers);
userRouter.get('/:id',userController.getUser);
userRouter.post('/',userController.saveUser);
userRouter.put('/:id',userController.updateUser);
userRouter.delete('/:id',userController.deleteUser);

module.exports = userRouter;