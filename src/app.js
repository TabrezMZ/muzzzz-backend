const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const authRoutes = require('./routes/auth.routes');
const playlistRoutes = require('./routes/playlist.routes');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());


// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/playlists', playlistRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('🎵 Music Playlist API is running!');
});

module.exports = app;
