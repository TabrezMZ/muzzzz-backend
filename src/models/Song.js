const mongoose = require('mongoose');

// Song schema definition
const songSchema = new mongoose.Schema({
  spotifyId: { type: String, required: true }, 
  title: { type: String, required: true },
  artists: [
    {
      name: String,
      id: String
    }
  ],
  album: {
    name: String,
    coverUrl: String,
    albumId: String
  },
  durationMs: Number,
  previewUrl: String,
  explicit: Boolean,
  trackNumber: Number,
  uri: String
}, { _id: false }); 

module.exports = songSchema;
