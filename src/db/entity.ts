import { CreateDateColumn, UpdateDateColumn, Repository } from 'typeorm';

/**
 * The base data entity type with audit data.
 */
export abstract class DataEntity {

  /**
   * Saves the data entity to the data source.
   * @returns The saved object
   */
  public abstract save(): Promise<this & DataEntity>;

  protected abstract getRepository(): Promise<Repository<DataEntity>>;

  /**
   * The date at which the entity was initially created in the data source.
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   * The date at which the entity was last saved to the data source.
   */
  @UpdateDateColumn()
  updateDate: Date;
}
