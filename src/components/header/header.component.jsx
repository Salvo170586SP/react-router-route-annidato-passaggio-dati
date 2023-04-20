import React from 'react';
import './header.styles.css';
import { Link } from'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articoli">Articoli</Link></li>
                <li><Link to="/carrello">Carrello</Link></li>
            </ul>
        </div>
    );
};

export default Header;