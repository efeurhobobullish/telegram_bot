const { Telegraf } = require("telegraf");
const fs = require("fs");
const path = require("path");

const bot = new Telegraf("7629822251:AAH-5tOuG4YR0l21AnpDBe406fZ5dqpq2Io");

// Auto-load all command files
fs.readdirSync(path.join(__dirname, "plugins")).forEach((file) => {
  const plugin = require(`./plugins/${file}`);
  if (typeof plugin === "function") plugin(bot);
});

bot.launch();
console.log("Bot is running...");

