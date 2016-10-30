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
        console.log(this.nodeName, 'createdCallback', arguments);

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
        console.log(this.nodeName, 'attachedCallback', arguments);
    }

    /**
     * detachedCallback
     * The behavior occurs when
     * the element is removed from the DOM.
     */
    detachedCallback() {
        console.log(this.nodeName, 'detachedCallback', arguments);
    }

    /**
     * attributeChangedCallback
     * The behavior occurs when
     * an attribute of the element is added, changed, or removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(this.nodeName, 'attributeChangedCallback', name, oldValue, newValue);
    }
}
