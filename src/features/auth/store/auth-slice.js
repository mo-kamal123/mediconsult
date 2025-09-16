import { createSlice } from '@reduxjs/toolkit';
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../../shared/utils/localStorage-actions';

const isAuthenticated = getFromLocalStorage('isLogged');
const initialState = {
  isAuthenticated: isAuthenticated,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      addToLocalStorage('isLogged', true);
      state.isAuthenticated = true;
    },
    logout(state) {
      removeFromLocalStorage('isLogged');
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
