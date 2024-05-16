import { Link } from "react-router-dom";
import logo from "./logo.jpg";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-8" style={{ marginRight: -100 }}>
            <p className="mb-2">
              <Link to={"/"} className="contact-logo d-block mb-30">
                <img src={logo} alt="logo" style={{ maxWidth: 70 }} />
              </Link>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">AM Consulting & Management</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Thurgauerstrasse 117, 8152 Zürich, Switzerland
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +41 44 310 44 44
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@mckinsey.ch
            </p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-light rounded-circle me-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href>
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quicklinks</h4>
            <Link to="/" className="btn btn-link">
              Heim
            </Link>
            <Link to="/about" className="btn btn-link" href>
              Über uns
            </Link>
            <Link to="/feedback" className="btn btn-link" href>
              Rückmeldung
            </Link>
            <Link to="/contacts" className="btn btn-link" href>
              Kontaktiere uns
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Öffnungszeiten</h4>
            <p className="mb-1">Montag - Freitag</p>
            <h6 className="text-light">09:00 - 18:00 Uhr</h6>
            <p className="mb-1">Samstag</p>
            <h6 className="text-light">09:00 - 14:00 Uhr</h6>
            <p className="mb-1">Sonntag</p>
            <h6 className="text-light">Geschlossen</h6>
          </div>
        </div>
        <div className="row down-footer" style={{ marginTop: "50px" }}>
          <div className="col-lg-12 text-center">
            <p className="text-white">
              Copyright ©2024 All rights reserved
              <br />
              <Link to="/privacy-policy" className="text-white">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link to="/terms-of-use" className="text-white">
                Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
