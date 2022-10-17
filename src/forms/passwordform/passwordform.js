import React from "react";
import { Button, FormError, FormGroup, Input, Label, Stack } from "sharply-kit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from "schemas";

export const PasswordForm = ({
  buttonText,
  extras,
  isLoading,
  onSubmit,
  schema,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema || passwordSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
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
        <Label htmlFor="confirmPassword">Re-enter Password</Label>
        <Input
          id="confirmPassword"
          placeholder="Type your password"
          type="password"
          name="confirmPassword"
          ref={register}
        />
        <FormError error={errors?.confirmPassword?.message} />
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

PasswordForm.defaultProps = {
  buttonText: "Reset Password",
  extras: null,
  isLoading: false,
  onSubmit: () => {},
  schema: null,
};
