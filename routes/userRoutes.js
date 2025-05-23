import * as UserController from "../controller/userController.js";
import express from "express";
const  router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);

export default router; 