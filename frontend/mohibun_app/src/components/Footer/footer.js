import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

function footer() {
  return (
    <FooterWrap>
      <div className="page-footer font-small cyan darken-3 pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
              
                <Link className="btn btn-info mb-4" style={{color:"white"}} to='/login'>Admin login</Link>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-3"> */}

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Our Services</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Kitchen</a>
                </li>
                <li>
                  <a href="#!">Bathroom</a>
                </li>
                <li>
                  <a href="#!">Basement</a>
                </li>
                <li>
                  <a href="#!">FullHouse</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Follow Us</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </div>
    </FooterWrap>
  );
}

export default footer;

const FooterWrap = styled.div`
    background-color: #79A7D6;
    h5 {
        color: #fff;
    }
    p{
        color: #fff
    }


    
`