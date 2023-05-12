const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    rating: {
        type: Number
    },
    top100: {
        type: Boolean
    },
    img: {
        type: String
    }
}, {timestamps: true});

// Option 1
const Song = mongoose.model("Song", SongSchema);
module.exports = Song;

// Option 2
// module.exports = mongoose.model("Song", SongSchema);