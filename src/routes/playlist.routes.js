const express = require('express');
const {
  getPlaylists, createPlaylist, updatePlaylist, deletePlaylist,
  getPlaylistById
} = require('../controllers/playlist.controller');
const auth = require('../middleware/authMiddleware');


// Playlist routes
const router = express.Router();
router.use(auth);

router.get('/', getPlaylists);
router.post('/', createPlaylist);
router.put('/:id', updatePlaylist);
router.delete('/:id', deletePlaylist);
router.get("/:id", getPlaylistById);

module.exports = router;
