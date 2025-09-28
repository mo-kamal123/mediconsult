import { createSlice } from "@reduxjs/toolkit";


const initialState = Array(12).fill({
    'Approval No.': 'APR-2025-10982',
    'Member ID': 478592,
    'Member Name': 'Johnathan Elias Haddad',
    'Approval Date': '18 Sep 2025',
    'Portal Date': '17 Sep 2025',
    'Account': 'General Health Plan - GHP-0098',
    'Provider': 'Al Noor Medical Center',
    'Total': 1240.50,
    'Status': 'Approved',
    'Debit': 100.00,
    'Member Old ID': 328761,
    'Delivery': 'Courier',
    'User Name': 'admin_user02',
  })

const monthlyChronicSlice = createSlice({
    name: "monthlyChronic",
    initialState,
    reducers: {
        setMonthlyChronicData: (state, action) => {
            state.monthlyChronicData = action.payload;
        },
    },  
})

export const { setMonthlyChronicData } = monthlyChronicSlice.actions;
export default monthlyChronicSlice.reducer;