import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/index.ts';
import { usersTable, sessionsTable } from '$lib/server/db/schema.ts';
import { eq } from 'drizzle-orm';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

export const actions = {
  default: async ({ request, cookies }) => {
    
    console.log("Start of function");

    const data = await request.formData();
    
    const email = data.get('Email')?.toString();
    const password = data.get('password')?.toString();

    if (!email || !password) {
        console.log("if statement checking for null entries");
        return fail(400, { message: 'Missing credentials' });
    }
    
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.email, email),
    });
    
    console.log("Completed email check on database");
    
    if (!user) {
        console.log("if statement checking for existing users");
        return fail(401, { message: 'Invalid login' });
    }
    const valid = await bcrypt.compare(password, user.passwordHash);
    
    console.log("if statement checking for vaildity");

    if (!valid) {
        
        return fail(401, { message: 'Invalid login' });
    }

    const sessionId = randomUUID();
    
    console.log(sessionId);
    console.log("start of database session lookup...");
    
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