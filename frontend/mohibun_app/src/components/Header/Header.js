import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import Routes from '../../routes'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';



function Header() {

    const { user } = useContext(Context);
  
    return (
        <div>
            <NavWrap>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className='container-fluid'>
                        <Link to="/" className='navbar-brand'>
                            <img src='/images/mkLogo2.png' className='navbar-brand' width={100} height={100}></img>
                        </Link>

                        <button
                            className="navbar-toggler" style={{ backgroundColor: '#ffffff' }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"

                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-lg-auto text-center">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">HOME</Link>

                                </li>
                                <li className="nav-item dropdown ms-auto">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">SERVICES</a>
                                    <div className="dropdown-menu">
                                        <Link className='dropdown-item' to='/services/kitchen'>Kitchen Renovation</Link>
                                        <Link className='dropdown-item' to='/services/bathroom'>Bathroom  Renovation</Link>
                                        <Link className='dropdown-item' to='/services/basement'>Basement  Renovation</Link>
                                        <Link className='dropdown-item' to='/services/fullhouse'>Whole House  Renovation</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ms-auto">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">PROJECTS</a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <Link className='dropdown-item'  to='projects/kitchen'>Kitchen</Link>
                                        <Link className='dropdown-item'  to='projects/bathroom'>Bathroom</Link>
                                        <Link className='dropdown-item'  to='projects/Basement'>Basement</Link>
                                        <Link className='dropdown-item'  to='projects/fullhouse'>Full House</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contactus">CONTACT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reviews" >REVIEWS</Link>
                                </li>

                                {
                                    user && (
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin_panel" >ADMIN PANEL</Link>
                                        </li>
                                    )
                                }

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
    // margin: 0%;
    // background-color: #7A79D6; 
    background-color: #EAE0D7;
    //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    font-family: 'DM Serif Display', serif;
    font-size: Larger;  
    
    .navbar-light .navbar-nav .nav-link {
        color: #black;
    }

    .navbar-nav .nav-link {
        padding-right: 5px;
        padding-left: 50px;
        text-align: end;
    }

    .nav-link {
        background-image: linear-gradient(
            to right,
            #F0F3F4,
            #F0F3F4 50%,
            #000 50%
          );
          background-size: 200% 100%;
          background-position: -100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease-in-out;
    }

    .nav-link:before {
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
    }

    .nav-link:hover{
        background-position: 0;
    }

    .nav-link::before {
        width: 100%;
    }
`