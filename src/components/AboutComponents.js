import { Link } from "react-router-dom";
import icon5 from "../assets/img/icon/icon-5.png";
import icon2 from "../assets/img/icon/icon-2.png";

const AboutComponents = () => {
  return (
    <>
      {/* About Start */}
      <div className="container-xxl about my-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div
                className="h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: 300 }}
              >
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=pqhIVH9PHRs"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white rounded-top p-5 mt-lg-5">
                <p className="fs-5 fw-medium text-primary">Über uns</p>
                <h1 className="display-6 mb-4">
                  Die beste Marketingagentur zur Verbesserung Ihres Geschäfts
                </h1>
                <p className="mb-4">
                  AM Consulting & Management ist eine weltweit tätige
                  Unternehmensberatung, die Organisationen dabei unterstützt,
                  nachhaltiges, integratives Wachstum zu erzielen. Wir arbeiten
                  mit Klienten aus dem privaten, öffentlichen und sozialen
                  Sektor zusammen und unterstützen sie bei ihren wichtigsten
                  Veränderungen – in partnerschaftlicher und enger
                  Zusammenarbeit.
                </p>
                <div className="row g-5 pt-2 mb-5">
                  <div className="col-sm-6">
                    <img
                      className="img-fluid mb-4"
                      // src="img/icon/icon-5.png"
                      src={icon5}
                      alt=""
                    />
                    <h5 className="mb-3">Unsere Vorteile</h5>
                    <span>
                      Wir kombinieren mutige Strategien und transformative
                      Technologien, um Innovationen nachhaltiger zu gestalten.
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src={icon2} alt="" />
                    <h5 className="mb-3">Tätigkeitsbereiche</h5>
                    <span>
                      Wir arbeiten in den Bereichen Strategie, digitale
                      Transformation, Risikomanagement,
                      Unternehmensfinanzierung, Technologie und Innovation,
                      Marketing und Prozessoptimierung.
                    </span>
                  </div>
                </div>
                <Link to="/" className="btn btn-primary rounded-pill py-3 px-5">
                  Erkunde mehr
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default AboutComponents;
