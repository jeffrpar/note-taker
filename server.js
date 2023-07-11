// Import dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

// Set Port
const PORT = process.env.PORT || 3001;

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

// listen on local server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
