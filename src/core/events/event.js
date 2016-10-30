export class Event {
    /**
     * DOM_CONTENT_LOADED
     * @type {String}
     * @const
     */
    static get DOM_CONTENT_LOADED() { return 'DOMContentLoaded'; }

    /**
     * ADDED_TO_DOM
     * @type {String}
     * @const
     */
    static get ADDED_TO_DOM() { return 'added-to-dom'; }

    /**
     * REMOVED_FROM_DOM
     * @type {String}
     * @const
     */
    static get REMOVED_FROM_DOM() { return 'removed-from-dom'; }
}
