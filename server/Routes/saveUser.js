const express = require('express');
const router = express.Router();
// const saved_schema = require('../model/savedPrograms');
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

router.post('/saveUserUsername', async (req, res) => {
    const { username, newUsername } = req.body;
    if(!username || !newUsername){
        res.status(400).send("Username or newUsername not provided");
    }
    let userExists = await user_schema.findOne({username});
    if(userExists){
        userExists.username = newUsername
        userExists.save((err) => {
            if (err) {
              console.log(err)
              res.status(500).send(err);
            }
            else {
              res.status(200).send("User saved");
            }
        });
    }
    else{
        res.status(404).send("User not found"); 
    }
});

router.post('/saveUserEmail', async (req, res) => {
    const { username, email } = req.body;
    if(!username || !email){
        res.status(400).send("Username or email not provided");
    }
    let userExists = await user_schema.findOne({username});
    if(userExists){
        userExists.email = email
        userExists.save((err) => {
            if (err) {
              console.log(err)
              res.status(500).send(err);
            }
            else {
              res.status(200).send("User saved");
            }
        });
    }
    else{
        res.status(404).send("User not found"); 
    }
});

router.post('/saveUserPassword', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        res.status(400).send("Username or password not provided");
    }
    let userExists = await user_schema.findOne({username});
    if(userExists){
        userExists.password = password
        userExists.save((err) => {
            if (err) {
              console.log(err)
              res.status(500).send(err);
            }
            else {
              res.status(200).send("User saved");
            }
        });
    }
    else{
        res.status(404).send("User not found"); 
    }
});

router.post('/saveUserProgram', async (req, res) => {
    const { username, program } = req.body;
    if(!username || !program){
        res.status(400).send("Username or program not provided");
    }
    let userExists = await user_schema.findOne({username});
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
            });
        }
        else{
            res.status(403).send("Program already saved");
        }
    }
    else{
        res.status(404).send("User not found"); 
    }
});

router.post('/removeUserProgram', async (req, res) => {
    console.log("Reached")
    const { username, program } = req.body;
    if(!username || !program){
        res.status(400).send("Username or program not provided");
    }
    let userExists = await user_schema.findOne({username});
    if(userExists){
        if(userExists.programs.includes(program)){
            userExists.programs.splice(userExists.indexOf(program), 1)
            userExists.save((err) => {
                if (err) {
                  console.log(err)
                  res.status(500).send(err);
                }
                else {
                  res.status(200).send("User saved");
                }
            });
        }
        else{
            res.status(403).send("Program already removed");
        }
    }
    else{
        res.status(404).send("User not found"); 
    }
});

module.exports = router;