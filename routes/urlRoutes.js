const { Router } = require('express');
const {
  urlHomePage,
  shortUrl,
  getShortenedUrl,
} = require('../controllers/urlController');

const router = Router();

router.get('/', urlHomePage);
router.post('/create/', shortUrl); // shortened format of url
router.get('/:shortUrl', getShortenedUrl);

module.exports = router;
