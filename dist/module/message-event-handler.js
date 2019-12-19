"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_handler_1 = require("./event-handler");
/**
 * Skeleton implementation for an event handler which handles message events.
 */
class MessageEventHandler extends event_handler_1.EventHandler {
    /**
     * @param moduleId The ID of the module to which this event belongs.
     */
    constructor(moduleId) {
        super(moduleId);
        /**
         * The message event name.
         */
        this.event = 'message';
    }
}
exports.MessageEventHandler = MessageEventHandler;
