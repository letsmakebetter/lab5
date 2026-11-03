import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string(),
  done: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;
