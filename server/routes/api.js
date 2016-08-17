//Only job is to connect other express ROUTES
const express = require('express');
const router = express.Router();

//root router that other routes like todo uses
router.use('/todos', require('./todos'));

module.exports = router;
