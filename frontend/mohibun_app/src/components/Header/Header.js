import React, { useState } from 'react'
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarToggler,
//     MDBCollapse,
// } from 'mdb-react-ui-kit';

import styled from 'styled-components';
import Routes from '../../routes'
import { Link } from 'react-router-dom'

function Header() {
    // const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);
    const [dropdown2, setDropdown2] = useState(false);
    const toggleOpen2 = () => setDropdown2(!dropdown2);
    // const [showNavSecond, setShowNavSecond] = useState(false);


    return (
        <div>
            <NavWrap>
                {/* <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd', padding: '1em' }}>
                    <MDBContainer>
                        <Link to="/" className='navbar-brand'>Logo</Link>
                        <MDBNavbarToggler
                            type='button'
                            data-bs-toggle="collapse"
                            data-target='#navbarNav'
                            aria-controls='navbarNav'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBCollapse navbar show={showNavColorSecond} id='navbarNav'>
                            <MDBNavbarNav className='justify-content-center mb-2 mb-lg-0'>
                                <MDBNavbarItem className='active'>
                                    <Link className='nav-link' to='/'>
                                        Home
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <div className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" onClick={toggleOpen2} to="#" id="navbarDropdown"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Services</Link>
                                        <div className={`dropdown-menu ${dropdown2 ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                            <Link className='dropdown-item' onClick={toggleOpen2} to='/services/kitchen'>Kitchen</Link>
                                            <Link className='dropdown-item' onClick={toggleOpen2} to='/services/bathroom'>Bathroom</Link>
                                            <Link className='dropdown-item' onClick={toggleOpen2} to='/services/basement'>Basement</Link>
                                            <Link className='dropdown-item' onClick={toggleOpen2} to='/services/fullhouse'>Whole House</Link>
                                        </div>
                                    </div>

                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <div className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" onClick={toggleOpen} to="#" id="navbarDropdown"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Projects</Link>
                                        <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                            <Link className='dropdown-item' onClick={toggleOpen} to='projects/kitchen'>Kitchen</Link>
                                            <Link className='dropdown-item' onClick={toggleOpen} to='projects/bathroom'>Bathroom</Link>
                                            <Link className='dropdown-item' onClick={toggleOpen} to='projects/Basement'>Basement</Link>
                                            <Link className='dropdown-item' onClick={toggleOpen} to='projects/whole_house'>Whole House</Link>
                                        </div>
                                    </div>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link className="nav-link" to="/contactus" >Contact Us</Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar> */}
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className='container-fluid'>
                <Link to="/" className='navbar-brand'>Logo</Link>
                <button 
                    className="navbar-toggler" style={{ backgroundColor: '#ffffff'}}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                  
                    >
                     <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse"  id="navbarNav">
                    <ul className="navbar-nav mx-lg-auto text-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home</Link>

                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" onClick={toggleOpen2} to="#" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" 
                            aria-expanded="false">Services</Link>
                            <div className={`dropdown-menu ${dropdown2 ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <Link className='dropdown-item' onClick={toggleOpen2} to='/services/kitchen'>Kitchen</Link>
                                <Link className='dropdown-item' onClick={toggleOpen2} to='/services/bathroom'>Bathroom</Link>
                                <Link className='dropdown-item' onClick={toggleOpen2} to='/services/basement'>Basement</Link>
                                <Link className='dropdown-item' onClick={toggleOpen2} to='/services/fullhouse'>Whole House</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link dropdown-toggle" onClick={toggleOpen} to="#" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" 
                            aria-expanded="false">Projects</Link>
                            <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/kitchen'>Kitchen</Link>
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/bathroom'>Bathroom</Link>
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/Basement'>Basement</Link>
                                <Link className='dropdown-item' onClick={toggleOpen} to='projects/fullhouse'>Whole House</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus" >Contact Us</Link>
                        </li>
                    </ul>
                </div>
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
    background-color: #ADD8E6;  
    font-family: 'Courier New', Courier, monospace;
    font-size: Larger;  
    font-weight: bold;
`