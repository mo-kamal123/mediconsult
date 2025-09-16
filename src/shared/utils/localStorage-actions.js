export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};
