const express = require('express');
const router = express.Router();
const user_schema = require('../model/users');
const jwt = require('jsonwebtoken');
const secret = "secretsecret";

// POST route to register a user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    let userExists = await user_schema.findOne({username});
    let emailExists = await user_schema.findOne({email}); 
    if(userExists){
      res.status(409).json({error: "Username already exists"});
    }
    else if(emailExists){
      res.status(409).json({error: "Email has been used before"});
    }
    else{
      const isAdmin = false;
      const user = new user_schema({ username, email, password, isAdmin });
      user.save((err) => {
        if (err) {
          console.log(err)
          res.status(500).send(err);
        }
        else {
          res.status(200).send("Registered");
        }
      });
    }
  }
);

//Not sure about this
//*********/
router.get("/signout", (req, res) => {
  console.log(req.headers)
  res.status(200)
  res.clearCookie("token")
});

router.post('/login', async (req, res)  => {
    const { username, password } = req.body;
    let user = await user_schema.findOne({username}); 
    
    if(!user){
      res.status(404).json({
          error: 'User not found'
      });
    }
    else{
      
      user.checkPassword(password, (err, same) => {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        }

        else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect username or password'
          });
        }

        else {
          // Issue token
          const payload = { user };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .status(200)
            .json(payload)
        }
      });
    }
  }
);

module.exports = router;
