import { Guild } from 'discord.js';
import { Command } from '../module';
import { OneOrMany } from '@satyrnidae/apdb-utils';

/**
 * A service which maintains references to all registered commands.
 */
export interface ICommandService {
  /**
   * Registers a command with a specific module instance.
   * @param command The command to register
   * @param moduleId The ID of the module to which the command belongs
   */
  register(command: Command): boolean;

  /**
   * Gets a list of all commands which can be triggered by the command string.
   * @param command The expected command string
   * @param moduleId Optionally, the specific module to pull the command from.
   */
  get(command: string, moduleId?: string): OneOrMany<Command>;

  /**
   * Gets all the commands from the list, optionally filtering by module.
   * @param moduleId Optionally, the module ID by which to filter the commands.
   */
  getAll(moduleId?: string): OneOrMany<Command>;

  /**
   * Gets the prefix for a specific guild.
   * @param guild The guild from which to pull the prefix
   */
  getCommandPrefix(guild: Guild): Promise<string>;
}
