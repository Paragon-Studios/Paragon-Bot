import { Client } from "discordx";
import { IntentsBitField as Intents } from "discord.js";
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
  ]
});

client.on("ready", () => {
  console.log(`${BOT_NAME} started.`);
  client.initApplicationCommands();
});

client.login(env.LOGIN_TOKEN ?? "");
