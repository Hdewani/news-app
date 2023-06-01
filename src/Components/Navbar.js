//rce
import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <img src="https://icon-library.com/images/newspaper-icon-png/newspaper-icon-png-19.jpg" alt="Logo" width="57" height="43" className="d-inline-block align-text-top mx-2" />
        <h5>SAMACHAR</h5>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link " aria-current="page"to="/">Home</Link> */}
              </li>
              <li className="nav-item"> <Link className="nav-link " to="/">Home</Link></li>
              <li className="nav-item"> <Link className="nav-link " to="/business">Business</Link></li>
              <li className="nav-item"> <Link className="nav-link " to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"> <Link className="nav-link " to="/health">Health</Link></li>
              <li className="nav-item"> <Link className="nav-link " to="/science">Science</Link></li>
              <li className="nav-item"> <Link className="nav-link " to="/sports">Sports</Link></li>
              <li className="nav-item"> <Link className="nav-link " to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
