import React from "react";
import { Button, FormError, FormGroup, Input, Label, Stack } from "skylos-ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmPasswordSchema } from "schemas";

export const ChangePasswordForm = ({
  buttonText,
  extras,
  isLoading,
  onSubmit,
  schema,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema || confirmPasswordSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="currentPassword">Current Password</Label>
        <Input
          id="currentPassword"
          placeholder="Type your password"
          type="password"
          name="currentPassword"
          ref={register}
        />
        <FormError error={errors?.currentPassword?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          placeholder="Type your password"
          type="password"
          name="newPassword"
          ref={register}
        />
        <FormError error={errors?.newPassword?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="confirmPassword">Re-enter New Password</Label>
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

ChangePasswordForm.defaultProps = {
  buttonText: "Update Password",
  extras: null,
  isLoading: false,
  onSubmit: () => {},
  schema: null,
};
