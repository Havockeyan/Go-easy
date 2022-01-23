const express = require('express');

const userController = require('./../controller/userController');
const auth = require('./../auth/authMiddleware').auth;

const router = express.Router();

router.post('/login', userController.login);

router.post('/signup', userController.createUser);

router.get('/attendence', auth, userController.getAttendence);

router.get('/attendencestaff/:rollno', auth, userController.getAttendencestaff);

router.get('/user', auth, userController.getUser);

module.exports = router;