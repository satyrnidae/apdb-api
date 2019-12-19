"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The base class for a module implementation.
 */
class Module {
    /**
     * @param moduleInfo The parsed information from the associated module info file.
     */
    constructor(moduleInfo) {
        this.moduleInfo = moduleInfo;
    }
    /**
     * Registers any dependencies to the IOC container
     */
    async registerDependencies() { }
    /**
     * Pre-initialization stage for the module.
     */
    async preInitialize() { }
    /**
     * Initialization stage for the module.
     */
    async initialize() { }
    /**
     * Post-initialization stage for the module.
     */
    async postInitialize() { }
}
exports.Module = Module;
