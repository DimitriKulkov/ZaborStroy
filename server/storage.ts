import { formSubmissions, type FormSubmission, type InsertFormSubmission } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  createFormSubmission(submission: InsertFormSubmission): Promise<FormSubmission>;
  getFormSubmission(id: number): Promise<FormSubmission | undefined>;
  getAllFormSubmissions(): Promise<FormSubmission[]>;
  getFormSubmissionsByType(type: string): Promise<FormSubmission[]>;
}

export class MemStorage implements IStorage {
  private formSubmissions: Map<number, FormSubmission>;
  private currentFormSubmissionId: number;

  constructor() {
    this.formSubmissions = new Map();
    this.currentFormSubmissionId = 1;
  }

  async createFormSubmission(submission: InsertFormSubmission): Promise<FormSubmission> {
    const id = this.currentFormSubmissionId++;
    const newSubmission: FormSubmission = { ...submission, id };
    this.formSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getFormSubmission(id: number): Promise<FormSubmission | undefined> {
    return this.formSubmissions.get(id);
  }

  async getAllFormSubmissions(): Promise<FormSubmission[]> {
    return Array.from(this.formSubmissions.values());
  }

  async getFormSubmissionsByType(type: string): Promise<FormSubmission[]> {
    return Array.from(this.formSubmissions.values())
      .filter(submission => submission.type === type);
  }
}

export const storage = new MemStorage();
