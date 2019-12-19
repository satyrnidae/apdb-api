"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The base class for an event handler instance.
 */
class EventHandler {
    /**
     * @param moduleId The ID of the module to which this event belongs.
     */
    constructor(moduleId) {
        this.moduleId = moduleId;
    }
}
exports.EventHandler = EventHandler;
