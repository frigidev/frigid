require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(`✔️  ${client.user.username} is online.`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'oi') {
        interaction.reply('Oi!');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }

    if (interaction.commandName === 'papai') {
        interaction.reply('Vem para o colinho do seu papai, bebê. 🥰');
    }
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    const content = message.content.toLowerCase(); // Converte para lowercase para case-insensitive

    if (
        content.startsWith('tudo bem') ||
        content.startsWith('td bem')
    ) {
        message.reply('Sim, e você? 👍');
    } else if (
        content.includes('bem também') ||
        content.includes('bem tb') ||
        content.includes('estou bem tb') ||
        content.includes('to bem tb')
    ) {
        message.reply('Que ótimo 👻');
    }
});

client.login(process.env.TOKEN);