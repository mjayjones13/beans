/**
 * Base Controller class. This class will be extended in order
 * to dynamically mount/update/delete UI components from the DOM
 *
 * @class
 */
var Control = (function() {
    /** @type {number} idCounter */
    var idCounter = 0;

    /**
     * @alias Control
     * @param {Object} config - The configuration of the control
     * @property {Store} config.store - the props store
     */
    function Control(config) {
        /** @member {number} */
        /** @member {Object} */
        /** @member {String} */
        this._id = idCounter++;
        this._$ = null;
        this._namespace = null;

        if (config && config.store) {
            this._store = config.store;
        }
    }

    /**
     * Start State Management
     */

    /**
     * @public
     * @function
     * @param {String} name - the name of the prop to set in the store
     * @param {*} value - the value of the prop to set in the store
     * @returns {Control}
     */
    Control.prototype.setProp = function() {
        this._store.setProp.apply(this._store, arguments);
        return this;
    };

    /**
     * @public
     * @function
     * @param {String} name - the name of the prop to retrieve from the store
     * @returns {*}
     */
    Control.prototype.getProp = function() {
        return this._store.getProp.apply(this._store, arguments);
    };

    /**
     * @public
     * @function
     * @param {String} name - the name of the event to listen to
     * @param {Function} callback - the callback to run when the event is fired
     * @returns {Control}
     */
    Control.prototype.on = function() {
        this._store.on.apply(this._store, arguments);
        return this;
    };

    /**
     * End State Management
     */

    /**
     * Setter for namespace member variable.
     *
     * @function Control#setNameSpace
     * @param {string} namespace - class identifier for newly created DOM element
     */
    Control.prototype.setNameSpace = function(namespace) {
        this._namespace = namespace;
    };

    /**
     * Concatenates namespace and id member variables to form unique id for DOM element.
     *
     * @function Control#getID
     * @returns {String}
     */
    Control.prototype.getID = function() {
        return this._namespace + "_" + this._id;
    };

    /**
     * Getter for this DOM element. Also sets element if it is null.
     *
     * @function Control#getElement
     * @returns {Object}
     */
    Control.prototype.getElement = function() {
        if (this._$ === null) {
            this._$ = $("#" + this._id);
        }
        return this._$;
    };

    /**
     * Removes DOM element.
     *
     * @function Control#remove
     */
    Control.prototype.remove = function() {
        this.getElement().remove();
    };

    /**
     * A pure function that returns a jquery object containing the view for the control.
     * NOTE: Must be overridden.
     *
     * @public
     * @function
     * @returns {$}
     */
    Control.prototype.view = function() {
        throw new Error("Control#view must be overridden");
    };

    /**
     * Generates the view, stashes it for future manipulation in the _$ private
     * member, and returns it to the consumer for mounting.
     *
     * @function Control#render
     * @returns {this._$}
     */
    Control.prototype.render = function() {
        // stash that in the _$ private member
        this._$ = this.view();
        return this._$;
    };

    /**
     * Generic method that can be overridden and used to attach events to certain
     * DOM components.
     *
     * @private
     * @function
     */
    Control.prototype.attachEvents = function() {

    };

    return Control;
})();

export default Control;