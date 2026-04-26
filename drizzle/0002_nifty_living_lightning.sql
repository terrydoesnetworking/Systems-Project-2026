CREATE TABLE "phishing_emails" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"subject" varchar NOT NULL,
	"sender" varchar NOT NULL,
	"body" varchar NOT NULL,
	"tags" varchar[],
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "phishing_emails_id_unique" UNIQUE("id")
);
