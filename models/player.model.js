import mongoose from 'mongoose';

//eveneutell anpassen zu soccer app
const playerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  free_transfer: Boolean,
  club: String,
  position: String,
  skills: Array,
  mail: String,
});

const Player = mongoose.model('SoccerPlayer', playerSchema);

export default Player;
