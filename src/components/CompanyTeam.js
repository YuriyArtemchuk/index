import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";

const CompanyTeam = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-medium text-primary">Unser Team</p>
            <h1 className="display-5 mb-5">
              Unsere Experten stehen Ihnen gerne zur Verfügung
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src={team1} alt="" />
                <h5>Alex Robin</h5>
                <span className="text-primary">Gründer &amp; VORSITZENDER</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src={team2} alt="" />
                <h5>Adam Crew</h5>
                <span className="text-primary">Mitbegründer</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src={team3} alt="" />
                <h5>Boris Johnson</h5>
                <span className="text-primary">Ausführender Manager</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src={team4} alt="" />
                <h5>Robert Jordan</h5>
                <span className="text-primary">Vermarkter</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyTeam;
