const express = require('express');
const router = express.Router();
const program_schema = require('../model/programs');
const courses_schema = require('../model/courses');


router.post('/getProgram', async (req, res) => {
    const { code } = req.body;
    const programs = await program_schema.findOne({POStID: code});

    if(programs){
        res.status(200).json(programs);
    }
    else{
        res.status(409).json({error: "Program not found"});
    }
});

router.post('/getCourse', async (req, res) =>{
    const { courseCode } = req.body;
    const courses = await courses_schema.findOne({courseCode});
    if(courses){
        res.status(200).json(courses.data);
    }
    else{
        res.status(409).json({error: "Course not found"});
    }
});

module.exports = router;