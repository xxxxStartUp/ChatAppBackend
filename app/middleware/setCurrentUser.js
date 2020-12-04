// get 
const getUsers = require("../../database/dummy/_users");

module.exports = function setCurrentUser(req, res, next) {
    // uncomment the next line and go to {port}/user, unauthorized error should be gone now
    // req.user = getUsers[0]; 
    console.log(getUsers[0])
    next();
};