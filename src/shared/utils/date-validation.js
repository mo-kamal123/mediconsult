export const isNotFutureDate = (value) => {
  if (!value) return true;
  const inputDate = new Date(value);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  return inputDate <= today;
};
