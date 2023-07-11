// Import dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

// Set Port
const PORT = process.env.PORT || 3001;

// reference database
const dbjson = require('./db/db.json');

// Creates new app with express
const app = express();

// Get route for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// Get route for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// GET request for database
app.get('/api/dbjson', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get dbjson`);

  // Sending databse to the client
  return res.status(200).json(dbjson);
});

// listen on local server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
