import { createSlice } from "@reduxjs/toolkit";

// Sample data rows
const initialState =  [
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2172,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2173,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2174,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2175,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
];

const membersSlice = createSlice({
    name : 'members',
    initialState,
    reducers : {
        changeMembersData:(state,action)=>{
            state = action.payload;
        }
    }
})


export const { changeMembersData } = membersSlice.actions;
export default membersSlice.reducer;