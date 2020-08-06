import { DataEntity } from './entity';

/**
 * Basic model of a data entity factory.
 */
export interface IDataEntityFactory<T extends DataEntity> {
  /**
   * Loads the data entity from the data source using the provided arguments.
   * @param args The arguments to query the database.  These are defined at the implementation level.
   * @returns A promise which resolves to an instance of the data entity type.
   */
  load(args: Partial<T>): Promise<T>;
}
