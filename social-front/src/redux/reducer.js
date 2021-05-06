import { actionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  email: ""
};

function reducer(state, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.REGISTER:
      console.log("state", action);
      return {
        ...state,
        ...action
      };

    default:
      return state;
  }
}

export default reducer;
