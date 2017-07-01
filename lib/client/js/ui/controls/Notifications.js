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
    function Notifications(config) {
        // Call the server
        Control.apply(this, [ config ]);
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