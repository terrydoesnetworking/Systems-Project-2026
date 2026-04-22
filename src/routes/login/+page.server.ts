import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/index.ts';
import { usersTable, sessionsTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

export const actions = {
  default: async ({ request, cookies }) => {
    //console.log(request);
    console.log("Start of function");

    const data = await request.formData();
    console.log(data);
    const email = data.get('Email')?.toString();
    const password = data.get('password')?.toString();

    if (!email || !password) {
        console.log("if statement checking for null entries");
        return fail(400, { message: 'Missing credentials' });
    }
    //console.log("email and password was not null" + email + password);
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.email, email),
    });

    if (!user) {
        console.log("if statement checking for existing users");
        return fail(401, { message: 'Invalid login' });
    }
    const valid = await bcrypt.compare(password, user.passwordHash);

    if (!valid) {
        console.log("if statement checking for vaildity");
        return fail(401, { message: 'Invalid login' });
    }

    const sessionId = randomUUID();

    await db.insert(sessionsTable).values({
      id: sessionId,
      userId: user.id,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), 
    });

    cookies.set('session', sessionId, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: false, 
      maxAge: 60 * 60 * 24 * 7,
    });
    
    console.log("LOGIN SUCCESS");
    
    throw redirect(303, '/');
  },
};