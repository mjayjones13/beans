import $ from "jquery";

/**
 *
 * @param config - Object
 * @param {String} config.text - text of the button
 * @param {String} config.class - class of the button
 * @param {String} config.href - URL or URL fragment
 *
 * @returns {$}
 */
function createButton (config) {
    return $("<a>", {
        "class": "btn modal-trigger " + config.class || "" ,
        "href" : config.href || ""
    }).text(config.text || "");
}

/**
 *
 * @returns {$}
 */
function logIn () {
    return createButton({
        text: "Login",
        class: "beans--AuthButton",
        href: "#logmod"
    });
}

/**
 *
 * @returns {$}
 */
function logOut () {
    return createButton({
        text: "Logout",
        class: "beans--AuthButton",
        href: "#logmod"
    });
}

/**
 *
 * @returns {$}
 */
function signUp () {
    return createButton({
        text:"Sign Up",
        class:"beans--SignUpButton",
        href:"#regmod"
    });
}

export default {logIn, logOut, signUp};