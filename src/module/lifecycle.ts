import { IInitializeable } from "../utils";

/**
 * Main app lifecycle interface
 */
export interface ILifecycle extends IInitializeable {

  /**
   * The main run method
   */
  run(): Promise<any>;
}
