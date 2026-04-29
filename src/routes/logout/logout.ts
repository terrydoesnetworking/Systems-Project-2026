import { eq } from "drizzle-orm";
import { sessionsTable } from "../../lib/server/db/schema.ts";
import { db } from "../../lib/server/index.ts";


export async function logout(sessionId: string) {
    console.log("start of logout");
    await db.delete(sessionsTable).where(eq(sessionsTable.id, sessionId));
    console.log("logged out " + sessionsTable.id + " session ID is " + sessionId);
}
