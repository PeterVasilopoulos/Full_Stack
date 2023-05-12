const SongController = require("../controllers/song.controller");

module.exports = (app) => {
    // Create a song - C
    app.post("/api/songs/new", SongController.createSong);
    
    // Read all - R
    app.get("/api/songs", SongController.allSongs);

    // Read one song - R
    app.get("/api/songs/:id", SongController.oneSong);

    // Update song - U
    app.put("/api/songs/update/:id", SongController.updateSong);

    // Delete song - D
    app.delete("/api/songs/delete/:id", SongController.deleteSong);
}