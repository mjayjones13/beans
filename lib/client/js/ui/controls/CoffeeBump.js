/**
 * The UI Control that manages the CoffeeBump button component
 * residing in the BeansContent section
 *
 * @class
 */
var CoffeeBump = (function() {

    /**
     * @alias CoffeeBump
     */
    function CoffeeBump(config) {
        // Call the super
        Control.apply(this, [config]);
    }

    CoffeeBump.prototype = new Control();

    /**
     * A "pure" view method, which is to say that mutation of the
     * CoffeeBump instance should not happen here. It just takes what's in
     * the instance and uses it to provide a view. This should only be
     * used internally. This will be used indirectly by consumers through
     * the render method.
     *
     * @private
     * @function CoffeeBump#view
     * @returns {$}
     */
    CoffeeBump.prototype.view = function() {
        // create our jquery object anew
        return $("<button>", { "class": "beans--CoffeeBump" })
            .text("Bump");
    };

    return CoffeeBump;
})();