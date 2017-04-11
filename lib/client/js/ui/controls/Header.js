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
    function Header() {
        // turn the arguments of this constructor into an array
        var args = Array.prototype.slice.call(arguments);

        /*
         * @see {@link http://tobyho.com/2010/11/22/javascript-constructors-and/}
         */

        // Apply the Control constructor to the Header instance with the input arguments
        Control.apply(this, args);
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
                    .text("Beans")
            );
    };

    return Header;
})();