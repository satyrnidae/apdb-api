import { Entity } from ".";

export interface IController<T extends Entity> {
  /**
   * Saves the data entity to the data source.
   * @returns The saved object
   */
   save(entity: T): Promise<T>;
}