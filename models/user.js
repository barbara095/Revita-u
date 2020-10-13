// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
mongoose.promise = Promise;
// Creating our User model

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: false, 
    allowNull: false,
    required: false
  },
  password: {
    type: String,
    unique: false,
    allowNull: false, 
    required: false
  }

})

userSchema.methods = {
  validPassword: inputPassword => {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: textPassword => {
    return bcrypt.hashSync(textPassword, 10)
  }
}

userSchema.pre('save', next => {
  if (!this.password) {
    console.log('models/user.js ---- No password provided')
    next()
  } else {
    console.log('models/user.js ---- hashpassword in pre-save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', userSchema);
module.exports = User;



