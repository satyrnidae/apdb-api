"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xmlhttprequest_1 = require("xmlhttprequest");
const DEFAULT_REQUEST_TIMEOUT = 500;
const HTTP_STATUS_SUCCESS = 200;
const HTTP_STATUS_MULTIPLE_CHOICES = 300;
/**
 * Asynchronously calls an XMLHttpRequest. Promisifies XmlHttpRequest.open and onreadystatechanged.
 * @param method The HTTP method
 * @param url The URL to request
 * @param timeout Optionally, the timeout for request execution, in milliseconds. Defaults to 500.
 */
function getHttpResponse(method, url, timeout = DEFAULT_REQUEST_TIMEOUT) {
    return new Promise((resolve, reject) => {
        const xhr = new xmlhttprequest_1.XMLHttpRequest();
        xhr.timeout = timeout;
        xhr.open(method, url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status >= HTTP_STATUS_SUCCESS && xhr.status < HTTP_STATUS_MULTIPLE_CHOICES) {
                    resolve(xhr);
                }
                else {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}
exports.getHttpResponse = getHttpResponse;
