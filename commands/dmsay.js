const { MessageEmbed } = require('discord.js');
const { confirmReaction } = require('../utils/utils');
const { successColour, embedColour, errorColour } = require('../core/configs/embedcolours.json');
module.exports = {
    /* Command Info */
    name: 'dmsay',
    description: 'Sends a direct message to the specified user id',
    aliases: ['saydm', 'tell'],
    /* Arguments & Usage */
    args: true,
    usage: '[user] [message]',
    /* Command Permissions */
    permission: '',
    devOnly: true,
    /* Command Cooldown */
    cooldown: 1,

    execute: async (message, args) => {
        /* Set up the embed */
        let embed = new MessageEmbed().setColor(successColour);
        let sendToUser = args[0];
        let user = await message.client.users.cache.get(sendToUser);

        /* If the user could not be found in the client's user cache return an error */
        if (!user) return message.reply('could not find this user.');
        args.shift();
        args = args.join(' ');

        if (sendToUser) {
            /* Build the confirmation embed */
            embed.setTitle(`Confirm Direct Message`);
            embed.setDescription(`Are you sure you want to send the following message to ${user}?\n\`\`\`${args}\`\`\``);
            embed.setColor(embedColour);
            let confirmMessage = await message.channel.send(embed);
            /* Run the confirm reaction function from utils */
            let confirmReact = await confirmReaction(confirmMessage, message.author.id, embed);
            /* If the user confirmed the reaction from the function */
            if (confirmReact == 'confirmed') {
                message.delete().catch(() => {});
                embed.setTitle(`Direct Message Sent`);
                embed.setDescription(`Your message has been sent to ${user}\n\`\`\`${args}\`\`\``);
                embed.setThumbnail(`https://i.imgur.com/Jg0azl4.gif`);
                /* If the user cancelled the reaction from the function */
                await user.send(args).catch(() => {
                    embed.setTitle(`Direct Message Failed`);
                    embed.setDescription(`${user} has their Direct Messages closed and could not be DMd`);
                    embed.setColor(errorColour);
                    embed.setThumbnail('');
                });
                return confirmMessage.edit(embed);
            } else {
                embed.setDescription(`Direct Message sending cancelled.`);
                return confirmMessage.edit(embed);
            }
        } else {
            message.delete().catch();
            return message.reply('an error occured while running this command.');
        }
    },
};
