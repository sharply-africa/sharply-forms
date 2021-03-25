import * as yup from "yup";

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password must match"
    ),
});
