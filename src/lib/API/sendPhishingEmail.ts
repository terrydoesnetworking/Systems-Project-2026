import { phishingEmails } from "$lib/server/db/schema.ts";
import { db } from "$lib/server/index.ts";
import { sql } from "drizzle-orm";
import nodemailer from "nodemailer";

const result = await db.execute(sql`
    SELECT *
    FROM users
    WHERE
        last_phish_sent_at IS NULL
        OR last_phish_sent_at < NOW() - INTERVAL '24 hours'
    `);



const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD
    }
});

console.log("authenticate transporter successful");


export async function sendEmail() {

const emails = await db.select().from(phishingEmails);
const users = result.rows;
const randomUser = users[Math.floor(Math.random() * users.length)];
const randomEmail = emails[Math.floor(Math.random() * emails.length)];    
console.log(randomEmail.subject);
console.log(randomEmail.body);
console.log(randomUser.email);

    await transporter.sendMail({
        from: process.env.EMAIL,
        to: randomUser.email,
        subject: randomEmail.subject,
        html: `
            <p>${randomEmail.body}</p>
            
            <p>
                <a href="https://systems-project-2026.vercel.app/pwned">
                    Click Here
                </a>
            </p>
        `
    });
    //console.log("email sent successfully");
    
};

import cron from 'node-cron';

cron.schedule('* * 24 * * *',() => {
    console.log("sending email");
    sendEmail();
    console.log("email sent");
});
// console.log("about to call sendEmail");
// await sendEmail();
// console.log("after sendEmail");