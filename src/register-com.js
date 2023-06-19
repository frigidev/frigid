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
    },
    {
        name: 'papai',
        description: 'Responde com vem para o colinho do seu papai',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registrando slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );
        console.log('Slash commands foram registrados com sucesso.');
    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
    }
})();