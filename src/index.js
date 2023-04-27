import { create } from '@open-wa/wa-automate';

async function start() {
  const client = await create({popup:true});
  client.onAnyMessage(async message => {
    if (message.body === 'Hi') {
      await client.sendText(message.chatId, '👋 Hello!');
    }
  });
}

start()