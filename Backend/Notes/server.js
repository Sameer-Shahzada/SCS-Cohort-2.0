/** Purpose of server.js file 
 * - Start the server 
 * - connect to database
 */


const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// const notes = [
//     { id: 1, title: 'First note', description: 'This is the first note' },
//     { id: 2, title: 'Second note', description: 'This is the second note' },
// ];


// create a function to connect with database 

// create a function to connect with database 
// function connectToDatabase() {
//   // Database connection logic goes here 
//   const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://mohdsameershahzada_db_user:vL9bNTxBfdyknme8@cluster0.3ekwfva.mongodb.net/notesDB";
//   mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => {
//       console.log("Connected to MongoDB database");
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB database:", error);
//     });
// }

function connectToDatabase() {
  // Database connection logic goes here 
  mongoose.connect("mongodb+srv://mohdsameershahzada_db_user:vL9bNTxBfdyknme8@cluster0.3ekwfva.mongodb.net/notesDB", {
  })
    .then(() => {
      console.log("Connected to MongoDB database");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB database:", error);
    });
}

connectToDatabase()

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