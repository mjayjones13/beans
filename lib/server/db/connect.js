var mongoose = require("mongoose");

/**
 * Connects to a mongoDB database
 *
 * @param {String} host - The host string
 * @returns {Object} The mongoose object
 */
function connect(host) {
    host = host || "mongodb://localhost/beans";

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on("connected", function () {
        console.log("Mongoose default connection open to " + host);
    });

    // If the connection throws an error
    mongoose.connection.on("error", function (err) {
        console.log("Mongoose default connection error: " + err);
    });

    // When the connection is disconnected
    mongoose.connection.on("disconnected", function () {
        console.log("Mongoose default connection disconnected");
    });

    // If the Node process ends, close the Mongoose connection
    process.on("SIGINT", function () {
        mongoose.connection.close(function () {
            console.log("Mongoose default connection disconnected through app termination");
            process.exit(0);
        });
    });

    // Default host to localhost/beans when no input is provided
    mongoose.connect(host);

    return mongoose;
}

module.exports = connect;