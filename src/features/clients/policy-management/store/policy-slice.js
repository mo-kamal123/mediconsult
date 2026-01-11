import { createSlice } from '@reduxjs/toolkit';

const policySlice = createSlice({
  name: 'policy',
  initialState: [],
  reducers: {
    changepolicyData: (state, action) => {
      return action.payload;
    },
  },
});

export const { changepolicyData } = policySlice.actions;
export default policySlice.reducer;
