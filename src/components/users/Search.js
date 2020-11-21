import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/alertContext';
import GithubContext from '../context/github/githubContext';

const Search = () => {
    const gitubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert("enter something")
        } else {
            gitubContext.searchUsers(text);
            setText('');
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="ui fluid action input">
                    <input
                        type="text"
                        placeholder="search..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div>
                        <input type="submit" value="Search" className="ui button" />
                    </div>
                </div>
            </form>
            <br />
            {gitubContext.users.length > 0 && <input
                type="submit"
                value="Clear"
                className="fluid ui button"
                onClick={gitubContext.clearUsers}
            />}
            <br />
        </div>
    );
};

export default Search;
