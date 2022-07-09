const Discord = require("discord.js")
const key = 'd29400ee-616f-4332-9f5b-611eb8fdb3bd';
const base = 'https://api.hypixel.net';
const prefix = "!";
const fetch = require('node-fetch');
const base2 = 'https://api.mojang.com'

async function getUUID(username) {
    const method2 = `/users/profiles/minecraft/${username}`;
    const json = await fetch(base2 + method2).then(r => r.json());

    console.log(`${json.id}`)

    return json.id;
}

async function getPlayer(username) {
    const uuid = await getUUID(username);

    const method = `/player?key=${key}&uuid=${uuid}`;
    const json = await fetch(base + method).then(r => r.json());

    if (json.success === true) return json.player;

    return null;
}

async function getGames(username) {
    const player = await getPlayer(username);

    if (player === null) return null;

    const games = player.stats.SkyWars.games;

    return games;
}


module.exports.run = async (client, message, args) => {
    const content = message.content;

    if (content.startsWith(prefix)) {
        const pieces = content.split(" ");
        const command = pieces.shift();

        if (command === prefix + 'swgames') {
            const username = pieces.shift();

            if (!username) {
                message.channel.send('Specify a player name!');
                return;
            }

            const games = await getGames(username);

            if (games === null) {
                message.channel.send("Either the player you are looking for doesn't exist or you on API Cooldown!");
                return;
            }

            message.channel.send(`Total SkyWars games played: ${games}`);
        }
    }
}

module.exports.config = {
    name: "swgames",
    aliases: []
};