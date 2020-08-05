import { Client } from 'discord.js';

/**
 * A service which provides access to a single client instance.
 */
export interface IClientService {
  /**
   * Connects the client instance to Discord with the token provided in the app configuration.
   */
  login(): Promise<string>;

  /**
   * Returns the client instance.
   */
  getClient(): Promise<Client>;
}
