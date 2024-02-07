import { object, string } from "yup";

export const todoSchema = object({
  title: string().required(),
});
