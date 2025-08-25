import "./../css/header.css";
import logo from "./../assets/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  return (
    <>
      <header>
        <div className="bg-header"></div>
        <nav className="navbar navbar-expand-sm ">
          <div className="container  ">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="collapsibleNavId"
            >
              <div className="nav align-items-center ">
                <HashLink
                  className="nav-link "
                  to="/#about"
                  aria-current="page"
                >
                  About
                </HashLink>
                <HashLink className="nav-link " to="/#service">
                  Service
                </HashLink>
                <HashLink className="nav-link  " to="/#gallery">
                  Gallery
                </HashLink>
                <HashLink className="nav-link  " to="/#contact">
                  Contact
                </HashLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
