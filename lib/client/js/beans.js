/**
 * @module Beans
 */

import Store from "./state/Store";
import BeansView from "./ui/BeansView";
import $ from "jquery";

import "../css/beans.css";

/**
 * A controller for app-level processes of the Beans application
 *
 * @class module:Beans~Beans
 */
class Beans {
    /**
     * @constructor
     */
    constructor() {
        this.ui = new BeansView({
            store: new Store({
                user: null,
                connections: []
            })
        });
    }

    /**
     * Mounts the Beans' UI to a selector
     *
     * @public
     * @function module:Beans~Beans.mount
     * @param {string} selector - a jquery selector
     * @returns {module:Beans~Beans}
     */
    mount(selector) {
        $(selector).append(this.ui.view());
        return this;
    }
}

// Export a singleton Beans object
export default new Beans();