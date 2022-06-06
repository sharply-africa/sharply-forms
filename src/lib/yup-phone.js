import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

yup.addMethod(yup.string, "phone", function () {
  return this.test(
    "phone",
    "Phone number is not a valid number",
    (value, { parent }) => {
      if (value) {
        const cc = parent?.country
          ? JSON.parse(parent.country).countryCode.toUpperCase()
          : "NG";
        const phoneNumber = parsePhoneNumberFromString(value, cc);
        return phoneNumber?.isValid();
      }
      return true;
    }
  );
});

yup.addMethod(yup.array, "phone", function () {
  return this.test("phone", "Phone number is not a valid number", (value) => {
    if (value) {
      const number = value[0];
      if (number) {
        const cc = value[1]?.countryCode?.toUpperCase() || "NG";
        const phoneNumber = parsePhoneNumberFromString(number, cc);
        return phoneNumber?.isValid();
      }
      return true;
    }
    return true;
  });
});
