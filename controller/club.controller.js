import Club from '../models/club.model.js';

function postClub(req, res) {
  const club = new Club({
    clubname: req.body.clubname,
    trainer: req.body.trainer,
    stadium: req.body.stadium,
    budget: req.body.budget,
  });
  club
    .save()
    .then((clubSaved) => res.json(clubSaved))
    .catch((error) => res.json(error));
}
/* `${clubSaved.clubname} is saved.` */

function getClub(req, res) {
  Club.find().then((clubs) => {
    res.json(clubs);
  });
}

function getClubId(req, res) {
  const { clubId } = req.params;
  Club.findById(clubId)
    .then((club) => res.json(club))
    .catch((error) => res.json({ message: 'could not find the Id.' + clubId }));
}

function updateClub(req, res) {
  const { clubId } = req.params;
  const updateClub = req.body;
  Club.findByIdAndUpdate({ _id: clubId }, updateClub, (error, doc) => {
    if (error) {
      res.json({ message: 'could not update database' });
      return;
    }
    res.json(doc);
  });
}

function deleteClub(req, res) {
  const { clubId } = req.params;
  Club.findByIdAndDelete({ _id: clubId }, (error, doc) =>
    res.json({
      success: true,
      message: `the club ${doc.clubname} has been deleted!`,
    })
  );
}

export { postClub, getClub, getClubId, updateClub, deleteClub };
