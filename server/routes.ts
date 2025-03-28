import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Form submission schemas
const callbackSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
});

const measurementSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  address: z.string().min(5),
  date: z.string().min(1),
});

const contactFormSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  comment: z.string().optional(),
});

const questionSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  question: z.string().min(10),
  targetEmail: z.string().email(),
});

const reviewSchema = z.object({
  name: z.string().min(2),
  rating: z.number().min(1).max(5),
  text: z.string().min(10),
  location: z.string().min(2),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Callback request form
  app.post("/api/callback", async (req, res) => {
    try {
      const data = callbackSchema.parse(req.body);
      const submission = await storage.createFormSubmission({
        type: "callback",
        data: JSON.stringify(data),
        createdAt: new Date(),
      });
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Measurement request form
  app.post("/api/measurement", async (req, res) => {
    try {
      const data = measurementSchema.parse(req.body);
      const submission = await storage.createFormSubmission({
        type: "measurement",
        data: JSON.stringify(data),
        createdAt: new Date(),
      });
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Contact/cost calculation form
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      const submission = await storage.createFormSubmission({
        type: "contact",
        data: JSON.stringify(data),
        createdAt: new Date(),
      });
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Question form
  app.post("/api/question", async (req, res) => {
    try {
      const data = questionSchema.parse(req.body);
      
      // Store the question in the database
      const submission = await storage.createFormSubmission({
        type: "question",
        data: JSON.stringify(data),
        createdAt: new Date(),
      });
      
      // Here we would typically send an email to the target email address
      // For demonstration purposes, we'll just log the data
      console.log(`Question submitted to ${data.targetEmail}:`, {
        name: data.name,
        email: data.email,
        question: data.question
      });
      
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Review form
  app.post("/api/review", async (req, res) => {
    try {
      const data = reviewSchema.parse(req.body);
      
      // Store the review in the database
      const submission = await storage.createFormSubmission({
        type: "review",
        data: JSON.stringify(data),
        createdAt: new Date(),
      });
      
      // Here we would typically process the review, perhaps send a notification email
      console.log("New review submitted:", {
        name: data.name,
        rating: data.rating,
        text: data.text,
        location: data.location
      });
      
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all form submissions (for admin purposes)
  app.get("/api/submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllFormSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
