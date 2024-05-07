import mongoose from "mongoose";

// Handler to get all job postings
export const getAllJobPostings = async (req, res) => {
    try {
        // Access the default mongoose connection
        const db = mongoose.connection;

        // Access the "posts" collection directly
        const collection = db.collection('posts');

        // Query the collection to retrieve all job postings
        const jobPostings = await collection.find().toArray();

        // Respond with the retrieved job postings
        res.status(200).json(jobPostings);
    } catch (error) {
        // Handle errors
        console.error("Error getting job postings:", error);
        res.status(500).json({ message: "Failed to get job postings" });
    }
};
