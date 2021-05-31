import Player from '../models/player.model.js';

// anpassen zu soccer app
function postPlayer(req, res) {
  const player = new Player({
    name: req.body.name,
    price: req.body.price,
    position: req.body.position,
    club: req.body.club,
    free_transfer: req.body.free_transfer,
    skills: req.body.skills,
    mail: req.body.mail,
  });
  player
    .save()
    .then((playerSaved) => res.json(playerSaved))
    .catch((error) => res.json(error));
}

function getPlayer(req, res) {
  Player.find().then((player) => {
    res.json(player);
  });
}

function getPlayerId(req, res) {
  const { playerId } = req.params;
  Player.findById(playerId)
    .then((player) => res.json(player))
    .catch((error) =>
      res.json({ message: 'could not find the Id.' + playerId })
    );
}

function updatePlayer(req, res) {
  const { playerId } = req.params;
  const updatePlayer = req.body;
  Player.findByIdAndUpdate({ _id: playerId }, updatePlayer, (error, doc) => {
    if (error) {
      res.json({ message: 'could not update database' });
      return;
    }
    res.json(doc);
  });
}

function deletePlayer(req, res) {
  const { playerId } = req.params;
  Player.findByIdAndDelete({ _id: playerId }, (error, doc) =>
    res.json({
      success: true,
      message: `the Playboy ${doc.name} has been deleted!`,
    })
  );
}

export { postPlayer, getPlayer, getPlayerId, updatePlayer, deletePlayer };
