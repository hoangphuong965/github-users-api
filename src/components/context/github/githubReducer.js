import { SEARCH_USERS, GET_USERS, CLEAR_USERS, SET_LOADING } from "../type";

const githubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USERS:
            return {
                ...state,
                user: action.payload
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
export default githubReducer;