export const addContact = (contacts) => ({
    type: "ADD_CONTACT",
    payload: contacts,
  });
  
  export const updateContact = (contact) => ({
    type: "UPDATE_CONTACT",
    payload: contact,
  });
  
  export const addNewContact = (contact) => ({
    type: "ADD_NEW_CONTACT",
    payload: contact,
  });
  