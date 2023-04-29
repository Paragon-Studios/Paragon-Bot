var _a;
import { __awaiter } from "tslib";
import { Client } from "discordx";
import { IntentsBitField as Intents } from "discord.js";
import { config as dotenv } from "dotenv";
import { env } from "process";
import "reflect-metadata";
const BOT_NAME = "Paragon Bot";
dotenv();
const client = new Client({
    logger: console,
    simpleCommand: {
        argSplitter: " ",
        prefix: ";",
        responses: {
            notFound: (message) => __awaiter(void 0, void 0, void 0, function* () {
                message.reply(`Command \`${message.content}\` not found.`);
            })
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
console.log(env.LOGIN_TOKEN);
client.login((_a = env.LOGIN_TOKEN) !== null && _a !== void 0 ? _a : "");
