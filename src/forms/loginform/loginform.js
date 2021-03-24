import React from "react";
import {
  Button,
  Checkbox,
  FormError,
  FormGroup,
  Input,
  Label,
  Stack,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "schemas";

export const LoginForm = ({ buttonText, extras, onSubmit, schema }) => {
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema || loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="email">Email Address or Phone Number</Label>
        <Input
          id="email"
          name="email"
          placeholder="Type your email address or Phone Number"
          ref={register}
        />
        <FormError error={errors?.email?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="Type your password"
          type="password"
          name="password"
          ref={register}
        />
        <FormError error={errors?.password?.message} />
      </FormGroup>

      <FormGroup>
        <Controller
          control={control}
          name="rememberMe"
          render={({ onChange, onBlur, value }) => (
            <Checkbox
              active={value}
              onChange={onChange}
              title="Keep me logged in"
            />
          )}
        />
      </FormGroup>

      <Button onClick={handleSubmit(onSubmit)} defaultRightIcon>
        {buttonText}
      </Button>

      {extras}
    </Stack>
  );
};

LoginForm.defaultProps = {
  buttonText: "Login",
  extras: null,
  onSubmit: () => {},
  schema: null,
};
