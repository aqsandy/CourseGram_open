const express = require('express');
const router = express.Router();
const program_schema = require('../model/programs');
const courses_schema = require('../model/courses');


router.post('/getProgram', async (req, res) => {
    const { code } = req.body;
    const programs = await program_schema.findOne({code});

    if(programs){
        res.status(200).json(programs);
    }
    else{
        res.status(409).json({error: "Program not found"});
    }
});

router.post('/getCourse', async (req, res) =>{
    const { code } = req.body;
    const courses = await courses_schema.find({code});
    if(courses){
        res.status(200).json({courses});
    }
    else{
        res.status(409).json({error: "Course not found"});
    }
});

router.post('/getValidCourses', async (req, res) =>{
    const { code } = req.body;
    const programs = await program_schema.findOne({code});
    let courses = [];
    if(programs){
        
    }
    else{
        res.status(409).json({error: "Program not found"});
    }
});
module.exports = router;