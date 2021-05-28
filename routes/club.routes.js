import express from 'express';
import {
  postClub,
  getClub,
  getClubId,
  updateClub,
  deleteClub,
} from '../controller/club.controller.js';

const router = express.Router();

router.post('/club', postClub);

router.get('/club', getClub);

router.get('/club/:clubId', getClubId);

router.put('/club/:clubId', updateClub);

router.delete('/club/:clubId', deleteClub);

export default router;
