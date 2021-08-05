const ShortUrl = require('../models/urlModels');

const urlHomePage = (req, res) => {
  res.json({
    message: 'Hello world',
    success: true,
  });
};

// handle the POST REQUEST to create a short url
const shortUrl = async (req, res) => {
  try {
    const shortUrlDefault = new ShortUrl({
      full: req.body.fullUrl,
    });
    const shortenedUrl = await shortUrlDefault.save();
    res.status(200).json({ success: true, data: shortenedUrl });
  } catch (err) {
    res.send(err);
  }
};

// return the shortened url from the database
const getShortenedUrl = async (req, res) => {
  const shortenedUrlParse = await ShortUrl.findOne({
    short: req.params.shortUrl,
  });
  if (!shortenedUrlParse) {
    return res.status(404).json({ message: 'Url does not exist' });
  }
  res.status(200).json({ success: true, message: 'Linking to new url' });
};

module.exports = { urlHomePage, shortUrl, getShortenedUrl };
