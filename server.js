const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/movies', (req, res) => {
    
    res.send('<h2>All Movies Data in JSON format from Mongo DB</h2>');
});

app.get('/genres', (req, res) => {
    //res.setHeader('Content-Type', 'text/html'); 
    //above line is needed or not needed at all
    res.send('<h2>All Genres Data in JSON format from Mongo DB</h2>');
});

app.get('/artists', (req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    res.send('<h2>All Artists Data in JSON format from Mongo DB</h2>');
});

app.listen(9000, 'localhost', () => console.log("Listening at Port 9000..."));

//Checkpoint 5

const db = require("./moviebooking/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });