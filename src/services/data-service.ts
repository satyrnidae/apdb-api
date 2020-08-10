import { Repository, FindConditions } from 'typeorm';
import { RepositoryTarget, OneOrMany } from '@satyrnidae/apdb-utils';
import { DataEntity, IDataEntityFactory } from '../db';

export type FactoryRegistry = {
  [name: string]: (new (...args: any[]) => IDataEntityFactory<any>);
}

/**
 * A service which provides access to the data source.
 */
export interface IDataService {
  /**
   * Gets a new repository instance for a specific target.
   * @param target The target for which the repository is resolved.
   */
  getRepository<T extends DataEntity>(target: RepositoryTarget<T>): Promise<Repository<T>>;

  registerFactory<T extends DataEntity>(entity: (new () => T), factory: (new () => IDataEntityFactory<T>)): Promise<void>;

  getFactory<T extends DataEntity>(entity: (new () => T)): Promise<IDataEntityFactory<T>>;

  load<T extends DataEntity>(result: (new () => T), query: Partial<T>, save?: boolean): Promise<OneOrMany<T>>;

  find<T extends DataEntity>(result: (new () => T), query: FindConditions<T>): Promise<OneOrMany<T>>;

}
