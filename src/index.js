require('dotenv').config();
const fs = require('fs');
const { client, translator } = require('./core/core.js');

fs.readdir('./src/events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        const event = require(`./events/${file}`);
        console.log(translator.translate('LOAD_EVENT', process.env.language, file));
        let eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

fs.readdir('./src/commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split('.')[0];
        console.log(translator.translate('LOAD_COMMAND', process.env.language, file));
        client.commands.set(commandName, props);
    });
});
