import { createSlice } from '@reduxjs/toolkit';

// Sample data rows
const initialState = {
  ArabicName: 'شـركـة الـمـثـال',
  EnglishName: 'Example Company',
  ShortName: 'EXCO',
  CategoryId: 3,
  ClientStatusId: 1,
  ClientTypeId: 2,
  ReimbursementPerDays: 30,
  StartDate: '2025-01-01',
  EndDate: '2025-12-31',
  ImageFile: 'logo.png', // attached file reference

  ContactUs: [
    {
      Name: 'Ahmed Ali',
      JobTitle: 'HR Manager',
      Email: 'ahmed@example.com',
      Mobile: '01012345678',
      Address: 'Cairo HQ',
      Note: 'Primary contact',
    },
    {
      Name: 'Sarah Youssef',
      JobTitle: 'Finance Lead',
      Email: 'sarah@example.com',
      Mobile: '',
      Address: '',
      Note: '',
    },
  ],

  Branches: [
    {
      BranchName: 'Downtown Branch',
      BranchStatusId: 1,
    },
    {
      BranchName: 'Alexandria Branch',
      BranchStatusId: 2,
    },
  ],

  Contracts: [
    {
      StartDate: '2025-01-01',
      ExpireDate: '2025-12-31',
      TotalAmount: 1500000.0,
      TotalMembers: 1200,
      InsuranceCompanyId: 5,
    },
  ],

  Members: [
    {
      Name: 'Mohamed Ibrahim',
      Birthday: '1990-05-14',
      Age: 35,
      Branch: 'Downtown Branch',
      Program: 'Gold',
      Status: 'Active',
      Mobile: '01198765432',
      Consumptions: 3200.75,
    },
    {
      Name: 'Lina Samir',
      Birthday: '1995-09-02',
      Age: null, // Not provided; you can fill or calculate if needed
      Branch: 'Alexandria Branch',
      Program: '',
      Status: 'Active',
      Mobile: '',
      Consumptions: 0,
    },
  ],
};

const clientDataSlice = createSlice({
  name: 'clientData',
  initialState,
  reducers: {
    // Replace entire client data
    changeClientsData(state, action) {
      return action.payload;
    },

    // --------------------------
    // CONTACT US
    // --------------------------
    addContact(state, action) {
      state.ContactUs.push(action.payload);
    },
    updateContact(state, action) {
      const { index, data } = action.payload;
      if (state.ContactUs[index]) {
        state.ContactUs[index] = { ...state.ContactUs[index], ...data };
      }
    },

    // --------------------------
    // BRANCHES
    // --------------------------
    addBranch(state, action) {
      state.Branches.push(action.payload);
    },
    updateBranch(state, action) {
      const { index, data } = action.payload;
      if (state.Branches[index]) {
        state.Branches[index] = { ...state.Branches[index], ...data };
      }
    },

    // --------------------------
    // CONTRACTS
    // --------------------------
    addContract(state, action) {
      state.Contracts.push(action.payload);
    },
    updateContract(state, action) {
      const { index, data } = action.payload;
      if (state.Contracts[index]) {
        state.Contracts[index] = { ...state.Contracts[index], ...data };
      }
    },

    // --------------------------
    // MEMBERS
    // --------------------------
    addMember(state, action) {
      state.Members.push(action.payload);
    },
    updateMember(state, action) {
      const { index, data } = action.payload;
      if (state.Members[index]) {
        state.Members[index] = { ...state.Members[index], ...data };
      }
    },
  },
});

export const {
  changeClientsData,
  addContact,
  updateContact,
  addBranch,
  updateBranch,
  addContract,
  updateContract,
  addMember,
  updateMember,
} = clientDataSlice.actions;

export default clientDataSlice.reducer;
