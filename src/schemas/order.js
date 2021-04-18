import * as yup from "yup";

export const orderSchema = ({ isAdmin, requiredSender }) =>
  yup.object().shape({
    allowDescription: yup.boolean(),
    chargeRecipient: yup.boolean(),
    customer: yup.string(),
    description: yup.string(),
    items: yup
      .array()
      .min(1, "Please enter at least one item")
      .required("Item(s) are required"),
    recipient: yup.object().shape({
      address: yup.string().required("Address is required"),
      email: yup.string().email("Email is invalid"),
      name: yup.string().required("Name is required"),
      phoneNumber: yup.string().required("Phone number is required"),
    }),
    sender: yup.object().shape({
      address: yup.string().required("Address is required"),
      email: yup.string().email("Email is invalid"),
      ...(requiredSender
        ? {
            name: yup.string().required("Name is required"),
            phoneNumber: yup.string().required("Phone number is required"),
          }
        : {
            name: yup.string(),
            phoneNumber: yup.string(),
          }),
    }),
    ...(isAdmin
      ? {
          deliveryFee: yup.string().required("Delivery amount is required"),
          rider: yup.string().required("Please select rider"),
        }
      : {}),
  });
