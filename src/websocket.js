
import { io } from 'socket.io-client';

const socket = io('https://api-tchat.romainboudet.fr', { transports : ['websocket', 'polling', 'flashsocket'] });

export default socket;
