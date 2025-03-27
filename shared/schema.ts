import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const formSubmissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'callback', 'measurement', 'contact'
  data: text("data").notNull(), // JSON string of the form data
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertFormSubmissionSchema = createInsertSchema(formSubmissions).pick({
  type: true,
  data: true,
  createdAt: true,
});

export type InsertFormSubmission = z.infer<typeof insertFormSubmissionSchema>;
export type FormSubmission = typeof formSubmissions.$inferSelect;
