const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid'); // init shortener package

// schemaValue
const shortUrlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

ShortUrl = mongoose.model('cloud', shortUrlSchema);

module.exports = ShortUrl;
