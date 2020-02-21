import React from 'react';

import './nav.css';

const Nav = () => {
    return(
        <nav>
            <div className="nav-wrapper container">
                <i style={{marginRight:"10px"}} className = "fas fa-search fa-2x"></i>
                <a href="#" className="brand-logo">Movie Finder</a>
            </div>
        </nav>
    )
}

export default Nav;