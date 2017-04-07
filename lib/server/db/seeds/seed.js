var mongoose = require("../connect")();
var seedConnections = require("./connection");
var seedUsers = require("./user");

seedUsers([
    {
        firstName: "mike",
        lastName: "jones",
        username: "mike",
        password: "mike"
    },
    {
        firstName: "josh",
        lastName: "cox",
        username: "josh",
        password: "josh"

    }
])
    .then(function() {
        seedConnections([
            {
                user: "josh",
                friends: ["mike"]
            },
            {
                user: "mike",
                friends: ["josh"]
            }
        ]);
    });
