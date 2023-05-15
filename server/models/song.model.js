const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be 3 characters long"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minLength: [2, "Artist must be 2 characters long"]
    },
    rating: {
        type: Number,
        min: [1, "Rating must be between 1 and 10"],
        max: [10, "Rating must be between 1 and 10"]
    },
    top100: {
        type: Boolean
    },
    img: {
        type: String,
        required: [true, "Please add album cover url"]
    }
}, {timestamps: true});

// Option 1
const Song = mongoose.model("Song", SongSchema);
module.exports = Song;

// Option 2
// module.exports = mongoose.model("Song", SongSchema);