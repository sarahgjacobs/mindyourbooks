const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());





app.listen(3001, () => (console.log("Server started")))

app.post('/api/reviews', (req, res) => {
    const { title, rating, genre } = req.body;
  });




