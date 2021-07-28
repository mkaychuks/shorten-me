const { Router } = require('express');
const urlHomePage = require('../controllers/urlController');

const router = Router();

router.get('/', urlHomePage);

module.exports = router;
