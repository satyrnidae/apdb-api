import { OneOrMany } from "@satyrnidae/apdb-utils";
import { PermissionResolvable } from "discord.js";

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
  authors?: OneOrMany<string>;

  /**
   * The module description.
   */
  description: string;

  /**
   * The website for the module.
   */
  website?: string;

  /**
   * Full file path of the module
   */
  path?: string;

  /**
   * Name of the container which the module was loaded from.
   */
  containerName: string;

  /**
   * URL of an image to use as the thumbnail.
   */
  thumbnail?: string;

  /**
   * Donation URLs
   */
  donate?: OneOrMany<string>;

  /**
   * The permissions required to use this module
   */
  permissions: PermissionResolvable
}
