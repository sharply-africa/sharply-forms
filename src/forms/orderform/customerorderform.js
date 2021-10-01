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
  Stack,
  Switch,
  TagsInput,
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryFee, PricePicker } from "components";
import { CUSTOMER_TYPES } from "data";
import { orderSchema } from "schemas";

const cardStyles = {
  boxShadow: "none",
  flexShrink: 0,
  mb: 4,
  mr: 4,
};

export const CustomerOrderForm = ({
  buttonText,
  isLoading,
  onSubmit,
  pricelists,
  schema,
}) => {
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(
      schema || orderSchema({ isAdmin: false, requiredSender: false })
    ),
    defaultValues: {
      allowDescription: false,
      chargeRecipient: false,
      customer: "sender",
      items: [],
      rider: "",
    },
  });

  const getPrice = useCallback((id) => pricelists.find((x) => x._id === id), [
    pricelists,
  ]);

  const showDescription = watch("allowDescription");
  const priceID = watch("deliveryArea");
  const customerType = watch("customer");
  const selectedPrice = getPrice(priceID);

  const senderFields = () => {
    return (
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
            render={(props) => (
              <Input
                key="sender.phoneNumber"
                id="sender.phoneNumber"
                onlyCountries={["ng"]}
                type="phone"
                {...props}
              />
            )}
          />
          <FormError error={errors?.sender?.phoneNumber?.message} />
        </FormGroup>
      </>
    );
  };

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="customer">You are the?</Label>

        <Controller
          control={control}
          name="customer"
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

              <Card
                onClick={() => onChange(CUSTOMER_TYPES.$3RD_PARTY)}
                sx={cardStyles}
              >
                <Radio
                  active={value === CUSTOMER_TYPES.$3RD_PARTY}
                  title="3rd Party"
                />
              </Card>
            </Flex>
          )}
        />

        <FormError error={errors?.customer?.message} />
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

      {customerType === CUSTOMER_TYPES.$3RD_PARTY ? senderFields() : null}

      <FormGroup>
        <Label htmlFor="sender.address">Pick Up Address</Label>
        <Input
          id="sender.address"
          name="sender.address"
          placeholder="Type Address"
          type="address"
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
          type="address"
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

      {customerType === CUSTOMER_TYPES.$RECIPIENT ? (
        senderFields()
      ) : (
        <>
          <FormGroup>
            <Label htmlFor="recipient.name">Receiver Name</Label>
            <Input
              key="recipient.name"
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
              key="control.recipient.phoneNumber"
              name="recipient.phoneNumber"
              render={(props) => (
                <Input
                  key="recipient.phoneNumber"
                  id="recipient.phoneNumber"
                  onlyCountries={["ng"]}
                  type="phone"
                  {...props}
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
          name="chargeRecipient"
          render={({ onChange, value }) => (
            <Switch
              active={value}
              onChange={onChange}
              title={"Payment on delivery"}
            />
          )}
        />
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

CustomerOrderForm.defaultProps = {
  buttonText: "Submit Request",
  isLoading: false,
  onSubmit: () => {},
  pricelists: [],

  schema: null,
};
