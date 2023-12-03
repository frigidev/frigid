require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'oi',
        description: 'Responde com oi!',
    },
    {
        name: 'ping',
        description: 'Pong!',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registrando comandos...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );
        console.log('Comandos foram registrados com sucesso.');
    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
    }
})();
