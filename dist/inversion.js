"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Inversify = __importStar(require("inversify"));
const inversify_inject_decorators_1 = __importDefault(require("inversify-inject-decorators"));
/**
 * The IOC container instance
 */
const Container = new Inversify.Container();
exports.Container = Container;
const injectors = inversify_inject_decorators_1.default(Container, false);
/**
 * Injects an instance from the container into a property on first access
 */
const lazyInject = injectors.lazyInject;
exports.lazyInject = lazyInject;
