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
  registerEvent(event: EventHandler): void;

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
  on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): void;
}
