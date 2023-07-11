// Import dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

// Creates new app with express
const app = express();

// Get route for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// Get route for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
);