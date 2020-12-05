module.exports = {
    /* Command Info */
    name: 'say',
    description: 'Repeats the given message',
    aliases: ['repeat', 's'],
    /* Arguments & Usage */
    args: true,
    usage: '[mesage]',
    /* Command Permissions */
    permission: '',
    devOnly: true,
    /* Command Cooldown */
    cooldown: 1,
    execute: async (message, args) => {
        /* Join all args together */
        let toSend = args.join(' ');
        toSend = toSend.toString();
        /* If the bot has access to manage messages, delete the authors message */
        if (message.guild.me.permissions.has('MANAGE_MESSAGES')) message.delete();
        /* Send the message */
        return message.channel.send(toSend);
    },
};
