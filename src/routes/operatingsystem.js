const express = require('express');
const router = express.Router();

const operatingSystemController = require('../app/controllers/OperatingSystemController');

router.use('/:slug', operatingSystemController.show);
router.use('/', operatingSystemController.index);

module.exports = router;
