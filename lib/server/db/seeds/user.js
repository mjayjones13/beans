var User = require("../model/User");

/**
 * @typedef {Object} UserSeedConfig
 * @property {String} firstName - The first name of the User
 * @property {String} lastName - the last name of the User
 * @property {String} username - the username of the User
 * @property {String} password - the password of the User
 */

/**
 * Creates a User instance
 *
 * @private
 * @function createUser
 * @param {UserSeedConfig} config - The config for a single user
 * @returns {User}
 */
function createUser(config) {
    return new User({
        firstName: config.firstName,
        lastName: config.lastName,
        username: config.username,
        password: config.password
    });
}

/**
 * @public
 * @function seedUsers
 * @param {UserSeedConfig[]} configs - An array of UserSeedConfig objects
 * @returns {Promise} for chaining seeds together synchronously
 */
module.exports = function(configs) {
    return User
        .remove({})
        .then(function() {
            console.log("Successfully removed all Users.");
        })
        .then(function() {
            configs.forEach(function (config) {
                createUser(config)
                    .save()
                    .then(function(result, number) {
                        console.log("Successfully added ", number, " user: \n", result);
                    })
                    .catch(console.error);
            });
        })
        .catch(console.error);
};