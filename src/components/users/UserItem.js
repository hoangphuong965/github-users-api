import React from 'react';
import { NavLink } from 'react-router-dom';

const UserItem = ({ user }) => {
    const { login, avatar_url } = user;
    return (
        <div className="column">
            <div className="ui segment">
                <img src={avatar_url} alt="pic..." style={{ width: "100px" }} />
                <h3>{login}</h3>
                <NavLink to={`/user/${login}`}>Details</NavLink>
            </div>

        </div>
    );
};

export default UserItem;
