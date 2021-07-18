const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/helps', siteController.helps);
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
