import { createSlice } from '@reduxjs/toolkit';
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../../shared/utils/localStorage-actions';

const isAuthenticated = getFromLocalStorage('isLogged'); // initial auth state from localStorage
const initialState = {
  isAuthenticated: isAuthenticated,
}; // initial state

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // action to log in the user
    login(state) {
      addToLocalStorage('isLogged', true); // persist auth state in localStorage
      state.isAuthenticated = true;
    },
    // action to log out the user
    logout(state) {
      removeFromLocalStorage('isLogged'); // remove auth state from localStorage
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
