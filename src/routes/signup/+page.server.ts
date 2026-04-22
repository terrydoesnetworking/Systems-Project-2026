import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

import { db } from '$lib/server/index.ts';
import {
  usersTable,
  sessionsTable
} from '$lib/server/db/schema';


export const actions = {
  default: async ({ request, cookies }) => {

    const data = await request.formData();

    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    console.log("checking for input in all fields");

    if (!name || !email || !password) {
      return fail(400, {
        message: 'All fields are required'
      });
    }

    //
    // 1 — Hash password
    //

    const passwordHash = await bcrypt.hash(password, 10);
    
    console.log("password hash");
    console.log(password);
    
    //
    // 2 — Insert user
    //

    try {

      console.log("attempt to insert user into database");

      await db.insert(usersTable).values({
      name,
      email,
      passwordHash

    });

  console.log("Signup successful, time to login to verify");

  throw redirect(303, '/login');

} catch (err: any) {


  //
  // VERY IMPORTANT
  // Let redirects pass through
  //

  if (err?.status === 303) {
    
    //console.log("something went wrong");
    
    throw err;
  
  }

  console.error(err);
  


  //
  // Handle duplicate email
  //

  if (err.code === '23505') {

    console.log("email exists already");

    return fail(400, {
      error: 'Email already exists'
    });

  }

  return fail(500, {
    error: 'Something went wrong'
  });

}

    // console.log("just here to make sure the code is reached: beginning");

    // const sessionId = randomUUID();

    // await db.insert(sessionsTable).values({
    //   id: sessionId,
    //   userId: user.id,
    //   expiresAt: new Date(
    //     Date.now() + 1000 * 60 * 60 * 24 * 7
    //   ) // 7 days
    // });

    // //
    // // 4 — Set cookie
    // //

    // cookies.set('session', sessionId, {
    //   path: '/',
    //   httpOnly: true,
    //   sameSite: 'strict',
    //   secure: false, // true in production
    //   maxAge: 60 * 60 * 24 * 7
    // });

    // //
    // // 5 — Redirect
    // //

    // throw redirect(303, '/');

  }
};