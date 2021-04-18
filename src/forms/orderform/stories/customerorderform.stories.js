import React from "react";
import { CustomerOrderForm } from "../customerorderform";

export default {
  title: "Forms/Order/CustomerOrder",
  component: CustomerOrderForm,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const CustomerOrder = (args) => <CustomerOrderForm {...args} />;
