import { Module } from '../module';
import { IInitializeable, OneOrMany } from '@satyrnidae/apdb-utils';
import { Guild } from 'discord.js';

/**
 * A service which provides access to all loaded modules
 */
export interface IModuleService extends IInitializeable {

  /**
   * Gets a list of all loaded modules.
   */
  getAllModules(guild?: Guild): OneOrMany<Module>;

  /**
   * Gets a single module by ID
   * @param moduleId The module ID to search for.
   */
  getModuleById(moduleId: string, guild?: Guild): Module;

  /**
   * Gets a module or modules by name.
   * @param moduleName The module name to search for.
   */
  getModulesByName(moduleName: string, guild?: Guild): OneOrMany<Module>;

  /**
   * Gets a module or modules by name or ID.
   * @param moduleIdOrName The module ID or module name to search for.
   */
  getModulesByIdOrName(moduleIdOrName: string, guild?: Guild): OneOrMany<Module>;
}
