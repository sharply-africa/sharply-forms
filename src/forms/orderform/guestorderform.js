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
  Stack,
  Switch,
  TagsInput,
  Text,
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "schemas";

export const GuestOrderForm = ({ buttonText, isLoading, onSubmit, schema }) => {
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(
      schema || orderSchema({ isAdmin: false, requiredSender: true })
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
        <Label htmlFor="customer">You are the?</Label>

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
                onClick={() => onChange("recipient")}
                sx={{ boxShadow: "none" }}
              >
                <Radio active={value === "recipient"} title="Receiver" />
              </Card>
            </Stack>
          )}
        />

        <FormError error={errors?.customer?.message} />
      </FormGroup>

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
        <Controller
          control={control}
          name="sender.phoneNumber"
          render={(props) => (
            <Input
              id="sender.phoneNumber"
              onlyCountries={["ng"]}
              type="phone"
              {...props}
            />
          )}
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
            <TagsInput value={value} onChange={onChange} />
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
        <Controller
          control={control}
          name="recipient.phoneNumber"
          render={(props) => (
            <Input
              id="recipient.phoneNumber"
              onlyCountries={["ng"]}
              type="phone"
              {...props}
            />
          )}
        />

        <FormError error={errors?.recipient?.phoneNumber?.message} />
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

      <Card>
        <Text>
          Request Submitted will have to be accepted and an estimate will be
          sent
        </Text>
      </Card>

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

GuestOrderForm.defaultProps = {
  buttonText: "Submit Request",
  extras: null,
  isLoading: false,
  onSubmit: () => {},
  type: "client",
  schema: null,
};
