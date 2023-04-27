require('dotenv').config();
const express = require('express');
const playerRoutes = require('./routes/playerRoutes');

const app = express();

app.use(express.json());

app.use('/v1', playerRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
