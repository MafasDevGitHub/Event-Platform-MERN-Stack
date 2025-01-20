const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/Authorization');
const userController = require('../controllers/User.controller');

module.exports = router