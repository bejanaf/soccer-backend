import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import ClubRoutes from './routes/club.routes.js';
import PlayerRoutes from './routes/player.routes.js';
/* import Player from './models/player.model.js'; */

// datenbank auf den Server ansprechen, ansonsten eine Ersatzdatenbank ansprechen
dotenv.config();

const connectionString =
  process.env.DB_CONNECTION || 'mongodb://localhost:27017/soccer_transfer_app';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.set('returnOriginal', false);

const server = express();

// ermöglicht überkreuzung der Adressen mit Zugriff auf die Datenbank
//Browser Port 3000, Datenbank Port 4000, cross-over-Verbindung
server.use(cors());

server.use(express.json());

server.use(ClubRoutes);
server.use(PlayerRoutes);

server.get('/', (req, res) =>
  res.json({
    status: 'Server is running.',
  })
);

server.listen(4000);
