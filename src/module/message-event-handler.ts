import { Message } from 'discord.js';
import { EventHandler } from './event-handler';

/**
 * Skeleton implementation for an event handler which handles message events.
 */
export abstract class MessageEventHandler extends EventHandler<'message'> {
  /**
   * @param moduleId The ID of the module to which this event belongs.
   */
  constructor(moduleId: string) {
    super('message', moduleId);
  }

  /**
   * @param message The message which fired the event.
   */
  abstract handler(message: Message): Promise<void>;
}
