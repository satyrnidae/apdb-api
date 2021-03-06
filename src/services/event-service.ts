import { EventHandler } from '../module';
import { EventHandlerFunction } from '@satyrnidae/apdb-utils';
import { ClientEvents } from 'discord.js';

/**
 * A service which allows event handlers to be registered to the client.
 */
export interface IEventService {
  /**
   * Registers a new event handler to the client instance.
   * @param event The event handler to register.
   */
  registerEvent<E extends keyof ClientEvents>(event: EventHandler<E>): void;

  /**
   * Adds a new listener function to the client instance
   * @param event The event to handle
   * @param listener The event handler function
   */
  addListener(event: string, listener: EventHandlerFunction): void;

  /**
   * Sets the event executor on an event on the client instance
   * @param event The event to handle
   * @param listener The event handler function
   */
  on<E extends keyof ClientEvents>(event: E, listener: (...args: ClientEvents[E]) => void): void;
}
