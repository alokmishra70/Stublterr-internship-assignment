const db = require('../config/db');

exports.getPlayerAverages = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT player_name, ROUND(AVG(last_5_matches), 2) as average FROM players GROUP BY player_name';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching player averages from database: ', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
