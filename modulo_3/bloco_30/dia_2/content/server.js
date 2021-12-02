const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);

  connection.on('data', (data) => {
    console.log(data.toString());
  })
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
