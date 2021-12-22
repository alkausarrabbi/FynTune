const initialState = [
  { id: 0, name: "Modern Store", area: "pune", category:"Grocery" , open: "2/10/21", close:"26/12/21"},
  { id: 1, name: "Shivnarine Store", area: "Thane", category:"Butcher" , open: "2/10/21", close:"26/12/21"},
  { id: 2, name: "Sharma Baker", area: "Mumbai Suburban", category:"Baker" , open: "2/10/21", close:"26/12/21"},
  { id: 3, name: "Sharma Medicine", area: "Nagpur", category:"Chemist" , open: "2/10/21", close:"26/12/21"},

];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      state = [...state, action.payload];
      return state;
    case "DELETE_SHOP":
      const contactFilter = state.filter((shop) =>
        shop.id === action.payload ? null : shop
      );
      state = contactFilter;
      return state;
    case "UPDATE_SHOP":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
