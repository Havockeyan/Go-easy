//node_import
const express = require('express');

//local_import
const leaveController = require('./../controller/leaveController');
const auth = require('./../auth/authMiddleware').auth;

const router = express.Router();

router.get('/leave', auth, leaveController.getLeave);

router.get('/leavestaff/:rollno', auth, leaveController.getLeavestaff);
router.post('/leave/accetp', auth, leaveController.updateLeave);

router.post('/leave', auth, leaveController.putLeave);

module.exports = router;