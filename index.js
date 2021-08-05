const discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();
const client = new discord.Client({});
client.on("ready", (e, val) => {
  console.log("READY WITH", e, "and", val);
});
client.login(process.env.TOKEN).then((hash) => {
  console.log(hash, "or something");
});
