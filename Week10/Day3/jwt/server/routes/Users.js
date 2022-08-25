import express from 'express';
import {getUsers, register, login, logout} from '../controllers/Users.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/register', register);
router.post('/login', login);
router.delete('/logout', logout);


export default router;


