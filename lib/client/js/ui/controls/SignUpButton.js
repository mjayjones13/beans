import Control from "../base/Control";
import $ from "jquery";
import button from "./util/button";

/**
 * The UI Control that manages the SignUpButton button component
 * residing in the Header section
 *
 * @class
 */
var SignUpButton = (function () {

    /**
     * @alias SignUpButton
     */
    function SignUpButton(config) {
        // Call the super
        Control.apply(this, [config]);
    }

    SignUpButton.prototype = new Control();

    /**
     * Toggles whether the view will display a button that says "Login"
     * or "Logout" based on the user's current state.
     *
     * @private
     * @function
     */
    SignUpButton.prototype.view = function () {
        return button.signUp();
    };

    /**
     * Sets or clears the current loggedInUser after the Auth Button is clicked
     *
     * @private
     * @function
     */
    SignUpButton.prototype.attachEvents = function () {
        var self = this;
        $('#regmod').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
            }
        );
    };

    /**
     * Refreshes the current view to show updated button.
     *
     * @private
     * @function
     */
    SignUpButton.prototype.refresh = function () {
        $(".beans--SignUpButton").replaceWith(this.view());
        this.attachEvents();
    };

    return SignUpButton;

})();

export default SignUpButton;