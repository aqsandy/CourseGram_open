const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {type: String, required: true },
  password: { type: String, required: true },
  isAdmin: {type: Boolean, required: true },
  requestDelete: {type: Boolean, required: true},
  programs: [String]
});

Users.pre('save', function (next){
// Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        
        const document = this;
        const callback = (e, hashedPassword) => {
          if (!e) {
              document.password = hashedPassword;
              next();
          }
          else {
              console.log(e)
              next(e);
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