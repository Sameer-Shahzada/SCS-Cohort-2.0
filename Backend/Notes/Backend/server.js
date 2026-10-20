/**
 * server ko start krna
 * database se connect krna
 */

require('dotenv').config()
const app = require("./src/app")
const connectToDB = require("./src/config/db")


connectToDB()


app.listen(3000, () => {
    console.log("server is running on port 3000")
})


/**
 * Credentials for Mongo DB Altas - SCS Cohort 2.0 project 
 * Username: mohdsameershahzada_db_user
 * Password: vL9bNTxBfdyknme8
 * 
 * 
 */