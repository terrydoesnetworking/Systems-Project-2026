import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
    to: string,
    subject: string,
    html: string,
) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Application',
            to,
            subject,
            html
        });

        if (error) {
            console.error(error);
            throw new Error("Email failed");
        }

        return data;
    }   catch (err) {
        console.error("Email error:", err);
        throw err;
    }
}