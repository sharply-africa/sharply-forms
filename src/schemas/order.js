import * as yup from "yup";
import "lib/yup-phone";

export const orderSchema = ({ isAdmin, requiredSender }) =>
  yup.object().shape({
    allowDescription: yup.boolean(),
    chargeRecipient: yup.boolean(),
    payOnDelivery: yup.boolean(),
    requestedBy: yup.string(),
    deliveryArea: yup.string().required("Delivery area is required"),
    description: yup.string(),
    items: yup
      .array()
      .min(1, "Please enter at least one item")
      .required("Item(s) are required"),
    recipient: yup.object().shape({
      address: yup
        .object()
        .shape({})
        .typeError("Address is required")
        .required("Address is required"),
      email: yup.string().email("Email is invalid"),
      name: yup.string().required("Name is required"),
      phoneNumber: yup.string().phone().required("Phone number is required"),
    }),
    sender: yup.object().shape({
      address: yup
        .object()
        .shape({})
        .typeError("Address is required")
        .required("Address is required"),
      ...(requiredSender
        ? {
            name: yup.string().required("Name is required"),
            phoneNumber: yup
              .string()
              .phone()
              .required("Phone number is required"),
            email: yup
              .string()
              .email("Email is invalid")
              .required("Email is required"),
          }
        : {
            name: yup.string(),
            phoneNumber: yup.string().phone(),
            email: yup.string().email("Email is invalid"),
          }),
      ...(isAdmin
        ? {
            email: yup.string().email("Email is invalid"),
          }
        : {}),
    }),
    ...(isAdmin
      ? {
          rider: yup.string().required("Please select rider"),
        }
      : {}),
  });
