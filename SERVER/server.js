const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');
const cors = require('cors');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3005;

app.use(cors({
  optionsSuccessStatus: 200,
  origin: "https://tchat.romainboudet.fr",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS", // ok via un array aussi
}));


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
  response.header('Access-Control-Allow-Origin', "http://localhost:8090");
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.send(   
  `<div style="width: 100%; height: 100%; background-color: black">
  <h1 style="text-align: center; padding-top: 10rem; color: brown;">Bienvenue sur l'API tchat !</h1>
  </div>`
  );
})

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

let users=[];
/*
 * Socket.io
 */
let id = 0;
// dés qu'une socket est connecté, on crée le tunnel représenté par la variable ws., 
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  // ce que recoit le serveur de toutes les socket connéctés !
  ws.on('tchat_message', (message) => {
    console.log("received message  : ", message)
    // Le serveur incrémente les id comme un grand (simule une BDD)
    message.id = ++id;
    // ce que va émettre le serveur et recevoir le client
    io.emit('receive_message', message);
  });

  // Je souhaite que tous utilisateurs connectés a postériori, puissent connaître la liste des utilisateurs précédemmet connecté !
  // je stock dans un tableau la liste des users présent en temps réel.
  ws.on('tchat_users', (message) => {
    console.log(">> received users from front  : ", message)
    // A chaque reception d'un pseudo, je le push dans un tableau et renvoie ce nouveau tableau
    if(message.action === 'add') {
      users.push(message.pseudo);
      console.log("users dans le server => ", users);
      return io.emit('receive_users', users);
    } 
    if (message.action === 'del') {
      // à chaque reception d'un peudo, je filtre le tableau users en elevant ce pseudo
      const usersAfterDel = users.filter(item => item !== message.pseudo);
      users = usersAfterDel;
      console.log("users => ", users);

      return io.emit('receive_users', usersAfterDel);
    }
    // ce que va émettre le serveur et recevoir le client
    //io.emit('receive_users', users);

    console.log(">> WARNING - no action was send to the server !");

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
  console.log(`listening on http://localhost:${port}`);
});
