// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/node-postgres';
// //import { eq } from 'drizzle-orm';
// import { usersTable } from './db/schema';

// const db = drizzle(process.env.DATABASE_URL!);
// const users = await db.select().from(usersTable);
// console.log('Getting all users from the database: ', users)

// export { db };

// src/lib/server/db/index.ts

import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
