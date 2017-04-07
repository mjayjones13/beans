/**
 * Base Controller class. This class will be extended in order
 * to dynamically mount/update/delete UI components from the DOM
 *
 * @class
 */
var Control = (function () {
    /** @type {number} idCounter */
    var idCounter = 0;

    /**
     * @alias Control
     */
    function Control() {
        /** @member {number} */
        /** @member {Object} */
        /** @member {String} */
        this._id = idCounter++;
        this._$ = null;
        this._namespace = null;
    }

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
    Control.prototype.getElement = function () {
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
    Control.prototype.remove = function () {
        this.getElement().remove();
    };

    /**
     * Generates the view, stashes it for future manipulation in the _$ private
     * member, and returns it to the consumer for mounting.
     *
     * @function Control#render
     * @returns {this._$}
     */
    Control.prototype.render = function () {
        // stash that in the _$ private member
        this._$ = this.view();
        return this._$;
    };

    return Control;
})();

