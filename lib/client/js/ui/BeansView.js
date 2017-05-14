/**
 * BeansView class that extends from the base Control class to
 * dynamically build and update a UI container that will
 * house the main menu and content sections.
 *
 * @class
 */
var BeansView = (function () {
    /**
     * @alias BeansView
     */
    function BeansView() {
        /** @member {Object} */
        /** @member {Object} */
        this._Menu = new Menu();
        this._Content = new Content();
    }

    BeansView.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * BeansView instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view. This should only be
     * used internally. This will be used indirectly by consumers through
     * the render method.
     *
     * @private
     * @function BeansView#view
     * @returns Menu#view and Content#view
     */
    BeansView.prototype.view = function () {
        return [
            this._Menu.view(),
            this._Content.view()
        ];
    };

    return BeansView;
})();