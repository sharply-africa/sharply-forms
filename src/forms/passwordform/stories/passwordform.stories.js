import React from "react";
import { PasswordForm } from "../passwordform";

export default {
  title: "Forms/Password",
  component: PasswordForm,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const Password = (args) => <PasswordForm {...args} />;
