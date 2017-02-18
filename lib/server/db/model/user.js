var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beans');

var User = mongoose.model(
    'User',
    {
        username: String,
        password: String,
        friends: []
    }
);

module.exports =  User;

