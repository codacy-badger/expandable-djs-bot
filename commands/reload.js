module.exports = {
    /* Command Info */
    name: 'reload',
    description: 'Reload a command file.',
    aliases: ['r'],
    /* Arguments & Usage */
    args: true,
    usage: '[command]',
    /* Command Permissions */
    permission: '',
    devOnly: true,
    /* Command Cooldown */
    cooldown: 2,
    execute: (message, args) => {
        /* If no command is passed to reload, return an error message */
        if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
        /* Fetch the command the author is looking for */
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
        /* If the author passed an invalid command or command alias; return with error message */
        if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
        /* If the command is found, delete the cache for the command and require it again and add it back to the set */
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`\`\`\`${error.message}\`\`\`\``);
        }
    },
};
