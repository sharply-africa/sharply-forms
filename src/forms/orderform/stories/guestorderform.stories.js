import React from "react";
import { GuestOrderForm } from "../guestorderform";

export default {
  title: "Forms/Order/GuestOrder",
  component: GuestOrderForm,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const GuestOrder = (args) => <GuestOrderForm {...args} />;
