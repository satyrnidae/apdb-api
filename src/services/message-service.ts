import { OneOrMany } from "@satyrnidae/apdb-utils";
import { APIMessageContentResolvable, Channel, Message, MessageAdditions, MessageEmbed, MessageOptions } from "discord.js";

export type MessageContentResolvable = (APIMessageContentResolvable | (MessageOptions & { split?: false }) | MessageAdditions);

export interface IMessageService {
  send(channel: Channel, content: MessageContentResolvable): Promise<OneOrMany<Message>>;

  reply(message: Message, content: MessageContentResolvable): Promise<OneOrMany<Message>>;

  delete(message: Message): Promise<Message>;

  replyWithPaginatedEmbed(embeds: MessageEmbed[], message: Message, content?: MessageContentResolvable, page?: number): Promise<void>;
}
