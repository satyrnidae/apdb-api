"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loop_state_args_1 = require("./loop-state-args");
async function forEachAsync(array, callback) {
    const loopStateArgs = new loop_state_args_1.LoopStateArgs();
    for (let index = 0; index < array.length; ++index) {
        await callback(array[index], index, array, loopStateArgs);
        if (!loopStateArgs.continueExecution) {
            break;
        }
    }
}
exports.forEachAsync = forEachAsync;
