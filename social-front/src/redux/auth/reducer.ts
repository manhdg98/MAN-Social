import { actionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  type: actionTypes.TO_LOGIN,
  email: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload
      };
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
    default:
      return initialState;
  }
}

export default reducer;
