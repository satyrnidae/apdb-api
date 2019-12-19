"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
/**
 * Contains utility functions for promisified file system access
 */
var FsAsync;
(function (FsAsync) {
    /**
     * Asynchrounously reads the contents of a file. Promisifies fs.readFile from the fs package.
     * @param path The path of the file to read
     * @param options Read options for the file
     */
    async function readFileAsync(path, options) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, options, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        });
    }
    FsAsync.readFileAsync = readFileAsync;
    /**
     * Asynchronously gathers a listing for the specified directory. Promisifies fs.readFile from the fs package.
     * @param path The path of the directory to list
     * @param options Read options for the directory
     */
    async function readDirAsync(path, options) {
        return new Promise((resolve, reject) => {
            fs.readdir(path, options, (err, files) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(files);
            });
        });
    }
    FsAsync.readDirAsync = readDirAsync;
    /**
     * Asynchronously returns the stats of a file. Promisifies fs.lstat.
     * @param path The path of the file to stat
     */
    async function lstatAsync(path) {
        return new Promise((resolve, reject) => {
            fs.lstat(path, (err, stats) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(stats);
            });
        });
    }
    FsAsync.lstatAsync = lstatAsync;
    /**
     * Asynchronously checks if a file or directory exists. Promisifies fs.exists.
     * @param path The path of the file or directory.
     */
    async function existsAsync(path) {
        return new Promise((resolve) => {
            fs.exists(path, (exists) => resolve(exists));
        });
    }
    FsAsync.existsAsync = existsAsync;
})(FsAsync = exports.FsAsync || (exports.FsAsync = {}));
