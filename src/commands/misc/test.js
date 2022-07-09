const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    message.channel.send("Command handler is working!")
}

module.exports.config = {
    name: "test",
    aliases: []
};