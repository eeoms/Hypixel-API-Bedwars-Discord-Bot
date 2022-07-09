const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}

module.exports.config = {
    name: "ping",
    aliases: []
};