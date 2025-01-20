const express = require('express');
const router = express.Router();
const { authMiddlewareVerify } = require('../middleware/Authorization');
const {handleCreateEvent, handleGetEvent} = require('../controllers/Event.controller');

router.post('/', authMiddlewareVerify, handleCreateEvent);
router.get('/', handleGetEvent)

module.exports = router
