import React from "react";
import { AdminOrderForm } from "../adminorderform";

export default {
  title: "Forms/Order/AdminOrder",
  component: AdminOrderForm,
  argTypes: {
    onSubmit: { action: "onSubmit", control: null, defaultValue: null },
  },
};

export const AdminOrder = (args) => <AdminOrderForm {...args} />;
