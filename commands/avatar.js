const { MessageEmbed } = require('discord.js');
const { embedColour } = require('../core/configs/embedcolours.json');
module.exports = {
    /* Command Info */
    name: 'avatar',
    description: 'Displays the full version of a users avatar',
    aliases: ['pfp', 'avi'],
    /* Arguments & Usage */
    args: true,
    usage: '[user]',
    /* Command Permissions */
    permission: '',
    devOnly: false,
    /* Command Cooldown */
    cooldown: 3,
    execute: async (message) => {
        const embed = new MessageEmbed();
        /* Finding the user */
        let user = message.mentions.members.first();
        let userid = message.content.split(' ')[1];
        if (!user && !userid) return;

        /* Resolving from an ID */
        let isError = false;
        if (!user) {
            isError = false;
            user = await message.guild.members.fetch(userid).catch((_) => {
                isError = true;
            });
        }
        /* User not found */
        if (isError) return message.reply("I couldn't find that user.");

        /* User Found */
        if (user) {
            embed.setTitle(`${user.user.tag}'s Avatar`);
            embed.setColor(embedColour);
            embed.setImage(user.user.displayAvatarURL({ dynamic: true, size: 2048 }));
            message.channel.send(embed);
        }
    },
};
