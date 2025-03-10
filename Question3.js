const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! My name is Aaron Earl B. Cagata' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`); //server listening on port 3000
});