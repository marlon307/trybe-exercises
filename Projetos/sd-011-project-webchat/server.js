const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const routerChat = require('./routes/routeChat');
const controllerGetMessageChat = require('./controller/controllerGetMessageChat');

app.use(express.json());

require('./sockets')(io);

app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/', controllerGetMessageChat, routerChat);

server.listen(PORT, () => {
  console.log(`Server started on http//:localhost:${PORT}`);
});
