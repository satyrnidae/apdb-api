import { IModuleDetails } from './module-details';

/**
 * Models the basic module info file.
 */
export interface IModuleInfo {
  /**
   * The friendly name of the module
   */
  name: string;

  /**
   * The module's version
   */
  version: string;

  /**
   * The module's unique ID
   */
  id: string;

    /**
   * Full file path of the module
   */
  main: string;

    /**
   * Full file path of the module
   */
  path: string;

  /**
   * Additional details about the module
   */
  details: IModuleDetails;
}
