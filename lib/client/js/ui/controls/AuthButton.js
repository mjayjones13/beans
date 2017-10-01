import Control from "../base/Control";
import $ from "jquery";
import button from "./util/button";

/**
 * The UI Control that manages the AuthButton button component
 * residing in the Header section
 *
 * @class
 */
var AuthButton = (function () {

    /**
     * @alias AuthButton
     */
    function AuthButton(config) {
        // Call the super
        Control.apply(this, [config]);
    }

    AuthButton.prototype = new Control();

    /**
     * Toggles whether the view will display a button that says "Login"
     * or "Logout" based on the user's current state.
     *
     * @private
     * @function
     */
    AuthButton.prototype.view = function () {
        return this.getProp("loggedInUser") ? button.logIn() : button.logOut();
    };

    /**
     * Sets or clears the current loggedInUser after the Auth Button is clicked
     *
     * @private
     * @function
     */
    AuthButton.prototype.attachEvents = function () {
        var self = this;
        $('#logmod').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
            }
        );

        $(".beans--AuthButton").click(function () {
            self.getProp("loggedInUser")
                ? self.setProp("loggedInUser", null)
                : self.setProp("loggedInUser", "M. James Jones");
            self.refresh();
        });
    };

    /**
     * Refreshes the current view to show updated button.
     *
     * @private
     * @function
     */
    AuthButton.prototype.refresh = function () {
        $(".beans--AuthButton").replaceWith(this.view());
        this.attachEvents();
    };

    return AuthButton;

})();

export default AuthButton;