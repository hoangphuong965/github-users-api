import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <h2>Github Users</h2>
            <NavLink to="/">Home</NavLink>{' '}
            <NavLink to="/about">About</NavLink><br/><br/>
        </div>

    );
};

export default Navbar;
