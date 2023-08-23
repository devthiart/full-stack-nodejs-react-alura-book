const express = require("express");
const cors = require("cors");
const bookRoute = require('./routes/book');
const favoriteRoute = require('./routes/favorite');

const app = express();
app.use(express.json()); // Enabling application to receive JSON data.
app.use(cors({ origin: "*" })); // Enabling our application to receive requests from anyone.

app.use('/books', bookRoute);
app.use('/favorites', favoriteRoute);

const port = 8000; 

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port} `);
});
