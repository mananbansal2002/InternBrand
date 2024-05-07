import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./Routes/Posts.router.js";
dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//mongodb connection
const connection = async () => {
    try {
        const connectionInfo = await mongoose.connect(process.env.MONGO_URL);

        // Access the default connection
        const db = connectionInfo.connection.db;
        
        // Get the name of the connected database
        const databaseName = db.databaseName;
        console.log("Connected to MongoDB database:", databaseName);

        // Access the "posts" collection directly
        const collection = db.collection('posts');

        // Query the "posts" collection
        const documents = await collection.find().toArray();
        console.log("Documents in the 'posts' collection:");
        console.log(documents);

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

app.use("/api", routes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    connection();
    console.log(`Server is running at http://localhost:${PORT}`);
});
