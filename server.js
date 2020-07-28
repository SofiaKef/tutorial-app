const express = require('express');
const path = require('path');

const app = express();
const port = 5010;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'pic-resize/public')));

// Handles any requests that don't match the ones above
app.get('/resize', (req, res) => {
  res.send('Express is working');
  const exampleJson = [
    { id: 1, desc: 'background' },
    { id: 2, desc: 'witch' },
    { id: 3, desc: 'vampire' },
  ];
});

app.listen(port);

console.log(`App is listening on port ${port}`);
