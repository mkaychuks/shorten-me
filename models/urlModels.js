const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nanoid = require('nanoid'); // init shortener package

// this function generates an unique identifier

const shortUrlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: nanoid(10),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

ShortUrl = mongoose.model('cloud', shortUrlSchema);

module.exports = ShortUrl;
