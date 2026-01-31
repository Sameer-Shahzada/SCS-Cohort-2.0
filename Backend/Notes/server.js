/** Purpose of server.js file 
 * - Start the server 
 * - connect to database
 */


const express = require("express");
const connectToDatabase = require("./src/config/db.js");

connectToDatabase();

const app = express();
const PORT = process.env.PORT || 3000;

// const notes = [
//     { id: 1, title: 'First note', description: 'This is the first note' },
//     { id: 2, title: 'Second note', description: 'This is the second note' },
// ];


// create a function to connect with database 


const notes = [];

app.use(express.json()); // Middleware to parse JSON bodies

// Route to create a new note
app.post("/notes", (req, res) => {
  const note = {
    id: Date.now().toString(),
    title: req.body.title,
    description: req.body.description
  };

  notes.push(note);
  res.status(201).json(note);
});


// Route to get all notes
app.get("/notes", (req, res) => {
  res.send(notes);
});

app.patch("/notes/:id", (req, res) => {
  const index = Number(req.params.id);

  if (isNaN(index) || index < 0 || index >= notes.length) {
    return res.status(404).send("Note not found");
  }

  notes[index] = {
    ...notes[index],
    ...req.body
  };

  res.json(notes[index]);
});


app.delete("/notes/:id", (req, res) => {
  const index = Number(req.params.id);

  if (isNaN(index) || index < 0 || index >= notes.length) {
    return res.status(404).send("Note not found");
  }

  const deletedNote = notes.splice(index, 1);
  res.json(deletedNote[0]);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




/**
 * Credentials for Mongo DB Altas - SCS Cohort 2.0 project 
 * Username: mohdsameershahzada_db_user
 * Password: vL9bNTxBfdyknme8
 * 
 * 
 */