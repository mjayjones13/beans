// Require mongoose for a one-off connection when running the file
// TODO remove this explicit connection with the Seed framework (issue #5)
var mongoose = require("../connect")();
var User = require("../model/user");

function removeAllUsers() {
    // Remove all documents
    // Be sure to include a callback function to the remove method
    User.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("lol success");
        }
    });
}

function seedUserCollection() {
    var josh = new User({
        firstName: "josh",
        lastName: "cox",
        username: "josh",
        password: "",

    });

    var mike = new User({
        firstName: "mike",
        lastName: "jones",
        username: "mike",
        password: "mike",
        friends: ["josh"]
    });

    josh.save();
    mike.save();
}

removeAllUsers();
seedUserCollection();