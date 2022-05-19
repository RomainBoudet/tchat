# tchat
Une application pour pratiquer les websocket via un tchat de messagerie !

## STACK :

### Back :
* Node.js
* Express.js
* socket.io

### Front:
* React 18
* Redux
* Redux-saga
* Semantic-ui-react
* axios
* react-spinners
## Pour l'instalation :

Cloner le repo, puis :
### Serveur :
=> Ouvrir le dosier SERVER dans un terminal dédié, ``` npm install ``` pour installer les dépendances, puis ```npm start ``` pour lancer le serveur sur le port 3005.

Le serveur doit être arrété et relancer à chaque fois que le front est arrété, pour garder une cohérence avec les utilisateur connectés, stockés par le serveur.
### Front :
=> Creér un fichier .env, à la racine, et y inclure la base url du serveur, par default : ````BASE_URL=http://localhost:3005```.

=> Ouvrir le dossier tchat dans un terminal dédié, puis lancer ```yarn``` pour installer les dépendances du projet, puis ```yarn start``` pour lancer le build.

=> 3 compte de connexion sont présent dans le serveur : 
* "leo@me.fr" avec comme password : "password"
* "barack@obama.usa" avec comme password : "password"
* "mail@test.de" avec comme password : "test"

Vous pouvez désormais ouvrir plusieur page de tchat, vous identifier avec différents comptes et communiquer via la messagerie instantanée ! 

La couleur du rond devant le nom de l'auteur indique si celui-ci est connecté (vert) ou si il est déconnecté (rouge).

