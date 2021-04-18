import React from "react";
import {
  Button,
  Card,
  Checkbox,
  FormError,
  FormGroup,
  Input,
  Label,
  Radio,
  Select,
  Stack,
  Switch,
  TagsInput,
  Text,
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "schemas";

export const AdminOrderForm = ({
  buttonText,
  isLoading,
  onSubmit,
  schema,
  type,
}) => {
  const isAdmin = type === "admin";
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(
      schema || orderSchema({ isAdmin, requiredSender: true })
    ),
    defaultValues: {
      allowDescription: false,
      chargeRecipient: false,
      customer: "sender",
      items: [],
    },
  });

  const showDescription = watch("allowDescription");

  return null;
};

AdminOrderForm.defaultProps = {
  buttonText: "Submit Request",
  extras: null,
  isLoading: false,
  onSubmit: () => {},
  type: "client",
  schema: null,
};
