import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/shows">
                Shows
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/spark">
                Spark
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/browse">
                TV
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/sport">
                Sports
              </Link>
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/Teams">
                Teams
              </Link>
            </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/FunctionDemo1">
                  FunctionDemo
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/UseStateDemo1">
                  UseStateDemo
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/UseStateDemo2">
                  UseStateDemo2
                </Link>
              </li>
                <li class="nav-item active">
                <Link class="nav-link" to="/UseStateDemo3">
                  UseStateDemo3
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/Employees">
                  Employees
                </Link>
              </li>
              {/* <li class="nav-item active">
                <Link class="nav-link" to="/FormDemo1">
                  FormDemo1
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/FormDemo2">
                  FormDemo2
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/FormDemo3">
                  FormDemo3
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/FormDemo4">
                  FormDemo4
                </Link>
              </li> */}
              <li class="nav-item active">
                <Link class="nav-link" to="/Dropdown">
                Dropdown
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/FormValidation1">
                FormValidation1
                </Link>
              </li>
              {/* <li class="nav-item active">
                <Link class="nav-link" to="/FormValidation2">
                FormValidation2
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/FormDemo5">
                FormDemo5
                </Link>
              </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/FormDemo6">
                  FormDemo6
                  </Link>
                </li> */}
              <li class="nav-item active">
                <Link class="nav-link" to="/ApiDemo1">
                ApiDemo1
                </Link>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="/ApiDemo2">
                ApiDemo2
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/ApiDemo3">
                ApiDemo3
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/ApiDemo4">
                ApiDemo4
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/ApiDemo5">
                ApiDemo5
                </Link>
              </li>

          </ul>
        </div>
      </nav>  
    </div>
  )
}
