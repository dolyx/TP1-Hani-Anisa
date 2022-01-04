const express = require('express'); /** exige Express.js */
const app = express();
let port;

function getRandomInt(min, max) {
  min = Math.ceil(3000);
  max = Math.floor(4000);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

port= getRandomInt();
 
app.get('/ping', (req, res) => {
  res.json('pong');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/ping`);
}) /**écouter un port: prends le contrôle du port */
