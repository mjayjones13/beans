import $ from "jquery";


/**
 * Builds modal objects that are displayed after clicking the Sign Up or Login buttons
 *
 * @param config
 * @param {String} config.id - unique id of the modal
 * @param {String} config.header - header of the modal
 * @param {String} config.content - content of the model
 * @param {Boolean} config.isMember - toggles first_name and last_name fields between modals
 *
 * @returns {$}
 */
function createModal(config) {

    return $("<div>", {
        "id": config.id || "",
        "class": "modal"
    }).append(
        $("<div>", {"class": "modal-content"})
            .append($("<h4>").text(config.header))
            .append($("<p>").text(config.content))
            .append(
                $("<form>", {"class": "col s12"})
                    .append(
                        config.isMember
                            ? null
                            : [$("<div>", {"class": "row"})
                                .append(
                                    $("<div>", {"class": "input-field col s12"})
                                        .append($("<input>", {"id": "first_name", "type": "text", "class": "validate"}))
                                        .append($("<label>", {"for": "first_name"}).text("First Name"))
                                ), $("<div>", {"class": "row"})
                                .append(
                                    $("<div>", {"class": "input-field col s12"})
                                        .append($("<input>", {"id": "last_name", "type": "text", "class": "validate"}))
                                        .append($("<label>", {"for": "last_name"}).text("Last Name"))
                                )]
                    )
                    .append(
                        $("<div>", {"class": "row"})
                            .append(
                                $("<div>", {"class": "input-field col s12"})
                                    .append($("<input>", {"id": "user_name", "type": "text", "class": "validate"}))
                                    .append($("<label>", {"for": "user_name"}).text("User Name"))
                            )
                    )
                    .append(
                        $("<div>", {"class": "row"})
                            .append(
                                $("<div>", {"class": "input-field col s12"})
                                    .append($("<input>", {"id": "password", "type": "text", "class": "validate"}))
                                    .append($("<label>", {"for": "password"}).text("Password"))
                            )
                    )
                    .append(
                        $("<div>", {"class": "row button-parent" })
                            .append(
                                $("<a>", {
                                    "class": "btn modal-trigger beans--JoinButton",
                                    "href": "#logmod"
                                }).text("Join")
                            )
                    )
            )
    );
}

/**
 * Calls createModal to build the Login modal
 *
 * @returns {$}
 */
function buildLoginModal() {
    return createModal({
        id: "logmod",
        header: "Welcome Back!",
        content: "",
        isMember: true
    });
}

/**
 * Calls createModal to build the Signup modal
 *
 * @returns {$}
 */
function buildSignupModal() {
    return createModal({
        id: "regmod",
        header: "Sign up for Beans!",
        content: "Sign up to enjoy some coffee with friends.",
        isMember: false
    });

}

export default {buildLoginModal, buildSignupModal};
