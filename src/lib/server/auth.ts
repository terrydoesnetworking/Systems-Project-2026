//import { betterAuth } from "better-auth";
//import { drizzleAdapter } from "better-auth/adapters/drizzle";
//import { db } from "./index.ts"; // your drizzle instance

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local"});

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

// export const auth = betterAuth({
//     database: drizzleAdapter(db, {
//         provider: "pg", // or "mysql", "sqlite"
//     }),
// });