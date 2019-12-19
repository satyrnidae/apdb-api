"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Asynchronous loop state control
 */
class LoopStateArgs {
    constructor() {
        this._continueExecution = true;
    }
    /**
     * Gets a flag inidicating whether execution should continue for this loop.
     */
    get continueExecution() {
        return this._continueExecution;
    }
    /**
     * Causes the loop to exit after processing for this item is complete.
     */
    break() {
        this._continueExecution = false;
    }
}
exports.LoopStateArgs = LoopStateArgs;
