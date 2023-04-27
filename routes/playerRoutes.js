const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router.get('/get_player_average', playerController.getPlayerAverages);

module.exports = router;
