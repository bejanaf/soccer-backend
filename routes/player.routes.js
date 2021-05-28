import express from 'express';
import {
  postPlayer,
  getPlayer,
  getPlayerId,
  updatePlayer,
  deletePlayer,
} from '../controller/player.controller.js';

const router = express.Router();

router.post('/player', postPlayer);

router.get('/player', getPlayer);

router.get('/player/:playerId', getPlayerId);

router.put('/player/:playerId', updatePlayer);

router.delete('/player/:playerId', deletePlayer);

export default router;
