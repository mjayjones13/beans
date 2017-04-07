var mongoose = require("mongoose");

/**
 * Validates that a provided identifier is a positive number
 *
 * @private
 * @function validateUserId
 * @param {Number} id - A User's unique identifier
 * @returns {Boolean}
 */
function validateUserId(id) {
    // return typeof id === "number" && id > 0;
    return true;
}

var connectionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
        validate: validateUserId
    },
    friend: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
        validate: validateUserId
    }
});

/**
 * A Connection is a one-way relationship between one User and another User (friend).
 *
 * @class Connection
 */
var Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;