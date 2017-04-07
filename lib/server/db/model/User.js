var mongoose  = require("mongoose"),
    validator = require("node-mongoose-validator");

// define a schema
var userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    username:  { type: String, required: true },
    password:  { type: String, required: true }

});

// Validations
userSchema.path("firstName").validate(validator.notEmpty(), "Please provide a first name.");
userSchema.path("lastName").validate(validator.notEmpty(), "Please provide a last name.");
userSchema.path("username").validate(validator.notEmpty(), "Please provide a username.");
userSchema.path("password").validate(validator.notEmpty(), "Please provide a password.");

// Compile our model
var User = mongoose.model("User", userSchema);

// Log error to the console
User.on("error", function(err) {
    console.log(err);
});

// Virtual property getter & setter for user.fullName
userSchema.virtual("fullName")
    .get(function () { return this.firstName + " " + this.lastName; })
    .set(function(v) {
        this.firstName = v.substr(0, v.indexOf(" "));
        this.lastName = v.substr(v.indexOf(" ") + 1);
    });

module.exports =  User;
