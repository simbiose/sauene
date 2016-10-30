(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _baseComponent = require('../../core/base-component');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_BaseComponent) {
    _inherits(Button, _BaseComponent);

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
            _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'createdCallback', this).call(this);
        }

        /**
         * attachedCallback
         * The behavior occurs when
         * the element is inserted into the DOM.
         */

    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {
            _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'attachedCallback', this).call(this);
        }

        /**
         * detachedCallback
         * The behavior occurs when
         * the element is removed from the DOM.
         */

    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {
            _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'detachedCallback', this).call(this);
        }

        /**
         * attributeChangedCallback
         * The behavior occurs when
         * an attribute of the element is added, changed, or removed
         */

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
            var _this2 = this;

            _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'attributeChangedCallback', this).call(this, name, oldValue, newValue);

            (function () {
                switch (name) {
                    case 'url':
                        var url = newValue;
                        var target = _this2.getAttribute('target');
                        _this2.addEventListener('click', function (event) {
                            window.open(url, target ? target : '');
                        });
                        break;
                }
            })();
        }
    }]);

    return Button;
}(_baseComponent.BaseComponent);

},{"../../core/base-component":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = exports.BaseComponent = function (_HTMLElement) {
    _inherits(BaseComponent, _HTMLElement);

    function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        return _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this));
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */


    _createClass(BaseComponent, [{
        key: 'createdCallback',
        value: function createdCallback() {
            console.log(this.nodeName, 'createdCallback', arguments);

            // check attributes
            if (this.hasAttributes()) {
                var i = 0;
                while (i < this.attributes.length) {
                    this.attributeChangedCallback(this.attributes[i].name, null, this.attributes[i].value);
                    i++;
                }
            }
        }

        /**
         * attachedCallback
         * The behavior occurs when
         * the element is inserted into the DOM.
         */

    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {
            console.log(this.nodeName, 'attachedCallback', arguments);
        }

        /**
         * detachedCallback
         * The behavior occurs when
         * the element is removed from the DOM.
         */

    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {
            console.log(this.nodeName, 'detachedCallback', arguments);
        }

        /**
         * attributeChangedCallback
         * The behavior occurs when
         * an attribute of the element is added, changed, or removed
         */

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
            console.log(this.nodeName, 'attributeChangedCallback', name, oldValue, newValue);
        }
    }]);

    return BaseComponent;
}(HTMLElement);

},{}],3:[function(require,module,exports){
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

},{"./components/button":1}]},{},[3]);

//# sourceMappingURL=sauene.js.map
