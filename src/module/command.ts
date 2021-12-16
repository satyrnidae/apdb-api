import { OneOrMany } from '@satyrnidae/apdb-utils';
import { ChannelType } from 'discord-api-types';
import { CommandInteraction, Guild, Message, PermissionResolvable } from 'discord.js';
import { injectable } from 'inversify';
import { Options, Arguments } from 'yargs-parser';
import { SlashCommandBuilder, SlashCommandSubcommandBuilder } from '@discordjs/builders';

export type NameAndDescription = { name: string, description: string };
export type CommandOption = NameAndDescription & { required?: boolean } & (
  { type: 'boolean' | 'user' | 'role' | 'mentionable' }
  | { type: 'channel', channelTypes: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[] }
  | { type: 'string', choices?: [ name : string, value: string ][] }
  | { type: 'integer' | 'number', choices?: [ name: string, value: number ][] }

);
export type SlashSubcommand = NameAndDescription & { options: CommandOption[] }

interface ICommand {
  readonly moduleId: string;
  /**
   * The input that the user must match to run the command.
   */
  readonly name: string;
  /**
   * The command description.
   */
  readonly description: string;
}

interface IMessageCommand {
  readonly friendlyName: string;
  readonly longDescription?: string;
  readonly syntax: OneOrMany<string>;
  readonly options: Options;
  readonly permissions?: PermissionResolvable;

  execute(target: Message, args: Arguments): Promise<any>;

  checkPermissions(target: Message): boolean;
}

interface ISlashCommand {
  asSlashCommand(guild?: Guild): Promise<SlashCommandBuilder | SlashCommandSubcommandBuilder>;
  execute(target: CommandInteraction): Promise<any>;
}

/**
 * The base class for a Command instance.
 */
@injectable()
export abstract class Command implements ICommand {
  public readonly abstract name: string;
  public readonly abstract description: string;

  /**
   * @param moduleId The ID of the module to which this command belongs.
   */
  public constructor(public readonly moduleId: string) { }
}

@injectable()
export abstract class MessageCommand extends Command implements IMessageCommand {
  public readonly friendlyName: string;
  public readonly longDescription: string;
  public readonly abstract syntax: OneOrMany<string>;
  public readonly abstract options: Options;
  public readonly permissions: PermissionResolvable;
  constructor(moduleId: string) {
    super(moduleId);
  }

  public abstract execute(target: Message, args: Arguments): Promise<any>;

  public checkPermissions(target: Message): boolean {
    return !this.permissions || !target.member || target.member.permissions.has(this.permissions, true);
  }
}

@injectable()
export abstract class SlashCommand extends Command implements ISlashCommand {
  constructor(moduleId: string) {
    super(moduleId);
  }
  public abstract asSlashCommand(guild?: Guild): Promise<SlashCommandBuilder | SlashCommandSubcommandBuilder>;
  public abstract execute(target: CommandInteraction): Promise<any>;
  protected get slashCommandBuilder(): SlashCommandBuilder {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
  }
  protected get slashCommandSubcommandBuilder(): SlashCommandSubcommandBuilder {
    return new SlashCommandSubcommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
  }
}

@injectable()
export abstract class SlashOrMessageCommand extends Command implements IMessageCommand, ISlashCommand {
  public readonly friendlyName: string;
  public readonly longDescription: string;
  public readonly abstract syntax: OneOrMany<string>;
  public readonly abstract options: Options;
  public readonly permissions: PermissionResolvable;
  constructor(moduleId: string) {
    super(moduleId);
  }
  public abstract asSlashCommand(guild?: Guild): Promise<SlashCommandBuilder | SlashCommandSubcommandBuilder>;
  public abstract execute(target: CommandInteraction): Promise<any>;
  public abstract execute(target: Message, args: Arguments): Promise<any>;
  public checkPermissions(target: Message): boolean {
    return !this.permissions || !target.member || target.member.permissions.has(this.permissions, true);
  }
  protected get slashCommandBuilder(): SlashCommandBuilder {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
  }
  protected get slashCommandSubcommandBuilder(): SlashCommandSubcommandBuilder {
    return new SlashCommandSubcommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
  }
}
