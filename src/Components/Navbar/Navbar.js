import React from 'react';
import "./Navbar.css"
import logo from '../../image/SpaceX-Logo-White.svg'

const Navbar = () => {
  return (

    <nav class="navbar nav-container navbar-expand-lg navbar-light container">
      <div class="container-fluid nav-items d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="#vision">Vision & Mission  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#projects">Projects</a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#">Equipe</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#contact">Contact</a>
            </li>


          </ul>

        </div>
      </div>
    </nav>

  );
};

export default Navbar;