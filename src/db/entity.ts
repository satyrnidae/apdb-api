import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * The base data entity type with audit data.
 */
export abstract class Entity {
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
