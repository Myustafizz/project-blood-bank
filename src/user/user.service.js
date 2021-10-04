const User = require('./user.model');

module.exports.createUser = (userInfo) => {
  return User.create(userInfo);
};

module.exports.findUserByPhonel = (phone) => {
  return User.findOne({ phone: phone });
};
