import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

function footer() {
  return (
    <FooterWrap>
      <div className="container page-footer font-small cyan darken-3 pt-4">
        <div className="container-fluid text-center text-md-left mt-3">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-start">
              <h5 className="text-uppercase mb-2 m-l-r-5">About Us</h5>
              <p className="m-l-r-5">
              At MK builders, Our home renovation project is a comprehensive effort to update and improve every area of our house. 
              From the kitchen and bathrooms to the living room and bedrooms, we are transforming our home into a more functional, 
              comfortable, and stylish space. We are excited to share our journey with you and hope that our experience will inspire
               you in your own home renovation projects.
              </p>     
              <Link className="btn btn-outline-info p-2 mt-2 fs-5 cinzel-font m-l-r-5" style={{color:"white"}} to='/login'>Admin Login</Link>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-3"> */}

            <div className="col-md-3 mb-md-0 mb-3 text-start">
              <h5 className="text-uppercase m-t-5">Our Services</h5>

              <ul className="list-unstyled">
                <li>
                  <Link className="fs-5 link-light" to="/services/kitchen">Kitchen</Link>
                </li>
                <li>
                  <Link  className="fs-5 link-light" to="/services/bathroom">Bathroom</Link>
                </li>
                <li>
                  <Link  className="fs-5 link-light" to="/services/basement">Basement</Link>
                </li>
                <li>
                  <Link  className="fs-5 link-light" to="/services/fullhouse">Whole House</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 text-start">
              <h5 className="text-uppercase">Follow Us</h5>

              <ul className="list-unstyled">
                <li>
                  <Link className="fs-5 fst-italic link-light" to="#">Kitchen</Link>
                </li>
                <li>
                  <Link className="fs-5 fst-italic link-light" to="#">Kitchen</Link>
                </li>
                <li>
                  <Link className="fs-5 fst-italic text-formatter link-light" to="#">Kitchen</Link>
                </li>
                <li>
                  <Link className="fs-5 fst-italic link-light text-formatter" to="#">Kitchen</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 text-light">
          <p>
            © {new Date().getFullYear()} Copyright:
            <a className="link-info" href="https://mdbootstrap.com/"> MKBuilders.com</a>
          </p>
        </div>
      </div>
    </FooterWrap>
  );
}

export default footer;

const FooterWrap = styled.div`
    background-color: rgb(44, 44, 44);
    min-hight: 100%;
    min-width: 100%;
    h5 {
        color: #fff;
        font-family: 'Aboreto',cursive;
    }
    p{
        color: #fff;
        font-family: 'Josefin Sans',sans-serif;
    }
    
    li > a {
      text-decoration: none;
      font-family: 'Josefin Sans',sans-serif;
    }

    li > a:hover {
      text-decoration: underline;
    }

`