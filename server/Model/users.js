const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 20;
const Users = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  email: {type: String, required: true },
  password: { type: String, required: true },
  isAdmin: Boolean
});

Users.pre('save', (next) => {
// Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const document = this;
        const callback = (e, hashedPassword) => {
            if (!r) {
                document.password = hashedPassword;
                next();
                
            }
            else {
                next(r);
            }
        };
        bcrypt.hash(document.password, saltRounds, callback);
    }
    else {
        next();
    }
});

Users.methods.checkPassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, same) => {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}
module.exports = mongoose.model('Users', Users);