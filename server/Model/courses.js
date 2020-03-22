const mongoose = require('mongoose');
const courses = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('courses', courses);
