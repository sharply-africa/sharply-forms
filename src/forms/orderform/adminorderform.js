import React from "react";
import {
  Button,
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
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "schemas";

export const AdminOrderForm = ({ buttonText, isLoading, onSubmit, schema }) => {
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(
      schema || orderSchema({ isAdmin: true, requiredSender: true })
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
        <Label htmlFor="sender.name">Senders Name</Label>
        <Input
          id="sender.name"
          name="sender.name"
          placeholder="Type name"
          ref={register}
        />
        <FormError error={errors?.sender?.name?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="sender.phoneNumber">Senders number</Label>
        <Input
          id="sender.phoneNumber"
          name="sender.phoneNumber"
          placeholder="+234"
          ref={register}
        />
        <FormError error={errors?.sender?.phoneNumber?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="sender.email">Senders Email</Label>
        <Input
          id="sender.email"
          name="sender.email"
          placeholder="Type Email Address (Optional)"
          ref={register}
        />
        <FormError error={errors?.sender?.email?.message} />
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

      <FormGroup>
        <Controller
          control={control}
          name="customer"
          render={({ onChange, value }) => (
            <Stack spacing={6}>
              <Radio
                active={value === "sender"}
                onClick={() => onChange("sender")}
                subtitle="Request was made by the sender"
                title="Save sender’s details"
              />

              <Radio
                active={value === "receiver"}
                onClick={() => onChange("receiver")}
                subtitle="Request was made by the receiver"
                title="Save receiver’s details"
              />
            </Stack>
          )}
        />

        <FormError error={errors?.customer?.message} />
      </FormGroup>

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
  schema: null,
};
