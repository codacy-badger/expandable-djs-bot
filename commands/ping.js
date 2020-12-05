module.exports = {
    /* Command Info */
    name: 'ping',
    description: 'Displays the bots ping',
    aliases: ['p'],
    /* Arguments & Usage */
    args: false,
    usage: '',
    /* Command Permissions */
    permission: '',
    devOnly: false,
    /* Command Cooldown */
    cooldown: 2,
    execute: async (message) => {
        const m = await message.channel.send('Pinging...');
        m.edit(`Pong!\nLatency is **${m.createdTimestamp - message.createdTimestamp}**ms.`);
    },
};
