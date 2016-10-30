import {Button} from './components/button';

/**
 * Sauene
 */
class Sauene {
    constructor() {
        document.registerElement('sauene-button', Button);
    }
}

// boot
const DOM_CONTENT_LOADED = "DOMContentLoaded";
function contentLoaded(event) {
    document.removeEventListener(DOM_CONTENT_LOADED, contentLoaded);
    new Sauene();
}
document.addEventListener(DOM_CONTENT_LOADED, contentLoaded);
