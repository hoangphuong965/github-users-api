import React, {useReducer } from 'react';
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, GET_USERS, CLEAR_USERS, SET_LOADING } from "../type";

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== "production"){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // SEARCH USER
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
        &client_secret=${githubClientSecret}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    // GET USER
    const getUser = async (username) => {
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}
         &client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    };

    // CLEAR USER
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // SET LOADING
    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                loading: state.loading,
                searchUsers,
                getUser,
                clearUsers,
                setLoading
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
