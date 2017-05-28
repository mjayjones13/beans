describe("StateManager", function() {
    beforeEach(function() {
        this.store = new Store();
    });

    afterEach(function() {
        this.store = null;
    });

    it("can specify a custom initial set of props", function() {
         this.store = new Store({
             custom: "prop"
         });

         expect(this.store.getProp("custom")).toEqual("prop");
    });

    describe("#setProp", function() {
        it("sets the prop to the value specified", function() {
            expect(this.store.getProp("hello")).toEqual(undefined);
            this.store.setProp("hello", "world");
            expect(this.store.getProp("hello")).toEqual("world");
        });

        it("emits an update", function() {
            spyOn(this.store._emitter, "emit");

            this.store.setProp("hello", "world");

            expect(this.store._emitter.emit)
                .toHaveBeenCalledWith("hello", "world");
        });
    });

    describe("#getProp", function() {
        it("gets the correct prop", function() {
            expect(this.store.getProp("hello")).toBe(undefined);
            this.store.setProp("hello", "world");
            expect(this.store.getProp("hello")).toBe("world");
        });
    });

    describe("#on", function() {
        it("registers a listener", function() {
             spyOn(this.store._emitter, "on").and.callThrough();
             spyOn(console, "log");
             var listener = jasmine.createSpy();

             this.store.on("hello", listener);

             expect(this.store._emitter.on).toHaveBeenCalled();

             this.store.setProp("hello", "world");

             expect(listener).toHaveBeenCalledWith("world");
        });
    });
});