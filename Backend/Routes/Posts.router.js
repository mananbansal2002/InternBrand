import express from "express";
import {getAllJobPostings} from "../Controllers/Posts.Controller.js"

const router=express.Router();
router.get("/getPosts",getAllJobPostings);

export default router;