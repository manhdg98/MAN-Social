import { actionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  type: null,
  email: null,
  info: {
    email: null,
    id: null,
    username: null
  }
};

function reducer(state, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.TO_LOGIN:
      return {
        ...state,
        type: action.type
      };
    case actionTypes.TO_REGISTER:
      return {
        ...state,
        type: action.type
      };
    case actionTypes.TO_VERIFY:
      return {
        ...state,
        type: action.type, 
        email: action.payload
      };
    case actionTypes.GET_INFO:
      return {
        info: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
