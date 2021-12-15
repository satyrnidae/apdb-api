import { OneOrMany } from '@satyrnidae/apdb-utils';
import { Message, PermissionResolvable } from 'discord.js';
import { Options, Arguments } from 'yargs-parser';

/**
 * The base class for a Command instance.
 */
export abstract class Command {
  /**
   * The input that the user must match to run the command.
   */
  public readonly abstract command: string;

  /**
   * The friendly, translated name of the command.
   */
  public readonly abstract friendlyName: string;

  /**
   * The command usage examples.
   */
  public readonly abstract syntax: OneOrMany<string>;

  /**
   * The short command description.
   */
  public readonly abstract description: string;

  /**
   * A longer command description shown in the command help card.
   */
  public readonly longDescription: string;

  /**
   * The command argument parser options.
   */
  public readonly abstract options: Options;

  /**
   * Permissions required to execute the command.
   */
  public readonly permissions: PermissionResolvable = [];

  /**
   * @param moduleId The ID of the module to which this command belongs.
   */
  public constructor(public readonly moduleId: string) { }

  /**
   * Executes the command functionality.
   * @param message The reference to the message which called this command.
   * @param args The parsed arguments contained in that message.
   */
  public abstract run(message: Message, args: Arguments): Promise<void>;

  /**
   * Checks if the command can be executed based on the message which called it.
   * By default this checks the values in the permissions field, and allows admin / owner override.
   * @param message The message which triggered the command execution.
   */
  public async checkPermissions(message: Message): Promise<boolean> {
    return !this.permissions || !message.member || message.member.permissions.has(this.permissions, true);
  }
}
