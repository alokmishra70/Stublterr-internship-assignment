const Player = require('../models/playerModel');

exports.getPlayerAverages = async (req, res) => {
  try {
    const playerAverages = await Player.getPlayerAverages();
    res.json(playerAverages);
  } catch (err) {
    console.error('Error fetching player averages: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
