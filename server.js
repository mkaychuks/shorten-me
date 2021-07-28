const express = require('express');
const urlRouter = require('./routes/urlRoutes');
const app = express(); // init express app

app.use(express.json()); // allow json inputs and res
app.use('/api/', urlRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server listening on port 5000...');
});
