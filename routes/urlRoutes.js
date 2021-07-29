const { Router } = require('express');
const {
  urlHomePage,
  shortUrl,
  sendtoShortenedUrl,
} = require('../controllers/urlController');

const router = Router();

router.get('/', urlHomePage);
router.post('/create/', shortUrl); // shortened format of url
router.get('/:shortUrl', sendtoShortenedUrl);

module.exports = router;
