const Playlist = require('../models/Playlist');
const { success, error } = require('../utils/response');


// Controller for playlist management
exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ userId: req.user.userId });
    return res.json(success("Playlists fetched", playlists));
  } catch (err) {
    return res.status(500).json(error("Failed to fetch playlists", err.message));
  }
};

exports.createPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.create({ ...req.body, userId: req.user.userId });
    return res.status(201).json(success("Playlist created", playlist));
  } catch (err) {
    return res.status(500).json(error("Failed to create playlist", err.message));
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const updated = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(success("Playlist updated", updated));
  } catch (err) {
    return res.status(500).json(error("Failed to update playlist", err.message));
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    await Playlist.findByIdAndDelete(req.params.id);
    return res.json(success("Playlist deleted"));
  } catch (err) {
    return res.status(500).json(error("Failed to delete playlist", err.message));
  }
};

exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findOne({
      _id: req.params.id,
      userId: req.user.userId, 
    });

    if (!playlist) {
      return res.status(404).json(error('Playlist not found'));
    }

    return res.json(success('Playlist fetched successfully', playlist));
  } catch (err) {
    return res.status(500).json(error('Failed to fetch playlist', err.message));
  }
};
