/**
 * The UI Control that manages the Notifications section of
 * the BeansContent
 *
 * @class
 */
var Notifications = (function () {
    /**
     * @alias Notifications
     */
    function Notifications() {
        // turn the arguments of this constructor into an array
        var args = Array.prototype.slice.call(arguments);

        /*
         * @see {@link http://tobyho.com/2010/11/22/javascript-constructors-and/}
         */

        // Apply the Control constructor to the Notifications instance with the input arguments
        Control.apply(this, args);
    }

    Notifications.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * Notifications instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view. This should only be
     * used internally. This will be used indirectly by consumers through
     * the render method.
     *
     * @private
     * @function
     * @returns {$}
     */
    Notifications.prototype.view = function () {
        // create our jquery object anew
        return $("<section>", { "class": "beans--Notifications" });
    };

    return Notifications;
})();