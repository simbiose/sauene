import {Button} from './components/button';
import {Event} from './core/events/event';

/**
 * Sauene
 */
class Sauene {
    constructor() {
        document.registerElement('sauene-button', Button);
    }
}

// boot
function contentLoaded(event) {
    document.removeEventListener(Event.DOM_CONTENT_LOADED, contentLoaded);
    new Sauene();
}
document.addEventListener(Event.DOM_CONTENT_LOADED, contentLoaded);
