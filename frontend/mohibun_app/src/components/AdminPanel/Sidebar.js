// import React from 'react'
// import styled from 'styled-components';
// // Remove this component Later 
// export default function Sidebar(props) {
//     const [active, setPageState] = (props.activee[1])
    

//     return (
//         <Wrapper>
//             <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                 <span className="fs-5 d-none d-sm-inline">Menu</span>
//             </a>
//             <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                 <li className="nav-item">
//                     <button className="nav-link align-middle px-0" >
//                         <i className="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline" onClick={() => setPageState(props.activee[0])}>Service Panel</span>
//                     </button>
//                 </li>
//                 {/* <li>
//                     <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
//                         <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//                     <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//                         <li className="w-100">
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
//                         </li>
//                         <li>
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
//                         </li>
//                     </ul>
//                 </li> */}
//                 <li>
//                     <button href="#" className="nav-link px-0 align-middle">
//                         <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline" onClick={() => setPageState(props.activee[1])}>Project Panel</span></button>
//                 </li>
//                 <li>
//                     <a hrefName="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
//                         <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
//                     <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
//                         <li className="w-100">
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
//                         </li>
//                         <li>
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
//                         <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
//                     <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
//                         <li className="w-100">
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
//                         </li>
//                         <li>
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
//                         </li>
//                         <li>
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
//                         </li>
//                         <li>
//                             <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//             <hr />
//             <div className="dropdown pb-4">
//                 <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                     <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
//                     <span className="d-none d-sm-inline mx-1">loser</span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
//                     <li><a className="dropdown-item" href="#">New project...</a></li>
//                     <li><a className="dropdown-item" href="#">Settings</a></li>
//                     <li><a className="dropdown-item" href="#">Profile</a></li>
//                     <li>
//                         <hr className="dropdown-divider" />
//                     </li>
//                     <li><a className="dropdown-item" href="#">Sign out</a></li>
//                 </ul>
//             </div>
//         </Wrapper>

//     )
// }

// const Wrapper = styled.div`
//     * {
//         color: white;
//     }
// `