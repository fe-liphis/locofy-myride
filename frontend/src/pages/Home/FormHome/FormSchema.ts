import { z } from "zod";

const schema = z.object({
  fullName: z
    .string()
    .min(10, "Invalid name")
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, "Invalid name"),
  email: z.string().min(1, "Invalid email").email("Invalid email"),
  country: z.string().min(1, "Invalid country"),
  city: z.string().min(1, "Invalid city"),
  code: z.string().regex(/^[A-Z]{3}-\d{3}$/, "Invalid code"),
  myOwnCar: z.literal(false),
  carType: z.string().default("Car type not selected"),
});

const CarTypeSchema = z.object({
  fullName: z
    .string()
    .min(10, "Invalid name")
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, "Invalid name"),
  email: z.string().min(1, "Invalid email").email("Invalid email"),
  country: z.string().min(1, "Invalid country"),
  city: z.string().min(1, "Invalid city"),
  code: z.string().regex(/^[A-Z]{3}-\d{3}$/, "Invalid code"),
  myOwnCar: z.literal(true),
  carType: z.string().min(1, "Invalid car type"),
});

export const FormSchema = z.discriminatedUnion("myOwnCar", [
  schema,
  CarTypeSchema,
]);
