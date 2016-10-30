(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_HTMLElement) {
    _inherits(Button, _HTMLElement);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */


    _createClass(Button, [{
        key: 'createdCallback',
        value: function createdCallback() {
            console.log('createdCallback', arguments);
        }

        /**
         * attachedCallback
         * The behavior occurs when
         * the element is inserted into the DOM.
         */

    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {
            console.log('attachedCallback', arguments);
        }

        /**
         * detachedCallback
         * The behavior occurs when
         * the element is removed from the DOM.
         */

    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {
            console.log('detachedCallback', arguments);
        }

        /**
         * attributeChangedCallback
         * The behavior occurs when
         * an attribute of the element is added, changed, or removed
         */

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
            console.log('attributeChangedCallback', name, oldValue, newValue);
        }
    }]);

    return Button;
}(HTMLElement);

},{}],2:[function(require,module,exports){
'use strict';

var _button = require('./components/button');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sauene
 */
var Sauene = function Sauene() {
    _classCallCheck(this, Sauene);

    document.registerElement('sauene-button', _button.Button);
};

// boot


var DOM_CONTENT_LOADED = "DOMContentLoaded";
function contentLoaded(event) {
    document.removeEventListener(DOM_CONTENT_LOADED, contentLoaded);
    new Sauene();
}
document.addEventListener(DOM_CONTENT_LOADED, contentLoaded);

},{"./components/button":1}]},{},[2]);

//# sourceMappingURL=sauene.js.map