/**
 * Content class that extends from the base Control class to
 * dynamically build and update a UI container that will
 * house the Header, Notifications, and CoffeeBump sections.
 *
 * @class
 */
var Content = (function () {
    /**
     * @alias Menu
     */
    function Content() {
        /** @member {Object} */
        /** @member {Object} */
        /** @member {Object} */
        this._Header = new Header();
        this._Notifications = new Notifications();
        this._CoffeeBump = new CoffeeBump();
    }

    Content.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * Content instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view. This should only be
     * used internally. This will be used indirectly by consumers through
     * the render method.
     *
     * @private
     * @function Content#view
     * @returns Header#view, Notifications#view, and CoffeeBump#view
     */
    Content.prototype.view = function () {
        return $("<section>", { "class": "beans--Content" }).prepend(
            this._Header.view(),
            this._Notifications.view(),
            this._CoffeeBump.view()
        );
    };

    return Content;
})();