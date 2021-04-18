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

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="customer">
          {isAdmin ? "Customer is the?" : "You are the?"}
        </Label>

        <Controller
          control={control}
          name="customer"
          render={({ onChange, value }) => (
            <Stack direction="row" spacing={4}>
              <Card
                onClick={() => onChange("sender")}
                sx={{ boxShadow: "none" }}
              >
                <Radio title="Sender" active={value === "sender"} />
              </Card>

              <Card
                onClick={() => onChange("receiver")}
                sx={{ boxShadow: "none" }}
              >
                <Radio active={value === "receiver"} title="Receiver" />
              </Card>
            </Stack>
          )}
        />

        <FormError error={errors?.customer?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="sender.address">Pick Up Address</Label>
        <Input
          id="sender.address"
          name="sender.address"
          placeholder="Type Address"
          ref={register}
        />
        <FormError error={errors?.sender?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="recipient.address">Receiver Address</Label>
        <Input
          id="recipient.address"
          name="recipient.address"
          placeholder="Type Address"
          ref={register}
        />
        <FormError error={errors?.recipient?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="items">Item(s)</Label>
        <Controller
          control={control}
          name="items"
          render={({ onChange, value }) => (
            <TagsInput
              inputProps={{
                placeholder: "Type and press enter",
              }}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <FormError error={errors?.items?.message} />
      </FormGroup>

      <FormGroup>
        <Controller
          control={control}
          name="allowDescription"
          render={({ onChange, value }) => (
            <Checkbox
              active={value}
              onChange={onChange}
              title="Allow Description"
            />
          )}
        />
      </FormGroup>

      {showDescription ? (
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Type Name"
            ref={register}
            required={true}
          />
          <FormError error={errors?.description?.message} />
        </FormGroup>
      ) : null}

      <FormGroup>
        <Label htmlFor="recipient.name">Receiver Name</Label>
        <Input
          id="recipient.name"
          name="recipient.name"
          placeholder="Type Name"
          ref={register}
        />
        <FormError error={errors?.recipient?.name?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="recipient.phoneNumber">Receiver Number</Label>
        <Input
          id="recipient.phoneNumber"
          name="recipient.phoneNumber"
          placeholder="+234"
          ref={register}
        />
        <FormError error={errors?.recipient?.phoneNumber?.message} />
      </FormGroup>

      {isAdmin ? (
        <FormGroup>
          <Label htmlFor="deliveryFee">Delivery Amount</Label>
          <Input
            id="deliveryFee"
            name="deliveryFee"
            placeholder="NGN"
            ref={register}
          />
          <FormError error={errors?.deliveryFee?.message} />
        </FormGroup>
      ) : null}
      <FormGroup>
        <Controller
          control={control}
          name="chargeRecipient"
          render={({ onChange, value }) => (
            <Switch
              active={value}
              onChange={onChange}
              title="The Receiver will be paying for delivery"
            />
          )}
        />
      </FormGroup>

      {isAdmin ? (
        <FormGroup>
          <Label htmlFor="rider">Assign Rider</Label>
          <Select
            id="rider"
            name="rider"
            placeholder="Type your email address or Phone Number"
            ref={register}
          />
          <FormError error={errors?.rider?.message} />
        </FormGroup>
      ) : (
        <Card>
          <Text>
            Request Submited will have to be accepted and an estimate will be
            sent
          </Text>
        </Card>
      )}

      <Button
        defaultRightIcon
        isLoading={isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

AdminOrderForm.defaultProps = {
  buttonText: "Submit Request",
  extras: null,
  isLoading: false,
  onSubmit: () => {},
  type: "client",
  schema: null,
};
