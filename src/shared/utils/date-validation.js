// Validates that date is not in the future - returns true if valid or empty
export const isNotFutureDate = (value) => {
  if (!value) return true;
  const inputDate = new Date(value);
  const today = new Date();

  // Reset time to compare dates only
  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  return inputDate <= today;
};
