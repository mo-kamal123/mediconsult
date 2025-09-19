// Utility functions for localStorage operations

// Add item to localStorage with key and value (value is stringified as JSON)
export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// Remove item from localStorage by key
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
// Get item from localStorage by key and parse it as JSON
export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};
