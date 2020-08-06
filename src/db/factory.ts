import { DataEntity } from './entity';
import { OneOrMany } from '@satyrnidae/apdb-utils';
import { FindConditions, Repository } from 'typeorm';

/**
 * Basic model of a data entity factory.
 */
export interface IDataEntityFactory<T extends DataEntity> {
  /**
   * Loads the data entity from the data source using the provided arguments.
   * @param args The arguments to query the database, as a partial of the data entity
   * @param save Optional argument, specifies whether or not new objects should be auto-saved.
   * @returns A promise which resolves to an instance of the data entity type.
   */
  load(args: Partial<T>, save?: boolean): Promise<OneOrMany<T>>;

  getRepository(): Promise<Repository<T>>;
}
