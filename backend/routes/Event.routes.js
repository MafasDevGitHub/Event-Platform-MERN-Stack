const express = require('express');
const router = express.Router();
const { authMiddlewareVerify } = require('../middleware/Authorization');
const {handleCreateEvent} = require('../controllers/Event.controller');

router.post('/', authMiddlewareVerify, handleCreateEvent);

module.exports = router
