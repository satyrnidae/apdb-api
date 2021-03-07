import { OneOrMany } from "@satyrnidae/apdb-utils";

/**
 * Represents detailed module information.
 */
export interface IModuleDetails {
  /**
   * The API version which this module targets.
   */
  apiVersion: string;

  /**
   * The module entry point.
   */
  entryPoint: string;

  /**
   * The authors involved in the creation of this module.
   */
  authors: OneOrMany<string>;

  /**
   * The module description.
   */
  description: string;

  /**
   * The website for the module.
   */
  website: string;

  /**
   * Full file path of the module
   */
  path: string;

  containerName: string;
}
