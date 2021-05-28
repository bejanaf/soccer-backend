import mongoose from 'mongoose';

//eveneutell anpassen zu soccer app
const playerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  position: String,
  club: String,
  free_transfer: Boolean,
  skills: Array,
  mail: String,
});

const Player = mongoose.model('SoccerPlayer', playerSchema);

export default Player;
