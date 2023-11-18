import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  userData: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: {},
      };
    default:
      return state;
  }
};

export default authReducer;
