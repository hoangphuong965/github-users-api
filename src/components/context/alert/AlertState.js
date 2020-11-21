import React, { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from "../type";

const AlertState = (props) => {

    const initialState = {
        alert: null
    };

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg }
        });
        setTimeout(() => {
            dispatch({type: REMOVE_ALERT})
        }, 3000);
    };

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>    
    );
};

export default AlertState;
