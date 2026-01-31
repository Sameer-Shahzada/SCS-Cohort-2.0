const mongoose = require("mongoose");

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


// Export the function
module.exports = connectToDatabase;