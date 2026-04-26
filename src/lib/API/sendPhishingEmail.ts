// import { phishingEmails, usersTable } from "$lib/server/db/schema.ts";
// import { db } from "$lib/server/index.ts";
// import { sql } from "drizzle-orm";
// import { Resend } from "resend";



// const resend = new Resend(process.env.RESEND_API_KEY);

// const randomUser = await db.select().from(usersTable).orderBy(sql`RANDOM()`).limit(1);

// if (!randomUser.length) {
//     throw new Error("No Users Found");
// }

// const email = randomUser[0].email;

// await db.insert(phishingEmails).l
// export async function POST() {
    
// }

import { phishingEmails, usersTable } from "$lib/server/db/schema.ts";
import { db } from "$lib/server/index.ts";
import { sql } from "drizzle-orm";
import { Resend } from "resend";
import { eq } from "drizzle-orm";

const result = await db.execute(sql`
    SELECT *
    FROM users
    WHERE
        last_phish_sent_at IS NULL
        OR last_phish_sent_at < NOW() - INTERVAL '24 hours'
    `);

const emails = await db.select().from(phishingEmails);
const users = result.rows;
const randomUser = users[Math.floor(Math.random() * users.length)];
const randomEmail = emails[Math.floor(Math.random() * emails.length)];

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
    from: randomEmail.sender,
    to: randomUser.email,
    subject: randomEmail.subject,
    html: randomEmail.body
});

await db.update(usersTable).set({lastPhishSentAt: new Date()}).where(eq(usersTable.email, randomUser.email));