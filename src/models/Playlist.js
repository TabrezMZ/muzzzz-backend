const mongoose = require('mongoose');
const songSchema = require('./Song');

// Playlist schema definition
const playlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  songs: [songSchema] // ⬅ Embedding songSchema here
}, { timestamps: true });

module.exports = mongoose.model('Playlist', playlistSchema);
