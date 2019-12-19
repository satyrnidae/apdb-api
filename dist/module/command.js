"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The base class for a Command instance.
 */
class Command {
    /**
     * @param moduleId The ID of the module to which this command belongs.
     */
    constructor(moduleId) {
        this.moduleId = moduleId;
    }
}
exports.Command = Command;
