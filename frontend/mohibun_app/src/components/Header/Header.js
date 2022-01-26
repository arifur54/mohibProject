import React, {useState} from 'react'
import styled  from 'styled-components';
import Routes from '../../routes'
import {Link} from 'react-router-dom'

function Header() {
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    return (
        <div>
        <NavWrap>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className='navbar-brand'>Logo Goes here </Link>
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
                <div className="collapse navbar-collapse"  id="navbarNav">
                    <ul className="navbar-nav mx-lg-auto text-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home</Link>

                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/services" >Services</Link>
                        </li>

                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/projects" >Projects</Link> */}
                            <Link className="nav-link dropdown-toggle" onClick={toggleOpen} to="#" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" 
                            aria-expanded="false">Projects</Link>
                            <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/kitchen'>Kitchen</Link>
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/bathroom'>Bathroom</Link>
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/Basement'>Basement</Link>
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/whole_house'>Whole House</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus" >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
        </NavWrap>
        <div>
                <Routes />
        </div>

        </div>
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