const Song = require("../models/song.model");

// Create function
module.exports.createSong = (req, res) => {
    const newSong = req.body;
    Song.create(newSong)
    .then(song => res.json({results: song}))
    .catch(err => res.status(400).json(err));
}

// Read all
module.exports.allSongs = (req, res) => {
    Song.find()
    .then(allSongs => res.json({results: allSongs}))
    .catch(err => res.json(err));
}

// Read one
module.exports.oneSong = (req, res) => {
    const idFromParams = req.params.id;
    Song.findOne({_id: idFromParams})
    .then(oneSong => res.json({results: oneSong}))
    .catch(err => res.json(err));
}

// Update one song
module.exports.updateSong = (req, res) => {
    const idFromParams = req.params.id;
    const updateSong = req.body;
    Song.findOneAndUpdate({_id: idFromParams}, updateSong, {new: true})
    .then(updatedSong => res.json({results: updatedSong}))
    .catch(err => res.json(err));
}

// Delete song
module.exports.deleteSong = (req, res) => {
    const idFromParams = req.params.id;
    Song.deleteOne({_id: idFromParams})
    .then(deletedSong => res.json({results: deletedSong}))
    .catch(err => res.json(err));
}