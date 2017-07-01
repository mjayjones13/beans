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
    function BeansView(config) {
        // Call the super
        Control.apply(this, [ config ]);

        /** @member {Menu} */
        this._Menu = new Menu(config);
        /** @member {Content} */
        this._Content = new Content(config);
    }

    BeansView.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * BeansView instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view.
     *
     * @private
     * @function BeansView#view
     * @returns {$}
     */
    BeansView.prototype.view = function () {
        return [
            this._Menu.view(),
            this._Content.view()
        ];
    };

    return BeansView;
})();