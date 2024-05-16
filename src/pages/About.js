import { Link } from "react-router-dom";
import AboutComponents from "../components/AboutComponents";
import VideoModal from "../components/VideoModal";
import CompanyTeam from "../components/CompanyTeam";

const About = () => {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Über uns
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Heim</Link>
              </li>

              <li className="breadcrumb-item text-primary" aria-current="page">
                Über uns
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      <AboutComponents />

      {/* Video Modal Start */}
      <VideoModal />
      {/* Video Modal End */}
      {/* Team Start */}
      <CompanyTeam />
      {/* Team End */}
    </>
  );
};

export default About;
