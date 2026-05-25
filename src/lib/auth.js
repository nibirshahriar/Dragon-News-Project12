// This file is responsible for setting up the authentication system using the better-auth library and MongoDB as the database adapter. It initializes a MongoDB client, connects to the database, and configures the better-auth library to use MongoDB for storing user data and handling authentication processes. The authentication system supports email and password-based authentication, allowing users to sign up and log in using their email addresses and passwords.

// import dns from 'node:dns
// dns.setServers(['8.8.8.8','8.8.4.4'])


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URL);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
