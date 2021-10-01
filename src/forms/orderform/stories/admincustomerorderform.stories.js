import React from "react";
import { AdminCustomerOrderForm } from "../admincustomerorderform";

export default {
  title: "Forms/Order/AdminCustomerOrder",
  component: AdminCustomerOrderForm,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const CustomerOrder = (args) => <AdminCustomerOrderForm {...args} />;
