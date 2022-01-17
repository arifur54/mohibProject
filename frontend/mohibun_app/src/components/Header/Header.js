import React from 'react'
import styled  from 'styled-components';

function Header() {
    return (
        <NavWrap>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Logo Goes here</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse "  id="navbarNav">
                    <ul className="navbar-nav mx-lg-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavWrap>
    )
}

export default Header

const NavWrap = styled.div`
    padding: 1em;
    margin: 0%;
    // Add opasity
    background-color: #F3F1F1;  
    font-family: 'Courier New', Courier, monospace;
    font-size: Larger;  
`