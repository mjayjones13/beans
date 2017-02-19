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
    });

    josh.save();
    mike.save();
}

removeAllUsers();
seedUserCollection();