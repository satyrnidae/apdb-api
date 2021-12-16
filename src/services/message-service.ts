import { OneOrMany } from "@satyrnidae/apdb-utils";
import { Channel, Message, MessageEmbed, MessageOptions, MessagePayload, PartialMessage, ReplyMessageOptions } from "discord.js";

export interface IMessageService {
  send(channel: Channel, content: string | MessagePayload | MessageOptions): Promise<OneOrMany<Message>>;

  reply(message: Message, content: string | MessagePayload | ReplyMessageOptions): Promise<OneOrMany<Message>>;

  delete(message: Message<boolean> | PartialMessage): Promise<Message>;

  replyWithPaginatedEmbed(embeds: MessageEmbed[], message: Message, content?: string | MessagePayload | ReplyMessageOptions, page?: number): Promise<void>;
}
