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
  if (msg.content.toLocaleLowerCase() === 'klk') {
    msg.channel.send("klk manin");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'wey') {
    msg.channel.send("wey klk que hace");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'vamos a jugar') {
    msg.channel.send("el que");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'vamos a jugar among us') {
    msg.channel.send("manda el codigo");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'ok tu vas a jugart') {
    msg.channel.send("yo no puedo soy un robot");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'me saco') {
    msg.channel.send("entra de nuevo");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'yo soy el impostor') {
    msg.channel.send("yo lo sabia");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'tt') {
    msg.channel.send("tt manin");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === 'cree otro') {
    msg.channel.send("crealo tu yo no puedo soy un robot");
    msg.react('👍');
  }
  if (msg.content.toLocaleLowerCase() === "entra") {
    msg.channel.send("yo no se jugar @jonathanalba me tiene que entrenar con una inteligencia artificila");
    msg.react('👍')
  }
  if (msg.content.toLocaleLowerCase() === 'no me sale') {
    msg.channel.send("sal y entra al juego");
    msg.react('👍');
  }
  if (msg.content.startsWith("que hace")) {
    msg.channel.send("esperando que tu diga algo");
    msg.react('👍');
}
});

client.on('ready', () => {
  console.log(`Conectado... ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);