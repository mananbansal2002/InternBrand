import mongoose from "mongoose";

const jobPostingSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    company: String,
    position: String,
    department: String,
    duration: Number,
    experience: String,
    stipend: String,
    stipends: Number,
    location: String,
    category: String,
    type: String,
    timings: String,
    posted: Number,
    endsin: Number,
    openposition: Number,
    totalapplicant: Number,
    skills: [String],
    about: String,
    requirements: [String],
    responsibilities: [String]
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

export default JobPosting;
