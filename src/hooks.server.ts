//import PostgreSQL from '$lib/'
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { db } from '$lib/server/index.ts';
import {
  usersTable,
  sessionsTable
} from '$lib/server/db/schema';

import { eq } from 'drizzle-orm';

export const handle: Handle = async ({ event, resolve }) => {

  //
  // 1 — Get session cookie
  //

  const sessionId = event.cookies.get('session');

  if (sessionId) {

    //
    // 2 — Find session
    //

    const session = await db.query.sessionsTable.findFirst({
      where: eq(sessionsTable.id, sessionId)
    });

    if (!session) {
      event.cookies.delete('session', {
        path: '/'
      });
    }else{

      

      if (session.expiresAt > new Date()) {

        //
        // 4 — Load user
        //

        const user = await db.query.usersTable.findFirst({
          where: eq(usersTable.id, session.userId)
        });

        if (user) {
          event.locals.user = user;
        }

      } else {

        //
        // Session expired
        //

        event.cookies.delete('session', {
          path: '/'
        });

      }

    }

  }

  //
  // 5 — Protect routes
  //

  const protectedRoutes = [
    //'/dashboard',
    '/slides',
    '/quiz'
  ];

  const isProtected = protectedRoutes.some((route) =>
    event.url.pathname.startsWith(route)
  );

  if (isProtected && !event.locals.user) {
    throw redirect(303, '/login');
  }

  //
  // 6 — Continue request
  //

  return resolve(event);

};