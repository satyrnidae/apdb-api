import { EventHandler } from '../module';
import { EventHandlerFunction } from '@satyrnidae/apdb-utils';

/**
 * A service which allows event handlers to be registered to the client.
 */
export interface IEventService {
  /**
   * Registers a new event handler to the client instance.
   * @param event The event handler to register.
   */
  registerEvent(event: EventHandler): Promise<void>;

  /**
   * Adds a new listener function to the client instance
   * @param event The event to handle
   * @param listener The event handler function
   */
  addListener(event: string, listener: EventHandlerFunction): Promise<void>;

  /**
   * Sets the event executor on an event on the client instance
   * @param event The event to handle
   * @param listener The event handler function
   */
  on(event: string, listener: Function): Promise<void>;
}
