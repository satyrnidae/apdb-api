import { OneOrMany } from "@satyrnidae/apdb-utils";
import { Channel, Message, MessageEmbed, MessageOptions, MessageResolvable } from "discord.js";


export interface IMessageService {
  send(channel: Channel, content: MessageResolvable): Promise<OneOrMany<Message>>;

  reply(message: Message, content: MessageResolvable): Promise<OneOrMany<Message>>;

  delete(message: Message): Promise<Message>;

  replyWithPaginatedEmbed(embeds: MessageEmbed[], message: Message, content?: MessageResolvable, page?: number): Promise<void>;
}
