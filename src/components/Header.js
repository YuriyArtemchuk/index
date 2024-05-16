import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePosts } from "../components/context/usePosts";
import "./header.css";
import logo from "./logo.jpg";

const Header = () => {
  const { filterValue, setFilterValue } = usePosts();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterValue = ({ target: { value } }) => {
    setFilterValue(value);
    if (value && value.length) {
      navigate("/blog"); // Перенаправление на страницу Blog.js при вводе данных
    }
  };

  return (
    <>
      <div>
        {/* Topbar Start */}
        <div className="container-fluid bg-primary text-white d-none d-lg-flex">
          <div className="container py-3">
            <div className="d-flex align-items-center">
              <a href="/">
                <h2 className="text-white fw-bold m-0">
                  AM Consulting & Management
                </h2>
              </a>
              <div className="ms-auto d-flex align-items-center">
                <small className="ms-4">
                  <i className="fa fa-map-marker-alt me-3" />
                  Thurgauerstrasse 117, 8152 Zürich, Switzerland
                </small>
                <small className="ms-4">
                  <i className="fa fa-envelope me-3" />
                  info@mckinsey.ch
                </small>
                <small className="ms-4">
                  <i className="fa fa-phone-alt me-3" />
                  +41 44 310 44 44
                </small>
                <div className="ms-3 d-flex">
                  <a
                    className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div className="container-fluid bg-white sticky-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
              <a href="index.html" className="navbar-brand d-lg-none">
                <h1 className="fw-bold m-0">AM Consulting & Management</h1>
              </a>
              <button
                type="button"
                className="navbar-toggler me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                  <Link to="/" className={"nav-item nav-link"}>
                    <img
                      src={logo}
                      className="nav-image"
                      alt="logo"
                      style={{ maxWidth: 35 }}
                    />
                  </Link>
                  <Link
                    to="/"
                    className={
                      "nav-item nav-link" +
                      (location.pathname === "/" ? " active" : "")
                    }
                  >
                    Heim
                  </Link>
                  <Link
                    to="/about"
                    className={
                      "nav-item nav-link" +
                      (location.pathname === "/about" ? " active" : "")
                    }
                  >
                    Aus
                  </Link>
                  <Link
                    to="/feedback"
                    className={
                      "nav-item nav-link" +
                      (location.pathname === "/feedback" ? " active" : "")
                    }
                  >
                    Rückmeldung
                  </Link>
                  <Link
                    to="/blog"
                    className={
                      "nav-item nav-link" +
                      (location.pathname === "/blog" ? " active" : "")
                    }
                  >
                    Blog
                  </Link>
                  <Link
                    to="/contacts"
                    className={
                      "nav-item nav-link" +
                      (location.pathname === "/contacts" ? " active" : "")
                    }
                  >
                    Kontakt
                  </Link>
                </div>
                <div className="ms-auto d-none d-lg-block">
                  <ul className="nav-block">
                    <li>
                      <div className="search-section">
                        <label
                          type="button"
                          htmlFor="search"
                          className={"searchLabel"}
                          onClick={() => setFilterValue("")}
                        >
                          Klar
                        </label>
                        <input
                          className="input-item"
                          type="text"
                          value={filterValue}
                          placeholder="Geben Sie für die Suche ein"
                          id="search"
                          onChange={handleFilterValue}
                        ></input>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="btn btn-primary rounded-pill py-2 px-3"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </div>
    </>
  );
};

export default Header;
