// reducers.js
import { combineReducers } from 'redux';
// import userReducer from './reducers/userReducer';


// Initial state for user
const initialUserState = {
  name: '', // You can set a default value or fetch the name from a server if the user is logged in
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
