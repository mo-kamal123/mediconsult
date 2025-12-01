import { createSlice } from '@reduxjs/toolkit';
// Sample data rows
const initialState = {
  "ArabicName": "",
  "EnglishName": "",
  "ShortName": "",
  "CategoryId": "",
  "CategoryName": "",
  "TypeId": "",
  "TypeName": "",
  "StatusId": "",
  "StatusName": "",
  "RefundDueDays": "",
  "PolicyId": "",
  "PolicyStart": "",
  "PolicyExpire": "",
  "ImageUrl": null,

  "Contacts": [
    // {
    //   "Name": "",
    //   "JobTitle": "",
    //   "Email": "",
    //   "Mobile": "",
    //   "Address": "",
    //   "Note": ""
    // }
  ],

  "Branches": [
    // {
    //   "BranchName": "",
    //   "BranchStatusId": "",
    //   "BranchStatusName": "",
    //   "MemberCount": ""
    // }
  ],

  "Contracts": [
    // {
    //   "StartDate": "",
    //   "ExpireDate": "",
    //   "TotalAmount": "",
    //   "TotalMembers": "",
    //   "InsuranceCompanyId": ""
    // }
  ],

  "Members": [
    // {
    //   "Name": "",
    //   "Mobile": "",
    //   "IsMale": true,
    //   "JobTitle": "",
    //   "NationalId": "",
    //   "LevelId": 0,
    //   "VipStatusId": 0,
    //   "CompanyCode": "",
    //   "HofCode": "",
    //   "StatusId": 0,
    //   "Birthday": "",
    //   "ProgramName": "",
    //   "LevelName": "",
    //   "VipStatusName": "",
    //   "StatusName": ""
    // }
  ]
};

const clientDataSlice = createSlice({
  name: 'clientData',
  initialState,
  reducers: {
    // Add NEW client info
    addClientInfo(state, action) {
      return { ...state, ...action.payload };
    },

    // UPDATE existing client info
    updateClientInfo(state, action) {
      return { ...state, ...action.payload };
    },

    // --------------------------
    // CONTACT US
    // --------------------------
    addContact(state, action) {
      state.Contacts.push(action.payload);
    },
    updateContact(state, action) {
      const { index, data } = action.payload;
      if (state.Contacts[index]) {
        state.Contacts[index] = { ...state.Contacts[index], ...data };
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
  addClientInfo,
  updateClientInfo,
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
