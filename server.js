const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'pic-resize/public')));

// Handles any requests that don't match the ones above
app.get('/resize', (req, res) => {
  res.send('Express is working');
<<<<<<< HEAD
  const exampleJson = [
    { id: 1, desc: 'background' },
    { id: 2, desc: 'witch' },
    { id: 3, desc: 'vampire' },
  ];
=======
>>>>>>> parent of 49adc53... Made react fetch json data from express
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);
