import React, { useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';


const Users = () => {
    const githubContext = useContext(GithubContext);

    if (githubContext.loading) {
        return <Spinner />
    } else {
        return (
            <div className="ui three column grid">
                {githubContext.users.map(user => {
                    return (
                        <UserItem key={user.id} user={user} />
                    );
                })}
            </div>
        );
    }
};

export default Users;
