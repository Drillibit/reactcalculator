import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
        </nav>
    );
};

export default Menu;