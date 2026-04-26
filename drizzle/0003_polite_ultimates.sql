CREATE TABLE "phishing_log" (
	"id" integer PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_email" varchar(255) NOT NULL,
	"phishing_email_id" integer NOT NULL,
	"sent_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_phish_sent_at" timestamp;--> statement-breakpoint
ALTER TABLE "phishing_log" ADD CONSTRAINT "phishing_log_user_email_users_email_fk" FOREIGN KEY ("user_email") REFERENCES "public"."users"("email") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "phishing_log" ADD CONSTRAINT "phishing_log_phishing_email_id_phishing_emails_id_fk" FOREIGN KEY ("phishing_email_id") REFERENCES "public"."phishing_emails"("id") ON DELETE no action ON UPDATE no action;