const express = require('express');

const app = express(); // init express app

app.listen(process.env.PORT || 5000, () => {
  console.log('Server listening on port 5000...');
});
