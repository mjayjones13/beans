import Header from "./Header";
import Notifications from "./Notifications";
import CoffeeBump from "./CoffeeBump";
import Control from "../base/Control";
import $ from "jquery";

/**
 * Content class that extends from the base Control class to
 * dynamically build and update a UI container that will
 * house the Header, Notifications, and CoffeeBump sections.
 *
 * @class
 */
var Content = (function() {
    /**
     * @alias Menu
     */
    function Content(config) {
        // Call the super
        Control.apply(this, [config]);

        /** @member {Header} */
        this._Header = new Header(config);
        /** @member {Notifications} */
        this._Notifications = new Notifications(config);
        /** @member {CoffeeBump} */
        this._CoffeeBump = new CoffeeBump(config);
    }

    Content.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * Content instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view.
     *
     * @private
     * @function Content#view
     * @returns {$}
     */
    Content.prototype.view = function() {
        return $("<section>", { "class": "beans--Content" }).prepend(
            this._Header.view(),
            this._Notifications.view(),
            this._CoffeeBump.view()
        );
    };

    return Content;
})();

export default Content;