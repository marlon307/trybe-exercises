const net = require('net');

const socketConnections = [];
let guestId = 0;

const sendMessage = (clientSend, message) => {
  socketConnections.forEach((socket) => {
    if (socket.guest === clientSend) return;
    socket.write(message);
  });
}

const server = net.createServer((socket) => {
  guestId += 1;
  socket.guest = `Usuário ${guestId}`;

  socketConnections.push(socket);

  sendMessage(socket.guest, `${socket.guest} entrou no chat.\n`);

  socket.on('end', () => {
    socketConnections.splice(socketConnections.indexOf(socket), 1);
    const message = `${socket.guest} deixou o chat.\n`;
    sendMessage(socket.guest, message);
  });

  socket.on('data', (data) => {
    const message = `${socket.guest} >> ${data.toString()}`;
    sendMessage(socket.guest, message);
  });
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
