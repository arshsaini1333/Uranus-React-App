import "./Navbar.css";
import logo from "./assets/logo.png";
export default function Navbars() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
            $URANUS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="fa-solid fa-house"></i> Home
              </a>

              <a className="nav-link" href="#">
                <i className="fa-solid fa-circle-info"></i> About
              </a>

              <a className="nav-link" href="#">
                <i className="fa-solid fa-phone"></i> Contact
              </a>
              <a className="nav-link" href="#">
                <i className="fa-solid fa-user"></i> Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
