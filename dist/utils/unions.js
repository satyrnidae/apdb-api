"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a union of a single object and an array of that object to an array
 * @param union The union array.
 */
function unionToArray(union) {
    if (union instanceof Array) {
        return union;
    }
    return new Array(union);
}
exports.unionToArray = unionToArray;
/**
 * Convers a union of a single object and an array to a single instance of the object
 * @param union The union array.
 * @returns The single element, or undefined if multiple elements are present.
 */
function unionToInstance(union) {
    if (union instanceof Array) {
        if (union.length === 1) {
            return union[0];
        }
        return undefined;
    }
    return union;
}
exports.unionToInstance = unionToInstance;
/**
 * Converts an array to null if empty, the single entry if length is one, or returns the array.
 * @param array The array to convert
 */
function arrayToUnion(array) {
    return array.length === 0 ? null : array.length === 1 ? array[0] : array;
}
exports.arrayToUnion = arrayToUnion;
