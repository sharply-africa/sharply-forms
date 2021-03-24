import React from "react";
import { LoginForm as LoginFormComponent } from "../loginform";

export default {
  title: "Components/Base/Button/LoginForm",
  component: LoginFormComponent,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const LoginForm = (args) => <LoginFormComponent {...args} />;
