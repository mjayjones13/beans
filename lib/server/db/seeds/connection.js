/**
 * Utility for adding configurable Connections seeds to the
 * database.
 *
 * @module ConnectionSeed
 */
var User = require("../model/User");
var Connection = require("../model/Connection");

/**
 * An object literal that embodies the relationships of a single
 * User to multiple other Users.
 *
 * @typedef {Object} ConnectionSeedConfig
 * @property {String} ConnectionSeedConfig.user - The from-User's username
 * @property {String[]} ConnectionSeedConfig.friends - The to-Users' usernames
 */

/**
 * Create connections between a user and a variable number of friends and
 * returns a then-able Promise, passing the connections array to the next "then".
 *
 * @private
 * @function createConnections
 * @param {ConnectionSeedConfig} config
 * @returns {Promise}
 */
function createConnections(config) {
    return User
        .findOne({
            username: config.user
        })
        .then(function (user) {
            return User
                // Find the input config's friends
                .find({
                    // Transform each friend into a Mongoose query configuration object
                    $or: config.friends.map(function (friend) {
                        return {
                            username: friend
                        };
                    })
                })
                // bundle up the user and friends to pass as data
                .then(function (friends) {
                    return {
                        user: user,
                        friends: friends
                    };
                });
        })
        // After retrieving the from-User and all his/her to-Users from the database
        .then(function (data) {
            // Take each "connection" and transform it into a Connection model
            return data.friends.map(function (friend) {
                return new Connection({
                    user: data.user._id,
                    friend: friend._id
                });
            });
        })
        .catch(console.error);
}

/**
 * Saves an array of Connection instances
 *
 * @private
 * @function saveConnections
 * @param {Connection[]} connections - An array of Connections
 * @returns {undefined}
 */
function saveConnections(connections) {
    connections.forEach(function (connection) {
        connection
            .save()
            .then(function(result, number) {
                console.log("Successfully added ", number, " connection: \n", result);
            })
            .catch(console.error);
    });
}

/**
 * @public
 * @function seedConnections
 * @param {ConnectionSeedConfig[]} configs - An array of ConnectionSeedConfigs
 * @returns {Promise} for chaining seeds synchronously
 */
module.exports = function (configs) {
    // Remove all Connection documents
    return Connection
        .remove({})
        .then(function() {
            console.log("Successfully removed all Connections.");
        })
        // after removing, create and save the new connections
        .then(function () {
            configs.forEach(function (config) {
                createConnections(config).then(saveConnections);
            });
        })
        .catch(console.error);
};
