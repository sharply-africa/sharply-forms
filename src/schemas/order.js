import * as yup from "yup";
import "lib/yup-phone";
import { CUSTOMER_TYPES } from "data";

const checkIfRequiredTest = (value, context) => {
  const { customer } = context.from[1].value;
  return (
    [CUSTOMER_TYPES.$RECIPIENT, CUSTOMER_TYPES.$3RD_PARTY].includes(customer) &&
    value
  );
};

export const orderSchema = ({ isAdmin, requiredSender }) =>
  yup.object().shape({
    allowDescription: yup.boolean(),
    chargeRecipient: yup.boolean(),
    payOnDelivery: yup.boolean(),
    customer: yup.string(),
    deliveryArea: yup.string().required("Delivery area is required"),
    description: yup.string(),
    items: yup
      .array()
      .min(1, "Please enter at least one item")
      .required("Item(s) are required"),
    recipient: yup.object().shape({
      address: yup.string().required("Address is required"),
      email: yup.string().email("Email is invalid"),
      name: yup.string().required("Name is required"),
      phoneNumber: yup.string().phone().required("Phone number is required"),
    }),
    sender: yup.object().shape({
      address: yup.string().required("Address is required"),
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
            name: yup
              .mixed()
              .test("testname", "Name is required", checkIfRequiredTest),

            phoneNumber: yup
              .mixed()
              .phone()
              .test(
                "testname",
                "Phone number is required",
                checkIfRequiredTest
              ),
            email: yup.string().email("Email is invalid"),
          }),
    }),
    ...(isAdmin
      ? {
          rider: yup.string().required("Please select rider"),
        }
      : {}),
  });
