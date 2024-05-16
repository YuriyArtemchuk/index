import { Link } from "react-router-dom";
import GoogleMap from "../components/GoogleMap";
import logo2 from "./logo.jpg";
import "./contacts.css";

const Contacts = () => {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Kontaktieren Sie uns
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Heim</Link>
              </li>

              <li className="breadcrumb-item text-primary" aria-current="page">
                Kontaktieren Sie uns
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <p className="fs-5 fw-medium text-primary">Kontaktieren Sie uns</p>
            <h1 className="display-5 mb-5">Kontaktdetails</h1>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp block-google"
              data-wow-delay="0.5s"
            >
              <h3 className="mb-4">AM Consulting & Management</h3>
              <div className="d-flex border-bottom pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h6>Ihr Büro</h6>
                  <span>Thurgauerstrasse 117, 8152 Zürich, Switzerland</span>
                </div>
              </div>
              <div className="d-flex border-bottom pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h6>Zoll uns</h6>
                  <span>+41 44 310 44 44</span>
                </div>
              </div>
              <div className="d-flex border-bottom-0 pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                  <i className="fa fa-envelope text-white" />
                </div>
                <div className="ms-3">
                  <h6>Mile uns</h6>
                  <span>info@mckinsey.ch</span>
                </div>
              </div>
              <div className="w-100 rounded">{/* <GoogleMap /> */}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Google Map */}
      <div className="container map-area">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingBottom: "56.25%",
          }}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/search/?api=1&query=47.42413288787276,8.559294165479448+(AM+Consulting+%26+Management+GmbH)",
              "_blank"
            );
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27078.623204436064!2d8.557105316187116!3d47.42125827429278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b7d0450f8e5%3A0xc3c21cb3e94fc73d!2sZ%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2suk!4v1620831990868!5m2!1sen!2suk"
            frameBorder={0}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
            allowFullScreen
          />
        </div>
        <div className="fitness-contact-info trapezoid">
          <a
            href="https://www.google.com/maps/search/?api=1&query=47.42413288787276,8.559294165479448+(AM+Consulting+%26+Management+GmbH)
            "
            className="contact-logo d-block mb-30"
            target="_blank"
          >
            <img src={logo2} alt style={{ maxWidth: 30 }} />
            <h6>AM Consulting & Management</h6>
            <h6>Thurgauerstrasse 117, 8152 Zürich, Switzerland</h6>

            <h6>+41 44 310 44 44</h6>
          </a>
        </div>
      </div>
      {/* Start Google Map */}
      {/* Contact End */}
    </>
  );
};

export default Contacts;
