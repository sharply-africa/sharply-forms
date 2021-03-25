import React from "react";
import { LoginForm } from "../loginform";

export default {
  title: "Forms/Login",
  component: LoginForm,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const Login = (args) => <LoginForm {...args} />;
