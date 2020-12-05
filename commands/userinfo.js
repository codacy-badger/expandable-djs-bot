const Discord = require('discord.js');
var moment = require('moment');

module.exports = {
    /* Command Info */
    name: 'userinfo',
    description: 'Returns information about a users account',
    aliases: ['whois'],
    /* Arguments & Usage */
    args: true,
    usage: '[user]',
    /* Command Permissions */
    permission: '',
    devOnly: false,
    /* Command Cooldown */
    cooldown: 5,
    execute: async (message, args) => {
        /* Search for the user */
        let mentionedUser = message.mentions.members.first();
        let userid = args[0];
        let isError = false;
        if (!mentionedUser && !userid) return;
        if (!mentionedUser)
            mentionedUser = await message.guild.members.fetch(userid).catch(() => {
                isError = true;
            });
        if (isError == true) return message.reply('a user with that ID could not be found.');
        /* Set up embed */
        const embed = new Discord.MessageEmbed();

        /* Assign the author of the embed by checking permissions to include next to the user */
        if (mentionedUser.user.bot) embed.setAuthor(`${mentionedUser.user.tag} [BOT]`);
        else if (mentionedUser.id === message.guild.owner.id) embed.setAuthor(`${mentionedUser.user.tag} [Owner]`);
        else if (mentionedUser.permissions.has('ADMINISTRATOR') || mentionedUser.permissions.has('MANAGE_GUILD') || mentionedUser.permissions.has('MANAGE_ROLES'))
            embed.setAuthor(`${mentionedUser.user.tag} [Manager]`);
        else if (mentionedUser.permissions.has('KICK_MEMBERS' || 'MANAGE_MESSAGES')) embed.setAuthor(`${mentionedUser.user.tag} [Moderator]`);
        else embed.setAuthor(`${mentionedUser.user.tag}`);

        /* Set the thumbnail and color for the embed and add initial fields */
        embed.setColor(mentionedUser.displayColor);
        embed.addField(`Mention`, `${mentionedUser}`, true);

        /* I want to burn this code in a pit of fire */
        /* !! WRITTEN PRE INTENTS REQUIREMENT, IF PRESENCE DATA DOESN'T WORK PLEASE ENABLE PRIVILEDGED INTENTS !!

        /* Set the user activity, if they aren't doing anything - set it to 'Nothing' */
        if (mentionedUser.presence.activities.toString().length < 2) {
            embed.addField(`Activity`, 'Nothing', true);
            embed.addField('ID', `${mentionedUser.id}`, true);
        } else {
            /* If they have a status */
            embed.addField('ID', `${mentionedUser.id}`, true);
            embed.addField(`Activity`, `${mentionedUser.presence.activities.join('\n')}`, true);

            /* Map the activities */
            if (mentionedUser.presence.activities.some((x) => x.type === 'CUSTOM_STATUS')) {
                let activityDetails = mentionedUser.presence.activities.map((x) => ({
                    status: x.state,
                }));
                embed.addField(`Custom Status`, `${activityDetails[0].status}`, true);
            }
            if (mentionedUser.presence.activities.some((x) => x.name === 'Spotify')) {
                let activityDetails = mentionedUser.presence.activities.map((x) => ({
                    name: x.name,
                    song: x.details,
                    artist: x.state,
                }));
                let activities = mentionedUser.presence.activities.toString();
                activities = activities.split(',');
                if (activities[0] == 'Spotify') embed.addField(`Listening To`, `${activityDetails[0].song} by ${activityDetails[0].artist}`, true);
                else if (activities[1] == 'Spotify') embed.addField(`Listening To`, `${activityDetails[1].song} by ${activityDetails[1].artist}`, true);
                else if (activities[2] == 'Spotify') embed.addField(`Listening To`, `${activityDetails[2].song} by ${activityDetails[2].artist}`, true);
            }
        }

        /* !! WRITTEN PRE INTENTS REQUIREMENT, IF PRESENCE DATA DOESN'T WORK PLEASE ENABLE PRIVILEDGED INTENTS !! */
        embed.setThumbnail(mentionedUser.user.displayAvatarURL({ dynamic: true }));
        if (mentionedUser.presence.status == 'online') embed.setFooter(`Online`, `https://i.imgur.com/b0bK7Hu.png`);
        if (mentionedUser.presence.status == 'away') embed.setFooter(`Away`, `https://i.imgur.com/iYUugbe.png`);
        if (mentionedUser.presence.status == 'dnd') embed.setFooter(`Do Not Disturb`, `https://i.imgur.com/PCvXZYn.png`);
        if (mentionedUser.presence.status == 'offline') embed.setFooter(`Offline`, `https://i.imgur.com/1iCHO2e.png`);
        embed.addFields(
            { name: 'Joined', value: `${moment(mentionedUser.joinedAt).fromNow()} (${moment(mentionedUser.joinedAt).format('MMMM Do YYYY, h:mm:ss a')})`, inline: false },
            { name: 'Created At', value: `${moment(mentionedUser.user.createdAt).fromNow()} (${moment(mentionedUser.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')})`, inline: false },
        );

        return message.channel.send(embed);
    },
};
