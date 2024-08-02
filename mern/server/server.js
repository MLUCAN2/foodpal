import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT= process.env.PORT || 3001;
const app= express();

app.use(cors());
app.use(express.json());

// Connection for MongoDB, our DB
mongoose.connect('mongodb://localhost/mern-stack-db', {
    useNewUrlParser: true, useUnifiedTopology: True
});

// Listen for the routes and middleware
app.listen(PORT, ()=> {
    console.log(`Server is alive on port ${PORT}`)
})