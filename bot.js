  const Discord = require('discord.js');
  const client = new Discord.Client();

  client.on('ready', () => {
      console.log('I am ready!');
  });

  client.on('message', message => {
      if (message.content === 'ping') {
        message.reply('fuck');
      }
  });

  // THIS MUST BE THIS WAY
  client.login(process.env.NTUyMjEzNzUyNDE0NDcwMTU0.D18Sug.GUv0x4PNxRIGvNK5guwHDkiZOo4);
