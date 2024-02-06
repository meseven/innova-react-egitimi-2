import { object, string, ref } from "yup";

const messages = {
  required: "Bu alan zorunlu.",
  email: "Geçerli bir email adresi belirtin.",
  min: "En az 6 karakter belirtin",
  passwordMatch: "Parolalar eşleşmiyor.",
};

export const registerSchema = object({
  email: string().email(messages.email).required(messages.required),
  password: string().min(6, messages.min).required(messages.required),
  confirmPassword: string()
    .oneOf([ref("password")], messages.passwordMatch)
    .required(messages.required),
});
