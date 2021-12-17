import { Entity } from './entity';
import { OneOrMany } from '@satyrnidae/apdb-utils';

/**
 * Basic model of a data entity factory.
 */
export interface IFactory<T extends Entity> {
  /**
   * Loads the data entity from the data source using the provided arguments.
   * @param args The arguments to query the database, as a partial of the data entity
   * @param save Optional argument, specifies whether or not new objects should be auto-saved.
   * @returns A promise which resolves to an instance of the data entity type.
   */
  load(args: Partial<T>, save?: boolean): Promise<OneOrMany<T>>;

  /**
   * Creates a new instance of the data entity using the provided arguments.
   * @param args
   * @param save
   */
  create(item: Omit<T, 'createDate' | 'updateDate'>, save?: boolean): Promise<T>;
}
