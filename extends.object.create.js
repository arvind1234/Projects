(function (module) {
    module.extends = function(Child, Base) {
        if (typeof Child !== "function" || typeof Parent !== "function") {
            throw new Error("Constructor functions need to be provided for both Child class and parent class child class has to be provided.");
        }

        Child.prototype = Object.create(Base.prototype, {
          constructor: {
            value: Child,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });

    };
})(window);
