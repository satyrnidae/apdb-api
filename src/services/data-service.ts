import { Repository, FindConditions, Connection } from 'typeorm';
import { RepositoryTarget, OneOrMany } from '@satyrnidae/apdb-utils';
import { IController, Entity, IFactory } from '../db';
import { interfaces } from 'inversify';

export type FactoryRegistry = {
  [name: string]: interfaces.Newable<IFactory<any>>;
}

export type ControllerRegistry = {
  [name: string]: interfaces.Newable<IController<any>>;
}

/**
 * A service which provides access to the data source.
 */
export interface IDataService {

  getConnection(): Promise<Connection>;
  /**
   * Gets a new repository instance for a specific target.
   * @param target The target for which the repository is resolved.
   */
  getRepository<T extends Entity>(target: RepositoryTarget<T>): Promise<Repository<T>>;

  registerFactory<T extends Entity>(entity: interfaces.Newable<T>, factory: interfaces.Newable<IFactory<T>>): Promise<void>;

  getFactory<T extends Entity>(entity: interfaces.Newable<T>): Promise<IFactory<T>>;

  registerController<T extends Entity>(entity: interfaces.Newable<T>, controller: interfaces.Newable<IController<T>>): Promise<void>;

  getController<T extends Entity>(entity: interfaces.Newable<T>): Promise<IController<T>>;

  load<T extends Entity>(result: interfaces.Newable<T>, query: Partial<T>, save?: boolean): Promise<OneOrMany<T>>;

  find<T extends Entity>(result: interfaces.Newable<T>, query: FindConditions<T>): Promise<OneOrMany<T>>;

}
