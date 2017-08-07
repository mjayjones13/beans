/**
 * @module Beans/state/Store
 * @requires event-emitter
 */

import EventEmitter from "event-emitter";

/**
 * A class that can be used to store properties. Consumers
 * can listen to properties within a `Store` instance; when
 * a property is changed an event with the name of the same
 * is emitted where the payload is the value of the property.
 *
 * @class module:Beans/state/Store~Store
 */
class Store {
    /**
     * @constructor
     * @param {Object} [initialProps={}] - Optional: the initial props; defaults to the empty object
     */
    constructor(initialProps = {}) {
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
        this._props = initialProps;
    }

    /**
     * @public
     * @function module:Beans/state/Store~Store.setProp
     * @param {String} name - the name of the prop being changed
     * @param {*} value - the value the prop is being set to
     * @returns {Store} self for chaining
     * @fires module:Beans/state/Store~Store#propChange
     */
    setProp(name, value) {
        console.debug("Prop change: {" + name + " : " + value + "}");

        // Update the internal state
        this._props[name] = value;

        /**
         * Tell subscribers that this prop has changed
         *
         * @event module:Beans/state/Store~Store#propChange
         * @type {*}
         */
        this._emitter.emit(name, value);

        return this;
    }

    /**
     * @public
     * @function module:Beans/state/Store~Store.getProp
     * @param {String} name - the name of the prop to retrieve
     * @returns {*} the prop being retrieved
     */
    getProp(name) {
        const prop = this._props[name];
        console.debug("Retrieving prop: {" + name + " : " + prop + "}");
        return prop;
    }

    /**
     * Attach a listener to the Store
     *
     * @public
     * @function module:Beans/state/Store~Store.on
     * @returns {Store} self for chaining
     */
    on(...args) {
        this._emitter.on(...args);
        return this;
    }
}

export default Store;