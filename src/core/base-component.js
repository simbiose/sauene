import {Event} from './events/event';

export class BaseComponent extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */
    createdCallback() {
        console.info(`<${this.nodeName.toLowerCase()}>::createdCallback`);

        // check attributes
        if(this.hasAttributes()) {
            let i = 0;
            while(i < this.attributes.length) {
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
    attachedCallback() {
        console.info(`<${this.nodeName.toLowerCase()}>::attachedCallback`);

        let _event = document.createEvent('HTMLEvents');
        _event.initEvent(Event.ADDED_TO_DOM, false, true);
        this.dispatchEvent(_event);
    }

    /**
     * detachedCallback
     * The behavior occurs when
     * the element is removed from the DOM.
     */
    detachedCallback() {
        console.info(`<${this.nodeName.toLowerCase()}>::detachedCallback`);

        let _event = document.createEvent('HTMLEvents');
        _event.initEvent(Event.REMOVED_FROM_DOM, false, true);
        this.dispatchEvent(_event);
    }

    /**
     * attributeChangedCallback
     * The behavior occurs when
     * an attribute of the element is added, changed, or removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.info(`<${this.nodeName.toLowerCase()}>::attributeChangedCallback ->`, name, oldValue, newValue);
    }
}
