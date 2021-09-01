export const formatAmount = (number, formatIfZero = true) => {
  if (number && (number !== undefined || number !== null)) {
    const parsedNumber = parseFloat(number);
    if (!formatIfZero && !parsedNumber) {
      return null;
    }
    const [whole] = parsedNumber.toFixed(2).toString().split(".");
    return `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  return number;
};
