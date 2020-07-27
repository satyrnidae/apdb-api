import { Module } from '../module';
import { Initializeable, OneOrMany } from '../utils';

/**
 * A service which provides access to all loaded modules
 */
export interface ModuleService extends Initializeable {

    /**
     * Gets a list of all loaded modules.
     */
    getAllModules(): OneOrMany<Module>;

    /**
     * Gets a single module by ID
     * @param moduleId The module ID to search for.
     */
    getModuleById(moduleId: string): Module;

    /**
     * Gets a module or modules by name.
     * @param moduleName The module name to search for.
     */
    getModulesByName(moduleName: string): OneOrMany<Module>;

    /**
     * Gets a module or modules by name or ID.
     * @param moduleIdOrName The module ID or module name to search for.
     */
    getModulesByIdOrName(moduleIdOrName: string): OneOrMany<Module>;
}
