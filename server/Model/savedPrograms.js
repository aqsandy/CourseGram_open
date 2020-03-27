const mongoose = require('mongoose');

const Saved = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    programs: [String]
});

module.exports = mongoose.model('SavedPrograms', Saved);