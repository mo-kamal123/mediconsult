import { createSlice } from '@reduxjs/toolkit';
// Sample data rows
const initialState = {
  ArabicName: '',
  EnglishName: '',
  ShortName: '',
  CategoryId: '',
  // "CategoryName": "",
  TypeId: '',
  // "TypeName": "",
  StatusId: '',
  // "StatusName": "",
  RefundDueDays: null,
  // "PolicyId": "",
  // "PolicyStart": "",
  // "PolicyExpire": "",
  ImageUrl: null,

  Contacts: [
    // {
    //   "Name": "",
    //   "JobTitle": "",
    //   "Email": "",
    //   "Mobile": "",
    //   "Address": "",
    //   "Note": ""
    // }
  ],

  Branches: [
    // {
    //   "BranchName": "",
    //   "BranchStatusId": "",
    //   "BranchStatusName": "",
    //   "MemberCount": ""
    // }
  ],

  Contracts: [
    // {
    //   "StartDate": "",
    //   "ExpireDate": "",
    //   "TotalAmount": "",
    //   "TotalMembers": "",
    //   "InsuranceCompanyId": ""
    // }
  ],

  Members: [
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
  ],
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
      const { id, data } = action.payload;
      const index = state.Contacts.findIndex((contact) => contact.Id === id);
      if (index !== -1) {
        state.Contacts[index] = { ...state.Contacts[index], ...data };
      }
    },
    removeContact(state, action) {
      const id = action.payload;
      state.Contacts = state.Contacts.filter((contact) => contact.Id !== id);
    },

    // --------------------------
    // BRANCHES
    // --------------------------
    addBranch(state, action) {
      state.Branches.push(action.payload);
    },
    updateBranch(state, action) {
      const { id, data } = action.payload;
      const index = state.Branches.findIndex((branch) => branch.Id === id);
      if (index !== -1) {
        state.Branches[index] = { ...state.Branches[index], ...data };
      }
    },
    removeBranch(state, action) {
      const id = action.payload;
      state.Branches = state.Branches.filter((branch) => branch.Id !== id);
    },

    // --------------------------
    // CONTRACTS
    // --------------------------
    addContract(state, action) {
      state.Contracts.push(action.payload);
    },
    updateContract(state, action) {
      const { id, data } = action.payload;
      const index = state.Contracts.findIndex((contract) => contract.Id === id);
      if (index !== -1) {
        state.Contracts[index] = { ...state.Contracts[index], ...data };
      }
    },
    removeContract(state, action) {
      const id = action.payload;
      state.Contracts = state.Contracts.filter(
        (contract) => contract.Id !== id
      );
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
    clearContacts: (state) => {
      state.Contacts = [];
    },
    resetClientData(state) {
      return initialState;
    },
  },
});

export const {
  addClientInfo,
  updateClientInfo,
  addContact,
  updateContact,
  removeContact,
  addBranch,
  updateBranch,
  removeBranch,
  addContract,
  updateContract,
  removeContract,
  addMember,
  updateMember,
  clearContacts,
  resetClientData,
} = clientDataSlice.actions;

export default clientDataSlice.reducer;
