import { createContext, useContext, useState } from 'react';

const NewClientContext = createContext();

export const useNewClient = () => {
  const context = useContext(NewClientContext);
  if (!context) {
    throw new Error('useNewClient must be used within NewClientProvider');
  }
  return context;
};

export const NewClientProvider = ({ children }) => {
  const [clientData, setClientData] = useState({
    clientInfo: null,
    contacts: [],
    branches: [],
    contracts: [],
    members: [],
  });

  const updateClientInfo = (data) => {
    setClientData((prev) => ({ ...prev, clientInfo: data }));
  };

  // Transform form data keys to match table header format (lowercase with spaces)
  const transformContactData = (contact) => ({
    'name': contact.name,
    'job title': contact.jobTitle,
    'email': contact.email,
    'mobile': contact.mobile,
    'address': contact.address || '-',
    'note': contact.note || '-',
  });

  const transformBranchData = (branch) => ({
    'branch name': branch.branchName,
    'branch status': branch.status,
    'members count': '-', // Will be calculated or set later
  });

  const transformContractData = (contract) => ({
    'start date': contract.startDate,
    'expire date': contract.expireDate,
    'total amount': contract.totalAmount,
    'total members': contract.totalMembers,
    'insurance company': contract.insuranceCompany,
  });

  const transformMemberData = (member) => ({
    'name': member.name,
    'oldid': member.oldID || '-',
    'birthday': member.birthday,
    'age': member.age,
    'client': member.client,
    'branch': member.branch,
    'program': member.program,
    'status': member.status,
    'mobile': member.mobile,
  });

  const addContact = (contact) => {
    setClientData((prev) => ({
      ...prev,
      contacts: [...prev.contacts, transformContactData(contact)],
    }));
  };

  const addBranch = (branch) => {
    setClientData((prev) => ({
      ...prev,
      branches: [...prev.branches, transformBranchData(branch)],
    }));
  };

  const addContract = (contract) => {
    setClientData((prev) => ({
      ...prev,
      contracts: [...prev.contracts, transformContractData(contract)],
    }));
  };

  const addMember = (member) => {
    setClientData((prev) => ({
      ...prev,
      members: [...prev.members, transformMemberData(member)],
    }));
  };

  const resetAllData = () => {
    setClientData({
      clientInfo: null,
      contacts: [],
      branches: [],
      contracts: [],
      members: [],
    });
  };

  const logAllData = () => {
    console.log('📋 All Collected Client Data:', {
      clientInfo: clientData.clientInfo,
      contacts: clientData.contacts,
      branches: clientData.branches,
      contracts: clientData.contracts,
      members: clientData.members,
    });
    return clientData;
  };

  return (
    <NewClientContext.Provider
      value={{
        clientData,
        updateClientInfo,
        addContact,
        addBranch,
        addContract,
        addMember,
        resetAllData,
        logAllData,
      }}
    >
      {children}
    </NewClientContext.Provider>
  );
};

