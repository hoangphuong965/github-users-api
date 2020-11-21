import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GithubContext from '../context/github/githubContext';
const User = ({ match }) => {

    const githubContext = useContext(GithubContext);
    githubContext.getUser(match.params.login);
    const {
        name,
        avatar_url,
        location,
        bio,
        html_url,
        company } = githubContext.user;

    return (
        <div className="ui segment">
            <NavLink to="/">Back To Search</NavLink><br /><br />
            <div className="ui two column grid">
                <div className="column">
                    <img src={avatar_url} alt="" />
                </div>
                <div className="column">
                    <h1>{name}</h1>
                    <p><span className="ui label">Location:</span> {location}</p>
                    <p><span className="ui label">Bio:</span> {bio}</p>
                    <p><span className="ui label">Website:</span> {html_url}</p>
                    <p><span className="ui label">Company:</span> {company}</p>
                </div>
            </div>
        </div>
    );
};

export default User;
