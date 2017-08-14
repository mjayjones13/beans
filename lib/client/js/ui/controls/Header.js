import Control from "../base/Control";
import AuthButton from "./AuthButton";
import $ from "jquery";

/**
 * The UI Control that manages the Header section of
 * the BeansContent
 *
 * @class
 */
var Header = (function () {
    /**
     * @alias Header
     */
    function Header(config) {
        // Call the super
        Control.apply(this, [ config ]);

        /** @member {Menu} */
        this._AuthButton = new AuthButton(config);
    }

    Header.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * Header instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view. This should only be
     * used internally. This will be used indirectly by consumers through
     * the render method.
     *
     * @private
     * @function
     * @returns {$}
     */
    Header.prototype.view = function () {
        // create our jquery object anew
        return $("<header>", { "class": "beans--Header" })
            .append(
                $("<h1>", { "class": "beans--Header-title" })
                    .text("Beans"),
                this._AuthButton.view()
            )
    };

    /**
     * Generic method that can be overridden and used to attach events to certain
     * DOM components.
     *
     * @private
     * @function
     */
    Header.prototype.attachEvents = function () {
        this._AuthButton.attachEvents();
    }

    return Header;
})();

export default Header;