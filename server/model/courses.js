const mongoose = require('mongoose');

const courses = new mongoose.Schema({
    courseCode: { type: String, required: true, unique: true },
    data: {
        courseTitle: { type: String, required: true, unique: true },
        courseDescription: { type: String, required: true, unique: true },
        prerequisite: [{type: String}],
        corequisite: [{type: String}],
        exclusion: { type: String, required: true, unique: true },
        breadthCategories: { type: String, required: true, unique: true },
        distributionCategories: { type: String, required: true, unique: true }
    }
});

module.exports = mongoose.model('courses', courses);
