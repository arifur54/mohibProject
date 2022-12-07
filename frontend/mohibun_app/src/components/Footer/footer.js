import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

function footer() {
  return (
    <FooterWrap>
      <div className="page-footer font-small cyan darken-3 pt-4">
        <div className="container-fluid text-center text-md-left mt-3">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>     
              <Link className="btn btn-outline-info p-2 fs-5" style={{color:"white"}} to='/login'>Admin Login</Link>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-3"> */}

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Our Services</h5>

              <ul className="list-unstyled">
                <li>
                  <Link className="fs-5 link-light" to="#">Kitchen</Link>
                </li>
                <li>
                  <Link  className="fs-5 link-light" to="#">Bathroom</Link>
                </li>
                <li>
                  <Link  className="fs-5 link-light" to="#">Basement</Link>
                </li>
                <li>
                  <Link  className="fs-5 link-light" to="#">FullHouse</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
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

    }
    p{
        color: #fff
    }

    li > a {
      text-decoration: none;
    }

    li > a:hover {
      text-decoration: underline;
    }

`