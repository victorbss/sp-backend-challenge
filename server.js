const express = require('express'),
	  app = express(),
	  port = process.env.PORT,
	  routes = require('./api/routes/userRoutes');

routes(app);

app.get('/api', (req, res) => {
  res.send('API is running!');
})

let server = app.listen(port, function () {
    console.log("API running on port:", server.address().port);
});
