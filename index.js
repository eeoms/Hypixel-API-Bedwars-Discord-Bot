const ClientManager = require('./src/ClientManager');
const client = new ClientManager({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    disableMentions: 'everyone',
});

client.setup();