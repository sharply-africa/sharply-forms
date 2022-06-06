import React, { useCallback } from "react";
import {
  Button,
  Card,
  Checkbox,
  Flex,
  FormError,
  FormGroup,
  Input,
  Label,
  Radio,
  Select,
  Stack,
  Switch,
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryFee, PricePicker } from "components";
import { CUSTOMER_TYPES } from "data";
import { customerOrderSchema } from "schemas";

const cardStyles = {
  boxShadow: "none",
  flexShrink: 0,
  mb: 4,
  mr: 4,
};

export const AdminCustomerOrderForm = ({
  buttonText,
  isLoading,
  onSubmit,
  pricelists,
  riders,
  schema,
}) => {
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(schema || customerOrderSchema(true)),
    defaultValues: {
      allowDescription: false,
      chargeRecipient: false,
      requestedBy: "sender",
      items: "",
      payOnDelivery: true,
      rider: "",
    },
  });

  const getPrice = useCallback(
    (id) => pricelists.find((x) => x._id === id),
    [pricelists]
  );

  const showDescription = watch("allowDescription");
  const payOnDelivery = watch("payOnDelivery");
  const priceID = watch("deliveryArea");
  const requestedBy = watch("requestedBy");
  const selectedPrice = getPrice(priceID);

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="requestedBy">Customer is the the?</Label>

        <Controller
          control={control}
          name="requestedBy"
          render={({ onChange, value }) => (
            <Flex flexDirection="row" flexWrap="wrap" mb={-4}>
              <Card
                onClick={() => onChange(CUSTOMER_TYPES.$SENDER)}
                sx={cardStyles}
              >
                <Radio
                  active={value === CUSTOMER_TYPES.$SENDER}
                  title="Sender"
                />
              </Card>

              <Card
                onClick={() => onChange(CUSTOMER_TYPES.$RECIPIENT)}
                sx={cardStyles}
              >
                <Radio
                  active={value === CUSTOMER_TYPES.$RECIPIENT}
                  title="Receiver"
                />
              </Card>
            </Flex>
          )}
        />

        <FormError error={errors?.requestedBy?.message} />
      </FormGroup>

      <Controller
        control={control}
        name="deliveryArea"
        render={({ onChange, value }) => (
          <PricePicker
            error={errors?.deliveryArea?.message}
            onChange={onChange}
            getPrice={getPrice}
            pricelists={pricelists}
            value={value}
          />
        )}
      />

      {requestedBy === CUSTOMER_TYPES.$RECIPIENT && (
        <>
          <FormGroup>
            <Label htmlFor="sender.name">Sender Name</Label>
            <Input
              key="sender.name"
              id="sender.name"
              name="sender.name"
              placeholder="Type Name"
              ref={register}
            />
            <FormError error={errors?.sender?.name?.message} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="sender.phoneNumber">Sender Number</Label>
            <Controller
              key="control.sender.phoneNumber"
              control={control}
              name="sender.phoneNumber"
              render={({ onChange, value, ...inputProps }) => (
                <Input
                  id="sender.phoneNumber"
                  type="phone"
                  onChange={(...args) => onChange(args)}
                  {...(value ? { value: value[0] } : {})}
                  {...inputProps}
                />
              )}
            />
            <FormError error={errors?.sender?.phoneNumber?.message} />
          </FormGroup>
        </>
      )}

      <FormGroup>
        <Label htmlFor="sender.address">Pick Up Address</Label>
        <Controller
          control={control}
          name="sender.address"
          render={(field) => {
            return (
              <Input
                id="sender.address"
                type="address"
                name="sender.address"
                placeholder="Type Address"
                {...field}
              />
            );
          }}
        />
        <FormError error={errors?.sender?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="recipient.address">Receiver Address</Label>
        <Controller
          control={control}
          name="recipient.address"
          render={(field) => {
            return (
              <Input
                id="recipient.address"
                type="address"
                name="recipient.address"
                placeholder="Type Address"
                {...field}
              />
            );
          }}
        />
        <FormError error={errors?.recipient?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="items">Item(s)</Label>
        <Input
          key="items"
          id="items"
          name="items"
          placeholder="Separate with commas"
          ref={register}
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

      {requestedBy === CUSTOMER_TYPES.$SENDER && (
        <>
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
              render={({ onChange, value, ...inputProps }) => (
                <Input
                  id="recipient.phoneNumber"
                  type="phone"
                  onChange={(...args) => onChange(args)}
                  {...(value ? { value: value[0] } : {})}
                  {...inputProps}
                />
              )}
            />
            <FormError error={errors?.recipient?.phoneNumber?.message} />
          </FormGroup>
        </>
      )}

      <FormGroup>
        <Controller
          control={control}
          name="payOnDelivery"
          render={({ onChange, value }) => (
            <Switch
              active={!value}
              onChange={(v) => onChange(!v)}
              title="Delivery fee paid"
            />
          )}
        />
      </FormGroup>

      {payOnDelivery && (
        <FormGroup>
          <Controller
            control={control}
            name="chargeRecipient"
            render={({ onChange, value }) => (
              <Switch
                active={value}
                onChange={onChange}
                title="The Receiver will be paying cash on delivery"
              />
            )}
          />
        </FormGroup>
      )}

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

      <DeliveryFee amount={selectedPrice?.amount} />

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

AdminCustomerOrderForm.defaultProps = {
  buttonText: "Submit Request",
  isLoading: false,
  onSubmit: () => {},
  pricelists: [],
  riders: [],
  schema: null,
};
