const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// const notes = [
//     { id: 1, title: 'First note', description: 'This is the first note' },
//     { id: 2, title: 'Second note', description: 'This is the second note' },
// ];

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
