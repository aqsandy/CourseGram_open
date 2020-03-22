const express = require('express');
const connect_db = require('./config/db');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config()
const secret = 'secretsecret';

// Connect to database
connect_db();

//Middleware
const authMiddleWare = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } 
    else {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(err);
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.user = decoded.user;
          next();
        }
      });
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/programs', require('./routes/program'));
const PORT = process.env.PORT;
app.listen(PORT, function() {
  console.log(`Node server listening on port ${PORT}!`);
});