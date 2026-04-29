import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),

  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  lastPhishSentAt: timestamp("last_phish_sent_at"), 
});

export const sessionsTable = pgTable("sessions", {
  id: varchar("id", { length: 255 }).primaryKey(),

  userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade"}),

  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const phishingEmails = pgTable('phishing_emails', {
  id: integer("id").primaryKey().unique(),
  title: varchar("title").notNull(),
  subject: varchar("subject").notNull(),
  sender: varchar("sender").notNull(),
  body: varchar("body").notNull(),
  tags: varchar("tags").array(),
  createdAt: timestamp("created_at").defaultNow()

});

export const phishingLogTable = pgTable("phishing_log", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userEmail: varchar("user_email", { length: 255 }).notNull().references(() => usersTable.email),
  phishingEmailId: integer("phishing_email_id").notNull().references(() => phishingEmails.id),
  sentAt: timestamp("sent_at").defaultNow()
})
