const User = require("../../models/user");

module.exports = (app) => {
// For sign up
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let ( email ) = body;

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank'
      })
    }

    email = email.toLowerCase();
    email = email.trim();

    User.find({
      email: email
    }, (error, previousUsers) => {
      
    })
  })
}