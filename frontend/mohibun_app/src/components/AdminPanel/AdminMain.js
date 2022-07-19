import React, {useState} from 'react'
import ProjectPanel from './ProjectPanel'
import ServicePanel from './ServicePanel';
import ContactUs from './ContactUs';
import styled from 'styled-components';

export default function AdminMain() {
    const [active, setPageState] = useState("services")
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
                                      <button className="nav-link align-middle px-0" >
                                          <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline" onClick={() => setPageState("services")}>Service Panel</span>
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
                                      <button className="nav-link px-0 align-middle">
                                          <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline" onClick={() => setPageState("projects")}>Project Panel</span>
                                      </button>
                                  </li>
                                  <li>
                                      <button className="nav-link px-0 align-middle">
                                          <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline" onClick={() => setPageState("contactus")}>Contact_Us Panel</span>
                                      </button>
                                  </li>
                                  {/* <li>
                                      <a data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                          <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                                      <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                          <li className="w-100">
                                              <a  className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                                          </li>
                                          <li>
                                              <a  className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                                          </li>
                                      </ul>
                                  </li> */}
                                  {/* <li>
                                      <a  data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                          <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                                      <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                          <li className="w-100">
                                              <a  className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                                          </li>
                                          <li>
                                              <a hrefName="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                                          </li>
                                          <li>
                                              <a hrefName="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                                          </li>
                                          <li>
                                              <a hrefName="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                                          </li>
                                      </ul>
                                  </li> */}
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
                                      <li><button className="dropdown-item" >Sign out</button></li>
                                  </ul>
                              </div>
                          </Wrapper>
                    </div>
               
                </div>
                <div className='col py-3'>
                    {active === "services" && <ServicePanel />}
                    {active === "projects" && <ProjectPanel />}
                    {active === "contactus" && <ContactUs />}
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




