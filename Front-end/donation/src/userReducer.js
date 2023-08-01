// src/reducers/userReducer.js
const initialState = {
    name: '', // You can add other user-related information here as needed
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_NAME':
        return {
          ...state,
          name: action.payload.name,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  