import * as yup from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

yup.addMethod(yup.string, 'phone', function () {
  return this.test(
    'phone',
    'Phone number is not a valid Nigerian number',
    value => {
      if (value) return parsePhoneNumberFromString(value, 'NG')?.isValid();
      return false;
    },
  );
});
