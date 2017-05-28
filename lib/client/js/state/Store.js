/*
 * @class Store
 */
var Store = (function() {
    /**
     * @alias Store
     * @constructor
     * @param {Object} initialProps - A custom props object
     */
    function Store(initialProps) {
        /**
         * The mediated Event Emitter instance
         *
         * @member {EventEmitter}
         */
        this._emitter = new EventEmitter();

        /**
         * The initial props declaration
         *
         * @member {Object}
         */
        this._props = initialProps || {};
    }

    /**
     * @public
     * @function
     * @param {String} name - the name of the prop being changed
     * @param {*} value - the value the prop is being set to
     * @returns {Store} self for chaining
     */
    Store.prototype.setProp = function(name, value) {
        console.debug("Prop change: {" + name + " : " + value + "}");

        // Update the internal state
        this._props[name] = value;

        // Tell subscribers that this prop has changed
        this._emitter.emit(name, value);

        return this;
    };

    /**
     * @public
     * @function
     * @param {String} name - the name of the prop to retrieve
     * @returns {*} the prop being retrieved
     */
    Store.prototype.getProp = function(name) {
        var prop = this._props[name];
        console.debug("Retrieving prop: {" + name + " : " + prop + "}");
        return prop;

    };

    /*
     * Attach a listener to the Store
     *
     * @public
     * @function
     * @param {String} the name of the event to listen to
     * @param {Function} the callback to run when the event is fired
     * @returns {Store} self for chaining
     */
    Store.prototype.on = function() {
        this._emitter.on.apply(this._emitter, arguments);

        return this;
    };

    return Store;
}());