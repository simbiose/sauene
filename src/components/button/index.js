export class Button extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */
    createdCallback() {
        console.log('createdCallback', arguments);
    }

    /**
     * attachedCallback
     * The behavior occurs when
     * the element is inserted into the DOM.
     */
    attachedCallback() {
        console.log('attachedCallback', arguments);
    }

    /**
     * detachedCallback
     * The behavior occurs when
     * the element is removed from the DOM.
     */
    detachedCallback() {
        console.log('detachedCallback', arguments);
    }

    /**
     * attributeChangedCallback
     * The behavior occurs when
     * an attribute of the element is added, changed, or removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback', name, oldValue, newValue);
    }
}
