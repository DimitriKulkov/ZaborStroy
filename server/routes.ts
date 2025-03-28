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
  targetEmail: z.string().email().optional(),
});

const measurementSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  address: z.string().min(5),
  date: z.string().min(1),
  targetEmail: z.string().email().optional(),
});

const contactFormSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  comment: z.string().optional(),
  targetEmail: z.string().email().optional(),
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
  targetEmail: z.string().email().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Callback request form
  app.post("/api/callback", async (req, res) => {
    try {
      const data = callbackSchema.parse(req.body);
      const submission = await storage.createFormSubmission({
        type: "callback",
        data: JSON.stringify(req.body), // Store full request including targetEmail
        createdAt: new Date(),
      });
      
      // Here we would send the callback request to the target email address
      console.log(`Callback request submitted to ${req.body.targetEmail || "zaborstroy68@yandex.ru"}:`, {
        name: data.name,
        phone: data.phone
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
        data: JSON.stringify(req.body), // Store full request including targetEmail
        createdAt: new Date(),
      });
      
      // Here we would send the measurement request to the target email address
      console.log(`Measurement request submitted to ${req.body.targetEmail || "zaborstroy68@yandex.ru"}:`, {
        name: data.name,
        phone: data.phone,
        address: data.address,
        date: data.date
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
        data: JSON.stringify(req.body), // Store full request including targetEmail
        createdAt: new Date(),
      });
      
      // Here we would send the cost calculation request to the target email address
      console.log(`Cost calculation request submitted to ${req.body.targetEmail || "zaborstroy68@yandex.ru"}:`, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.service,
        comment: data.comment
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
        data: JSON.stringify(req.body), // Store full request including targetEmail
        createdAt: new Date(),
      });
      
      // Here we would send the question to the target email address
      console.log(`Question submitted to ${req.body.targetEmail || "zaborstroy68@yandex.ru"}:`, {
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
        data: JSON.stringify(req.body), // Store full request including targetEmail
        createdAt: new Date(),
      });
      
      // Here we would send the review to the target email address
      console.log(`Review submitted to ${req.body.targetEmail || "zaborstroy68@yandex.ru"}:`, {
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
