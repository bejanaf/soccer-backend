import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
  clubname: String,
  trainer: String,
  stadium: String,
  budget: Number,
});

const Club = mongoose.model('SoccerClub', clubSchema);

export default Club;
