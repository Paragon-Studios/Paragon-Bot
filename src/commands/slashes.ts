import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class SlashCommands {
  @Slash({ 
    name: "ping",
    description: "replies with pong"
  })
  public async ping(interaction: CommandInteraction): Promise<void> {
    const before = Date.now();
    const message = await interaction.reply(`Pinging...`);
    const after = Date.now();
    await message.edit(`Pong! Took ${after - before}ms to respond.`);
  }
}
