const express = require('express'); /** exige Express.js */
const app = express();
const port = 3000;
 
app.get('/ping', (req, res) => {
  res.json('pong');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
}) /**écouter un port: prends le contrôle du port */
