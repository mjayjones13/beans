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

        this._namespace = "BEANS::UI::CONTROL::CONTENT";
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
        return $(
            "<section>",
            {
                "id": this.getID(),
                "class": "beans--Content"
            }
        ).prepend(
            this._Header.view(),
            this._Notifications.view(),
            this._CoffeeBump.view()
        );
    };

    /**
     * Generic method that can be overridden and used to attach events to certain
     * DOM components.
     *
     * @private
     * @function
     */
    Content.prototype.attachEvents = function()   {
        this._Header.attachEvents();
    };

    return Content;
})();

export default Content;