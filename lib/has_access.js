"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HasAccess = (function () {
    function HasAccess() {
        _classCallCheck(this, HasAccess);

        console.log(this.rules);
    }

    _createClass(HasAccess, [{
        key: "role_is",
        value: function role_is() {}
    }, {
        key: "can",
        value: function can() {}
    }]);

    return HasAccess;
})();

exports["default"] = HasAccess;
;
module.exports = exports["default"];