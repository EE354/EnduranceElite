import { z } from "zod";

export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8).max(100);
export const nameSchema = z.string().min(1).max(100);
export const dateOfBirthSchema = z.date().min(new Date(1900, 1, 1)).max(new Date());

export const eventDateSchema = z.date().min(new Date(2015, 1, 1)).max(new Date(2100, 1, 1))

export const stringSchema = z.string();

