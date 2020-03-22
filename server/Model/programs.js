const mongoose = require('mongoose');
const Programs = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('programs', Programs);
