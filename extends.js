(function (module) {
    module.extends = function(Child, Base) {
        if (typeof Child !== "function" || typeof Parent !== "function") {
            throw new Error("Constructor functions need to be provided for both Child class and parent class child class has to be provided.");
        }

        var F = function() { };
        F.prototype = Base.prototype;

        Child.prototype = new F();
        Child.prototype.constructor = Child;

    };
})(window);
