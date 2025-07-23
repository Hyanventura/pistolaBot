const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = process.env.TOKEN;

client.on('ready', () => {
  console.log(`🤖 Bot logado como ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  const canal = member.guild.channels.cache.get(process.env.ENTRADA_CHANNEL); 

  if (!canal) return;

  const mensagens = [
    // Categoria: O General Dando Ordens
    `Atenção, novato <@${member.id}> na área! Se apresente no canal #apresentacao em menos de 5 minutos ou vai ser rebaixado pra 'testador de Internet Explorer'. E não me decepcione.`,
    `Bem-vindo ao meu esquadrão, <@${member.id}>. Aqui a gente chora no código pra não sangrar na frente do cliente. Leia as #regras e se prepare para o combate.`,
    `Recruta <@${member.id}> reportado no convés. Sua missão: ler todos os canais fixados antes de digitar uma única palavra. Dispense a frescura e vá cumprir.`,

    // Categoria: O Sarcasmo Mortal
    `Que maravilha, <@${member.id}> chegou. O servidor estava precisando de mais um pra perguntar a diferença entre Java e JavaScript. Sinta-se 'em casa'.`,
    `Nosso dia estava tranquilo demais, mas aí <@${member.id}> apareceu. Seja bem-vindo ao olho do furacão. Tente não quebrar nada... mais do que já está.`,
    `Ah, carne fresca. <@${member.id}>, estávamos justamente precisando de um voluntário para testar um deploy na sexta-feira às 18h. Que sorte a sua!`,

    // Categoria: O Motivacional do Avesso
    `E aí, <@${member.id}>. Achou que aqui era um lugar pra receber tapinha nas costas? Achou errado. Mas se você aguentar a pressão, talvez saia daqui um dev um pouco menos inútil. Talvez. Bem-vindo ao teste de fogo.`,
    `Bem-vindo, <@${member.id}>. Aqui a gente destrói seu ego pra construir seu conhecimento. Se não aguenta o tranco, a porta tá aberta. Se aguenta, pegue um café e vá estudar.`,
    `Seja bem-vindo, <@${member.id}>. Este não é um lugar seguro. É um lugar para ficar mais forte. Lembre-se: o que não te mata, te deixa mais pistola com código ruim.`,

    // Outros
    `Olha só, <@${member.id}> apareceu. Espero que seu código seja melhor que a sua coragem de entrar aqui sem ser chamado. Não enche o saco.`,
    `Mais um. <@${member.id}>, a porta de saída tem o mesmo tamanho da de entrada. Se for ficar, seja útil.`,
    `<@${member.id}> entrou no servidor. Regra número 1: não me faça perder tempo. Regra número 2: leia a porra da Regra número 1.`,
    `Bem-vindo, <@${member.id}>. Ou não. Depende da qualidade das suas perguntas. Tente não fazer nenhuma nas próximas 24 horas. Leia primeiro.`
  ];

  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

  canal.send(mensagemAleatoria);
});
client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

client.login(TOKEN);