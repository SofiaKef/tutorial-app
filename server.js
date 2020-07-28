const express = require('express');
const path = require('path');

const port = 5010;
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));


// Handles any requests that don't match the ones above
app.get('/resize', (req, res) => {
  const exampleJson = [
    { id: 1, desc: 'background' },
    { id: 2, desc: 'witch' },
    { id: 3, desc: 'vampire' },
  ];

  res.json(exampleJson);
});

app.listen(port);

console.log(`App is listening on port ${port}`);
