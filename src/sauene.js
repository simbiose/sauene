/**
 * Register Element Polyfill
 * @see https://www.npmjs.com/package/document-register-element
 */
import 'document-register-element';

// Event
import {Event} from './core/events/event';

// Components
import {Button} from './components/button';

/**
 * Sauene
 *
 * @author Victor Potasso <victorpotasso@gmail.com>
 * @date 29th October 2016
 */
class Sauene {
    /**
     * PREFIX
     * @type {String}
     * @const
     */
    static get PREFIX() { return 'sauene-'; }

    /**
     * @constructor
     */
    constructor() {
        document.registerElement(`${Sauene.PREFIX}button`, Button);
    }
}

// boot
function contentLoaded(event) {
    document.removeEventListener(Event.DOM_CONTENT_LOADED, contentLoaded);
    new Sauene();
}
document.addEventListener(Event.DOM_CONTENT_LOADED, contentLoaded);
