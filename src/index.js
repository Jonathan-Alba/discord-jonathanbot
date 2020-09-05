const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./utils/messageEmbed');

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
  console.log(msg.content)

  if (msg.channel.type === 'dm') {
    console.log('Enviaste un DM.')
    msg.reply(':thinking:');
    msg.react('👍');
  }

  if (msg.content.toLocaleLowerCase() === 'hola') {
    msg.channel.send("hola como esta");
    msg.react('👍');
  }
  
  if (msg.content.toLocaleLowerCase() === 'bien y tu') {
    msg.channel.send("bien");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'como esta') {
    msg.channel.send("bien");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'que hace') {
    msg.channel.send("hablando con un humano");
    msg.react('👍');
  }
});

client.on('ready', () => {
  console.log(`Conectado... ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);