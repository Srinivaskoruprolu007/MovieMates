import { inngest } from "inngest";
import { Clerk } from "@clerk/express";
import dotenv from "dotenv";

dotenv.congif();

// initialising the inngest

const inngest = new inngest({
  id: "movie-ticket-booking",
  eventKey: process.env.INNGEST_EVENT_KEY,
  signKey: process.env.INNGEST_SIGN_KEY,
});

// intilaising Clerk SDK
const clerkClient = Clerk({
  secretKey: process.env.CLERK_SECRET_KEY,
});

// definging array to hold functions

const functions = [];

