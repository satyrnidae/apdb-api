import { ClientEvents } from "discord.js";

/**
 * The base class for an event handler instance.
 */
export abstract class EventHandler<E extends keyof ClientEvents> {

  /**
   * @param moduleId The ID of the module to which this event belongs.
   */
  constructor(/**
               * The client event type which this handler accepts
               */
              public readonly event: E,
              /**
               * The module to which this handler belongs.
               */
              public readonly moduleId: string) { }

  /**
   * Handles the event.
   * @param args Any event arguments that were passed to this handler.
   */
  abstract handler(...args: ClientEvents[E]): Promise<void>;

  /**
   * Handles raw events.
   * @param packet The packet that was sent along with the event.
   */
  public async handleRaw(packet: unknown): Promise<void> { }
}
