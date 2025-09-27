import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    ID: 1,
    Name: 'Medication Refill Report',
    'From Date': '2025-09-01',
    'To Date': '2025-09-24',
    'Provider Name': 'صيدلية نهال الليثى',
  },
  {
    ID: 2,
    Name: 'Chronic Medication Summary',
    'From Date': '2025-08-01',
    'To Date': '2025-08-31',
    'Provider Name': 'صيدلية د/خديجة الحديثة',
  },
  {
    ID: 3,
    Name: 'Pharmacy Visits Log',
    'From Date': '2025-07-01',
    'To Date': '2025-07-31',
    'Provider Name': 'صيدلية روكسى',
  },
];

const providersPricelistsSlice = createSlice({
  name: 'providersPricelists',
  initialState,
  reducers: {
    changeProvidersPricelistData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeProvidersPricelistData } =
  providersPricelistsSlice.actions;
export default providersPricelistsSlice.reducer;
