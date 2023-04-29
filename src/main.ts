import { Client } from "discordx";
import { IntentsBitField as Intents, Interaction, Message } from "discord.js";
import { dirname, importx } from "@discordx/importer";
import { config as dotenv } from "dotenv";
import { env } from "process";
import "reflect-metadata";

const BOT_NAME = "Paragon Bot"

dotenv()
const client = new Client({
  logger: console,
  simpleCommand: {
    argSplitter: " ",
    prefix: ";",
    responses: {
      notFound: async message => {
        message.reply(`Command \`${message.content}\` not found.`);
      }
    }
  },
  intents: [
    Intents.Flags.Guilds,
    Intents.Flags.GuildMessages,
    Intents.Flags.GuildMessageReactions,
    Intents.Flags.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`${BOT_NAME} started.`);
  client.initApplicationCommands();
});

client.on("interactionCreate", (interaction: Interaction) => {
  client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
  client.executeCommand(message);
});

importx(`${dirname(import.meta.url)}/{events,commands}/**/*.{ts,js}`)
  .then(() => client.login(env.LOGIN_TOKEN ?? ""));