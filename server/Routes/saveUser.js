const express = require('express');
const router = express.Router();
const saved_schema = require('../model/savedPrograms');
const user_schema = require('../model/users');

router.post('/getUserPrograms', async (req, res) => {
    const { username } = req.body;
    let userExists = await saved_schema.findOne({username});
    if(!userExists){
        res.status(409).send("Cannot find user")
    }
    else{
        res.status(200).json({programs: userExists.programs})
    }
});

router.post('/saveUserProgram', async (req, res) => {
    const { username, program } = req.body;
    let userExists = await saved_schema.findOne({username});
    if(userExists){
        if(!(userExists.programs.includes(program))){
            userExists.programs.push(program)
            userExists.save((err) => {
                if (err) {
                  console.log(err)
                  res.status(500).send(err);
                }
                else {
                  res.status(200).send("User saved");
                }
            })  ;
        }
        else{
            res.status(200).send("Program already saved");
        }
    }
    else{
        const user = new saved_schema({ username, programs: [program] });
        user.save((err) => {
            if (err) {
              console.log(err)
              res.status(500).send(err);
            }
            else {
              res.status(200).send("User saved");
            }
        });
    }
});


module.exports = router;