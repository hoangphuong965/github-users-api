import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';


const Alert = () => {
    const alertContext = useContext(AlertContext);
    return (
        alertContext.alert !== null && (
            <div>
                <p>{alertContext.alert.msg}</p>
            </div>)
    );
};

export default Alert;
