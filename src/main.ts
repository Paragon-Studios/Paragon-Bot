import { Client } from "discordx";
import { IntentsBitField as Intents } from "discord.js";
import { config as dotenv } from "dotenv";
import config = require("../config.json");
import "reflect-metadata";

dotenv()
const client = new Client({
  silent: false,
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
  console.log(`${config.botName} started.`);
  client.initApplicationCommands();
});

client.login(process.env.LOGIN_TOKEN ?? "");
