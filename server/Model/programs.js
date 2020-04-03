const mongoose = require('mongoose');
const Programs = new mongoose.Schema({
    POStID: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    type: {type: String},
    campus: {type: String},
    required_credits: { type: String, required: true, unique: true },
    required_courses: [[]],
    subjectPOStCombinations: [[]],
    notes: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('programs', Programs);
