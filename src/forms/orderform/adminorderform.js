import React, { useCallback } from "react";
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
import { DeliveryFee, PricePicker } from "components";
import { orderSchema } from "schemas";

export const AdminOrderForm = ({
  buttonText,
  isLoading,
  onSubmit,
  pricelists,
  riders,
  schema,
}) => {
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(
      schema || orderSchema({ isAdmin: true, requiredSender: true })
    ),
    defaultValues: {
      allowDescription: false,
      chargeRecipient: false,
      customer: "sender",
      items: [],
      payOnDelivery: false,
      rider: "",
    },
  });

  const getPrice = useCallback((id) => pricelists.find((x) => x._id === id), [
    pricelists,
  ]);

  const showDescription = watch("allowDescription");
  const priceID = watch("deliveryArea");
  const selectedPrice = getPrice(priceID);

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
          placeholder="Type Email Address"
          ref={register}
        />
        <FormError error={errors?.sender?.email?.message} />
      </FormGroup>

      <Controller
        control={control}
        name="deliveryArea"
        render={({ onChange, value }) => (
          <PricePicker
            error={errors?.deliveryArea?.message}
            getPrice={getPrice}
            onChange={onChange}
            pricelists={pricelists}
            value={value}
          />
        )}
      />

      <FormGroup>
        <Label htmlFor="sender.address">Pick Up Address</Label>
        <Input
          id="sender.address"
          type="address"
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
          type="address"
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

      <DeliveryFee amount={selectedPrice?.amount} />

      <FormGroup>
        <Controller
          control={control}
          name="payOnDelivery"
          render={({ onChange, value }) => (
            <Switch
              active={value}
              onChange={onChange}
              title="The item will be paid for on delivery"
            />
          )}
        />
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
          placeholder="Select option"
          ref={register}
        >
          <option value="" disabled>
            Select Option
          </option>

          {riders?.map((rider) => (
            <option key={rider.id} value={rider.id}>
              {rider.name}
            </option>
          ))}
        </Select>
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
                active={value === "recipient"}
                onClick={() => onChange("recipient")}
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
  isLoading: false,
  onSubmit: () => {},
  pricelists: [],
  riders: [],
  schema: null,
};
