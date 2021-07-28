const urlHomePage = (req, res) => {
  res.json({
    message: 'Hello world',
    success: true,
  });
};

const shortUrl = (req, res) => {};

module.exports = urlHomePage;
