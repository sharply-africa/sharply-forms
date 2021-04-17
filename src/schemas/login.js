import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Email address or phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: yup.boolean().required(),
});
