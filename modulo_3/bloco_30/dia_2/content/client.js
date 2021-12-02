const net = require('net');
const stdin = process.openStdin();

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();
    client.write(message);
  })
});

client.on('data', (data) => {
  const text = data.toString();
  if (text === '/exit') {
    client.end();
  }
});

client.on('end', () => {
  console.log('Desconectado do servidor');
});
