const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3005;

const db = {
  users: {
    'mail@test.de': {
      password: 'test',
      username: 'test',
      color: '##800000',
    },
    'barack@obama.usa': {
      password: 'password',
      username: 'Barack',
      color: '#660033',
    },
    'leo@me.fr': {
      password: 'password',
      username: 'Leo',
      color: '#000099',
    }
  }
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((_, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});




// Login avec vérification : POST /login
app.post('/login', (request, response) => {
  console.log('>> POST /login', request.body);

  // Extraction des données de la requête provenant du client.
  const { email, password } = request.body;

  // Vérification des identifiants de connexion proposés auprès de la DB.
  let username;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
  }

  // Réponse HTTP adaptée.
  if (username) {
    console.log('<< 200 OK', username);
    response.json({
      pseudo: username,
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

// Mot de passe oublié : POST /forgot
app.post('/forgot', (request, response) => {
  const { email } = request.body;
  if (db.users[email]) {
    response.json({
      pseudo: db.users[email].username
    });
  }
  else {
    response.status(400).end();
  }
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Theme json
 */
app.get('/theme/:email', (request, response) => {
  const email = request.params.email;
  if (!email) {
    console.log('<< 400 BAD_REQUEST');
    response.status(400).end();
  }

  let color;
  if (db.users[email] && db.users[email].color) {
    color = db.users[email].color;
  }

  // Réponse HTTP adaptée.
  if (color) {
    console.log('<< 200 OK', email, color);
    response.json({
      color
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});