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
        username: "josh",
        password: "josh",
        friends: []
    });

    var mike = new User({
        username: "mike",
        password: "mike",
        friends: ["josh"]
    });

    josh.save();
    mike.save();
}

removeAllUsers();
seedUserCollection();