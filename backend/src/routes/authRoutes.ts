import express from 'express';
import { login, signup } from '../controller/auth.controller';

const router=express.Router();

// router.post('/login',login)

router.post('/signup',signup);
router.post('/signin',login);

export default router;