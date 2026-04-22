// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/node-postgres';
// //import { eq } from 'drizzle-orm';
// import { usersTable } from './db/schema';

// const db = drizzle(process.env.DATABASE_URL!);
// const users = await db.select().from(usersTable);
// console.log('Getting all users from the database: ', users)

// export { db };

// src/lib/server/db/index.ts

import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import * as schema from './db/schema.ts';

const { Pool } = pkg;

const globalForDb = globalThis as unknown as {
  pool?: typeof pool;
};

const pool = globalForDb.pool ?? 
  new Pool ({
  connectionString: process.env.DATABASE_URL,
});

globalForDb.pool = pool;

export const db = drizzle(pool, { 
  schema,
 });

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("TYPE:", typeof process.env.DATABASE_URL);
