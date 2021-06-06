import { profileTypes } from "./profileAction";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    imgAvatar: null,
    imgBackground: null,
    info: {
        _id: null,
        email: null,
        username: null
    }
};

function profileReducer(state, action) {
    switch (action.type) {
        case HYDRATE: {
            return { 
                ...state, 
                ...action.payload 
            };
        } 
        case profileTypes.SHOW_IMG:
            return {
                ...state, 
                ...initialState, 
                imgAvatar: action.avatar,
                imgBackground: action.background
            };
        case profileTypes.SHOW_INFO:
            console.log(action.payload)
            return {
                ...state,
                ...initialState, 
                info: action.payload
            };
        default:
            return { ...initialState };
    }
}

export default profileReducer;
