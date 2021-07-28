const urlHomePage = (request, response) => {
  response.json({
    message: 'Hello world',
    success: true,
  });
};

module.exports = urlHomePage;
