import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { db } from '$lib/server/index.ts';
import {
  usersTable,
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

    const passwordHash = await bcrypt.hash(password, 10);
    
    console.log("password hash");
    console.log(password);

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


  if (err?.status === 303) {
    
    throw err;
  
  }

  console.error(err);
  

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

  }
};