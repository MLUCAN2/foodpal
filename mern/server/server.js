import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// require('dotenv').config();

const PORT= process.env.PORT || 3001;
const app= express();


app.use(cors());
//Allow us to parse JSON data
app.use(express.json());

// Connection for MongoDB, our DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connected to MongoDB");
});

// Listen for the routes and middleware
app.listen(PORT, ()=> {
    console.log(`Server is alive on port ${PORT}`)
})