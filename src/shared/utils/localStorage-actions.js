// Add item to localStorage (stringifies value)
export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Remove item from localStorage by key
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// Get item from localStorage and parse JSON (returns null if not found)
export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item);
  } catch (err) {
    return item;
  }
};
