const { MessageEmbed } = require('discord.js');
const request = require('snekfetch');
const { embedColour, errorColour } = require('../core/configs/embedcolours.json');

module.exports = {
    /* Command Info */
    name: 'invite',
    description: 'Resolves a given invite link or code and provides information from the API about the invite',
    aliases: ['inviteinfo', 'resolve'],
    /* Arguments & Usage */
    args: true,
    usage: '[invite]',
    /* Command Permissions */
    permission: 'BAN_MEMBERS',
    devOnly: false,
    /* Command Cooldown */
    cooldown: 6,
    execute: async (message, args) => {
        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };

        let invitecode = args[0];
        let isError = false;
        let userInGuild = true;
        const embed = new MessageEmbed();

        embed.setTitle('Checking Invite');
        embed.setColor(embedColour);

        invitecode = invitecode.replace('discord.gg/', '').replace('discordapp.com/invites/', '').replace('https://', '').replace('www.', '');

        let findMessage = await message.channel.send(embed);

        const { body } = await request.get(`https://discordapp.com/api/v6/invites/${invitecode}`).catch(() => {
            isError = true;
            embed.setTitle('Invalid Invite');
            embed.setDescription('Could not find information for that invite, it is likely invalid or has expired.');
            embed.setColor(errorColour);
            return findMessage.edit(embed);
        });

        if (isError) return;

        let guildUser = await message.guild.members.fetch(body.inviter.id).catch(() => {
            userInGuild = false;
        });

        embed.setTitle('Invite Information');
        if (!userInGuild)
            embed.setDescription(
                `**Name:** ${body.guild.name}\n**ID:** ${body.guild.id}\n\n**Invite Creator:** ${body.inviter.username}#${body.inviter.discriminator}\n**Invite Creator ID:** ${
                    body.inviter.id
                }\n\n**Channel:** ${body.channel.name.capitalize()}\n**Channel ID:** ${body.channel.id}`,
            );
        else
            embed.setDescription(
                `\`Invite creator is also a member of ${message.guild.name}\`\n**Name:** ${body.guild.name}\n**ID:** ${body.guild.id}\n\n**Invite Creator:** ${guildUser}\n**Inviter Creator ID:** ${
                    body.inviter.id
                }\n\n**Channel:** ${body.channel.name.capitalize()}\n**Channel ID:** ${body.channel.id}`,
            );
        embed.setColor(embedColour);
        return findMessage.edit(embed);
    },
};
