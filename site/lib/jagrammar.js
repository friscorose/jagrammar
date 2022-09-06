var JAG = JAG || {};

JAG.lexer = (function() {
    var State = "Message";

    var Method = function() {
        // Do private stuff, or build internal.
        return State;
    };
    var exposeMethod = function() {
        return Method() + " stuff";
    };

    return {
        Property: 'prop value',
        Method: exposeMethod
    };
})();
