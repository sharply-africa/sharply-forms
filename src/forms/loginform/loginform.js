import React from "react";
import {
  Button,
  Checkbox,
  FormError,
  FormGroup,
  Input,
  Label,
  Stack,
} from "sharply-kit";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "schemas";

export const LoginForm = ({
  buttonText,
  extras,
  isLoading,
  onSubmit,
  schema,
}) => {
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema || loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="username">Email Address or Phone Number</Label>
        <Input
          id="username"
          name="username"
          placeholder="Type your email address or Phone Number"
          ref={register}
        />
        <FormError error={errors?.username?.message} />
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
          render={({ onChange, value }) => (
            <Checkbox
              active={value}
              onChange={onChange}
              title="Keep me logged in"
            />
          )}
        />
      </FormGroup>

      <Button
        defaultRightIcon
        isLoading={isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        {buttonText}
      </Button>

      {extras}
    </Stack>
  );
};

LoginForm.defaultProps = {
  buttonText: "Login",
  extras: null,
  isLoading: false,
  onSubmit: () => {},
  schema: null,
};
