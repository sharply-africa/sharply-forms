import * as yup from "yup";

export const orderSchema = ({ isAdmin, requiredSender }) =>
  yup.object().shape({
    allowDescription: yup.boolean(),
    chargeRecipient: yup.boolean(),
    customer: yup.string(),
    description: yup.string(),
    items: yup
      .array()
      .min(1, "Please input an item")
      .required("Items are required"),
    recipient: yup.object().shape({
      address: yup.string().required("Address is required"),
      email: yup.string().email("Recipient email is invalid"),
      name: yup.string().required("Recipient name is required"),
      phoneNumber: yup.string().required("Phone number is required"),
    }),
    sender: yup.object().shape({
      address: yup.string().required("Address is required"),
      email: yup.string().email("Sender email is invalid"),

      ...(requiredSender
        ? {
            name: yup.string().required("Sender name is required"),
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
