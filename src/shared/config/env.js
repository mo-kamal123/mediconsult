export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  API_LIMIT: Number(import.meta.env.VITE_API_LIMIT) || 10,
};
