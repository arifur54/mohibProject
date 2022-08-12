import React, {useState , useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import ProjectPanel from './ProjectPanel'
import ServicePanel from './ServicePanel';
import ContactUs from './ContactUs';
import styled from 'styled-components';
import ReviewPanel from './ReviewPanel';
import { Context } from '../../context/Context';


export default function AdminMain() {
    const [active, setPageState] = useState("services");
    const {user, dispatch } = useContext(Context);

    const handleLogOut = () => {
        dispatch({type: 'LOGOUT'})
    }

    console.log(user);
  return (
    <div>
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                    <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
                    <Wrapper>
                              <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                              </a>
                              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                  <li className="nav-item">
                                      <button className="nav-link align-middle px-0" onClick={() => setPageState("services")}>
                                        <FontAwesomeIcon icon={faRectangleAd} /> <span className="ms-1 d-none d-sm-inline" >Service Panel</span>
                                      </button>
                                  </li>
                                 
                                  {/* <li>
                    <a hrefName="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        <li className="w-100">
                            <a hrefName="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                        </li>
                        <li>
                            <a hrefName="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                        </li>
                    </ul>
                </li> */}
                                  <li>
                                      <button className="nav-link px-0 align-middle" onClick={() => setPageState("projects")}>
                                        <FontAwesomeIcon icon={faRectangleAd} /> <span className="ms-1 d-none d-sm-inline" >Project Panel</span>
                                      </button>
                                  </li>
                                  <li>
                                      <button className="nav-link px-0 align-middle" onClick={() => setPageState("contactus")}>
                                        <FontAwesomeIcon icon={faRectangleAd} /> <span className="ms-1 d-none d-sm-inline" >Contact_Us Panel</span>
                                      </button>
                                  </li>
                                  <li>
                                      <button className="nav-link px-0 align-middle"  onClick={() => setPageState("review")}>
                                        <FontAwesomeIcon icon={faRectangleAd} /> <span className="ms-1 d-none d-sm-inline">Review Panel</span>
                                      </button>
                                  </li>
                              </ul>
                              <hr />
                              <div className="dropdown pb-4">
                                  <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                      <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                      <span className="d-none d-sm-inline mx-1">loser</span>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                      <li><button className="dropdown-item" >New project...</button></li>
                                      <li><button className="dropdown-item" >Settings</button></li>
                                      <li><button className="dropdown-item" >Profile</button></li>
                                      <li>
                                          <hr className="dropdown-divider" />
                                      </li>
                                      <li><button className="dropdown-item" onClick={handleLogOut}>Sign out</button></li>
                                  </ul>
                              </div>
                          </Wrapper>
                    </div>
               
                </div>
                <div className='col py-3'>
                    {active === "services" && <ServicePanel />}
                    {active === "projects" && <ProjectPanel />}
                    {active === "contactus" && <ContactUs />}
                    {active === "review" && <ReviewPanel />}
                </div>
            </div>
        </div>

      
    </div>
  )
}


const Wrapper = styled.div`
    * {
        color: white;
    }
`




