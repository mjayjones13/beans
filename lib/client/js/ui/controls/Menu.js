/**
 * Menu class that extends from the base Control class to
 * dynamically build and update a UI menu containing
 * user/connection information
 *
 * @class
 */
var Menu = (function () {
    /**
     * @alias Menu
     */
    function Menu(config) {
        // Call the super
        Control.apply(this, [ config ]);
    }

    Menu.prototype = new Control();

    /**
     * Decorates a jquery object with the header
     *
     * @private
     * @function
     * @inner
     */
    var viewHeader = function($menu) {
        return $menu.append(
            $("<header>", { "class": "beans--Header" })
                .text("Menu")
        );
    };

    /**
     * Decorates a jquery object with the connections list
     *
     * @private
     * @function
     * @inner
     */
    var viewConnectionsList = function($menu) {
        return $menu.append(
            $("<ul>")
        );
    };

    /**
     * A "pure" view method, which is to say that mutation of the
     * Menu instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view. This should only be
     * used internally. This will be used indirectly by consumers through
     * the render method.
     *
     * @private
     * @function Menu#view
     * @returns {$}
     */
    Menu.prototype.view = function () {
        // create our jquery object anew
        return viewConnectionsList(
            viewHeader(
                $("<section>", { "class": "beans--Menu" })
            )
        );
    };

    return Menu;
})();