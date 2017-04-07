var Connection = require("../../../../lib/server/db/model/Connection");

describe("Connection", function() {
    it("can create instances", function() {
        var connection = new Connection({
            user: "foo",
            friend: "bar"
        });

        expect(connection instanceof Connection).toBe(true);
    });
});