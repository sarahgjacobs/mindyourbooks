const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const sequelizeConfig = require('./config');
const Review = require('../server/models/Review');


// const sequelize = new Sequelize(database, username, password, {
//     host: 'localhost',
//     dialect: 'mysql'
//   });
  

const env = process.env.NODE_ENV || 'reviewDB';
const config = sequelizeConfig[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Tests database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

sequelize.sync().then(() => {
  console.log('Database success');
});

app.use(bodyParser.json());


app.listen(3001, () => (console.log("Server started")))

app.post('/api/reviews', (req, res) => {
    const { title, rating, genre } = req.body;
  });




