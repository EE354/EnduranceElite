import { z } from "zod";

export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8, "Password must contain at least 8 characters").max(100, "Password cannot contain more than 100 characters");
export const nameSchema = z.string().min(1, "Name must contain at least 1 character").max(100, "Name cannot contain more than 100 characters");
export const dateOfBirthSchema = z.date().min(new Date(1900, 1, 1), "Date of birth cannot be before January 1st 1900").max(new Date(), "Date of birth cannot be after today's date");

export const eventDateSchema = z.date().min(new Date(2015, 1, 1), "Event date cannot be before January 1st 2015").max(new Date(2100, 1, 1), "Event date cannot be after January 1st 2100")
export const stringSchema = z.string();

export const urlSchema = z.string().url();

export const questionSchema = z.array(z.object({
    question: z.string().min(1, "Question must contain at least 1 character").max(100, "Question cannot contain more than 100 characters"),
    possibleAnswers: z.array(z.string().min(1, "Answer must contain at least 1 character").max(100, "Answer cannot contain more than 100 characters")),
    correctAnswer: z.number()
}));