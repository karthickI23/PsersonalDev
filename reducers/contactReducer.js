const contactReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        return [...state, ...action.payload];
      case "UPDATE_CONTACT":
        return state.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      case "ADD_NEW_CONTACT":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default contactReducer;
  