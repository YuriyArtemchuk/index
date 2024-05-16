import { Link } from "react-router-dom";
import carousel1 from "../assets/img/carousel-1.jpg";
import AboutComponents from "../components/AboutComponents";
import VideoModal from "../components/VideoModal";
import CompanyTeam from "../components/CompanyTeam";
import "./main.css";
import icon1 from "../assets/img/icon/icon-1.png";
import icon2 from "../assets/img/icon/icon-2.png";
import icon3 from "../assets/img/icon/icon-3.png";
import icon4 from "../assets/img/icon/icon-4.png";
import icon5 from "../assets/img/icon/icon-5.png";
import icon6 from "../assets/img/icon/icon-6.png";
import icon7 from "../assets/img/icon/icon-7.png";
import icon8 from "../assets/img/icon/icon-8.png";
import icon9 from "../assets/img/icon/icon-9.png";
import icon10 from "../assets/img/icon/icon-10.png";
import project1 from "../assets/img/project-1.jpg";
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
import project4 from "../assets/img/project-4.jpg";
import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";
import testimonial3 from "../assets/img/testimonial-3.jpg";
import testimonial4 from "../assets/img/testimonial-4.jpg";

const Main = () => {
  return (
    <>
      <div>
        {/* Carousel Start */}
        <div className="container-fluid px-0 mb-5">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src={carousel1} alt="carousel1" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-lg-7 text-start">
                        <p className="fs-4 text-white animated slideInRight">
                          Willkommen zu
                          <strong> AM Consulting & Management</strong>
                        </p>
                        <h1 className="display-1 text-white mb-4 animated slideInRight">
                          Schalten Sie Ihr Geschäftswachstum frei
                        </h1>
                        <Link
                          to="/about"
                          className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight"
                        >
                          Erkunde mehr
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={carousel1} alt="carousel1" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-end">
                      <div className="col-lg-7 text-end">
                        <p className="fs-4 text-white animated slideInLeft">
                          Willkommen zu{" "}
                          <strong> AM Consulting & Management</strong>
                        </p>
                        <h1 className="display-1 text-white mb-5 animated slideInLeft">
                          Bereit, Ihr Geschäft auszubauen
                        </h1>
                        <Link
                          to="/about"
                          className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                        >
                          Erkunde mehr
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Vorherige</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Nächste</span>
            </button>
          </div>
        </div>
        {/* Carousel End */}
        {/* Features Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-0 feature-row">
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="feature-item border h-100 p-5">
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/assets/img/icon/icon-1.png`}
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">Preisgekrönt</h5>
                  <p className="mb-0">
                    Unsere Best-in-Category-Auszeichnungen bestätigen unsere
                    herausragenden Leistungen in der Branche. Tragen Sie sich in
                    unsere Gewinnerliste ein und erleben Sie unvergessliche
                    Ergebnisse!“
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="feature-item border h-100 p-5">
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/assets/img/icon/icon-2.png`}
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">Professionelle Angestellte</h5>
                  <p className="mb-0">
                    Kein professioneller Mitarbeiter – ich wünsche Ihnen viel
                    Aufmerksamkeit! Durch die Einführung neuer Websites müssen
                    Sie Ihre Daten nicht erneut überprüfen und Ihre Daten
                    verwalten.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="feature-item border h-100 p-5">
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: 64, height: 64 }}
                  >
                    <img className="img-fluid" src={icon3} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Faire Preise</h5>
                  <p className="mb-0">
                    Wir bieten faire Preise ohne versteckte Kosten! Bei uns
                    erhalten Sie hochwertige Leistungen zu einem fairen Preis.
                    Vertrauen Sie uns Ihr Budget an und wir bieten Ihnen das
                    beste Preis-Leistungs-Verhältnis!“
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="feature-item border h-100 p-5">
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: 64, height: 64 }}
                  >
                    <img className="img-fluid" src={icon4} alt="Icon" />
                  </div>
                  <h5 className="mb-3">24/7 Unterstützung</h5>
                  <p className="mb-0">
                    Unsere Spezialisten stehen Ihnen rund um die Uhr, 7 Tage die
                    Woche, zur Verfügung, unser Team ist bereit, Ihnen die
                    Unterstützung zu bieten, die Sie brauchen, und wir helfen
                    Ihnen bei der Lösung.“ Bei Fragen oder Problemen in
                    kürzester Zeit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}
        {/* About Start */}
        <AboutComponents />

        {/* About End */}
        {/* Video Modal Start */}
        <VideoModal />

        {/* Video Modal End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="fs-5 fw-medium text-primary">
                Unsere Dienstleistungen
              </p>
              <h1 className="display-5 mb-5">
                Von uns angebotene digitale Marketingdienstleistungen
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item position-relative h-100">
                  <div className="service-text rounded p-5">
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 64, height: 64 }}
                    >
                      <img className="img-fluid" src={icon5} alt="Icon" />
                    </div>
                    <h5 className="mb-3">Digitales Marketing</h5>
                    <p className="mb-0">
                      Erreichen Sie digitalen Erfolg mit unseren
                      Marketing-Services! Wir bieten umfassende Lösungen zur
                      Online-Werbung Ihres Unternehmens. Unser Expertenteam
                      entwickelt für Sie wirksame Strategien, um mehr Kunden zu
                      gewinnen, den Umsatz zu steigern und Ihre Online-Präsenz
                      zu stärken. Vertrauen Sie uns und Sie werden sehen, wie
                      Ihr Unternehmen wächst!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item position-relative h-100">
                  <div className="service-text rounded p-5">
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 64, height: 64 }}
                    >
                      <img className="img-fluid" src={icon6} alt="Icon" />
                    </div>
                    <h5 className="mb-3">Internet Marketing</h5>
                    <p className="mb-0">
                      Internetmarketing ist der Schlüssel zum Erfolg Ihres
                      Unternehmens in der modernen Welt! Unser Expertenteam
                      bietet maßgeschneiderte Strategien auf der Grundlage von
                      Best Practices für das Internet-Marketing, damit sich Ihre
                      Marke von der Konkurrenz abhebt. Wir bieten eine breite
                      Palette von Dienstleistungen an, darunter SEO-Optimierung,
                      Content-Marketing, Social-Media-Werbung und vieles mehr.
                      Vertrauen Sie uns Ihren Online-Erfolg an!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item position-relative h-100">
                  <div className="service-text rounded p-5">
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 64, height: 64 }}
                    >
                      <img className="img-fluid" src={icon7} alt="Icon" />
                    </div>
                    <h5 className="mb-3">Inhaltsvermarktung</h5>
                    <p className="mb-0">
                      Erstellen Sie wertvolle Inhalte und begeistern Sie Ihr
                      Publikum mit unserem Content-Marketing! Wir entwickeln für
                      Sie Strategien, die Ihnen helfen, Ihr Publikum zu
                      gewinnen, zu binden und in treue Kunden zu verwandeln.
                      Unser Expertenteam hilft Ihnen bei der Erstellung
                      hochwertiger Inhalte, die bei Ihrem Publikum Anklang
                      finden und Ihre Marke fördern. Vertrauen Sie darauf, dass
                      wir Ihr Unternehmen durch Inhalte effektiv bewerben!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item position-relative h-100">
                  <div className="service-text rounded p-5">
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 64, height: 64 }}
                    >
                      <img className="img-fluid" src={icon8} alt="Icon" />
                    </div>
                    <h5 className="mb-3">Soziales Marketing</h5>
                    <p className="mb-0">
                      Beherrschen Sie Social Media und erreichen Sie neue Höhen
                      mit unseren Social-Marketing-Services! Wir erstellen für
                      Sie Strategien, die Ihnen helfen, mit Ihrem Publikum auf
                      Social-Media-Plattformen in Kontakt zu treten, Ihre
                      Markenbekanntheit zu steigern und neue Kunden zu gewinnen.
                      Unser Expertenteam kann Ihnen dabei helfen, überzeugende
                      Inhalte zu erstellen, Werbekampagnen zu verwalten und
                      Ergebnisse zu analysieren, damit Sie in den sozialen
                      Medien maximalen Erfolg erzielen. Vertrauen Sie uns, wenn
                      es darum geht, Ihr Unternehmen online effektiv zu
                      bewerben!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item position-relative h-100">
                  <div className="service-text rounded p-5">
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 64, height: 64 }}
                    >
                      <img className="img-fluid" src={icon9} alt="Icon" />
                    </div>
                    <h5 className="mb-3">B2B-Marketing</h5>
                    <p className="mb-0">
                      Optimieren Sie Ihre Geschäftsprozesse mit unseren
                      B2B-Marketingstrategien! Wir sind darauf spezialisiert,
                      maßgeschneiderte Ansätze zu entwickeln, die Ihrem
                      Unternehmen dabei helfen, erfolgreich Geschäftskunden zu
                      gewinnen und zu binden. Unser Team bietet umfassende
                      Lösungen, darunter die Erstellung von Inhalten, die
                      effektive Nutzung digitaler Kanäle und
                      Direktmarketingstrategien. Vertrauen Sie uns, um Ihren
                      Kundenstamm zu vergrößern und Ihre Wettbewerbsfähigkeit im
                      B2B-Bereich zu verbessern!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item position-relative h-100">
                  <div className="service-text rounded p-5">
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 64, height: 64 }}
                    >
                      <img className="img-fluid" src={icon10} alt="Icon" />
                    </div>
                    <h5 className="mb-3">E-Mail Marketing</h5>
                    <p className="mb-0">
                      Ein leistungsstarkes E-Mail-Marketing-Tool wartet auf Sie!
                      Unser E-Mail-Newsletter-Service hilft Ihnen, eine direkte
                      Verbindung zu Ihrem Publikum aufzubauen, die Conversions
                      zu steigern und die Kundenbindung zu erhöhen. Wir
                      entwickeln für Sie personalisierte und qualitativ
                      hochwertige Newsletter, die zu Ergebnissen führen.
                      Vertrauen Sie darauf, dass wir E-Mails effektiv in Ihrer
                      Marketingstrategie einsetzen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* Project Start */}
        <div className="container-xxl pt-5">
          <div className="container">
            <div
              className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="fs-5 fw-medium text-primary">Unsere Projekte</p>
              <h1 className="display-5 mb-5">
                Wir haben viele tolle Projekte durchgeführt
              </h1>
            </div>

            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="img-fluid"
                      src={project1}
                      alt="project-1.jpg"
                    />
                    <div className="project-overlay">
                      <a
                        className="btn btn-lg-square btn-light rounded-circle m-1"
                        href={project1}
                        data-lightbox="project"
                      >
                        <i className="fa fa-eye" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a className="d-block h5" href>
                        Datenanalyse &amp; Einblicke
                      </a>
                      <span>
                        Gewinnen Sie wertvolle Erkenntnisse aus Ihren Daten mit
                        unseren Datenanalyse- und Forschungsdiensten! Wir bieten
                        einen umfassenden Ansatz zur Datenanalyse, der es Ihnen
                        ermöglicht, wichtige Trends zu erkennen, das Verhalten
                        Ihrer Zielgruppe zu verstehen und fundierte
                        Entscheidungen für Ihr Unternehmen zu treffen. Unser
                        Expertenteam hilft Ihnen, das Beste aus Ihren Daten
                        herauszuholen und sie in wertvolle Erkenntnisse für das
                        weitere Wachstum Ihres Unternehmens umzuwandeln.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="carousel-item ">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="img-fluid"
                      src={project2}
                      alt="project-1.jpg"
                    />
                    <div className="project-overlay">
                      <a
                        className="btn btn-lg-square btn-light rounded-circle m-1"
                        href={project2}
                        data-lightbox="project"
                      >
                        <i className="fa fa-eye" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a className="d-block h5" href>
                        Finanzberatung
                      </a>
                      <span>
                        Sorgen Sie mit unserer Finanzberatung für die
                        finanzielle Stabilität Ihres Unternehmens! Unsere
                        Experten helfen Ihnen, Finanzprozesse zu optimieren,
                        Kapitalmanagementstrategien zu entwickeln und Risiken zu
                        minimieren. Wir bieten maßgeschneiderte Lösungen, die
                        Ihnen helfen, in einem dynamischen Geschäftsumfeld
                        erfolgreich zu sein. Vertrauen Sie uns Ihre Finanzen an
                        und wir helfen Ihnen, Ihre geschäftlichen Finanzziele zu
                        erreichen!
                      </span>
                    </div>
                  </div>
                </div>

                <div className="carousel-item ">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="img-fluid"
                      src={project3}
                      alt="project-1.jpg"
                    />
                    <div className="project-overlay">
                      <a
                        className="btn btn-lg-square btn-light rounded-circle m-1"
                        href={project3}
                        data-lightbox="project"
                      >
                        <i className="fa fa-eye" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a className="d-block h5" href>
                        Investitionen
                      </a>
                      <span>
                        Investieren Sie mit neuen Technologien in die Zukunft
                        Ihres Unternehmens! Unser Unternehmen bietet kompetente
                        Beratung bei der Auswahl und Implementierung
                        fortschrittlicher Technologien, die Ihnen helfen, die
                        Effizienz von Geschäftsprozessen zu steigern, die
                        Produktqualität zu verbessern und auf dem Markt
                        wettbewerbsfähig zu bleiben. Wir helfen Ihnen dabei, die
                        optimalen Anlagestrategien zu ermitteln, damit Ihr
                        Unternehmen im digitalen Zeitalter erfolgreich wachsen
                        und sich weiterentwickeln kann
                      </span>
                    </div>
                  </div>
                </div>

                <div className="carousel-item ">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="img-fluid"
                      src={project4}
                      alt="project-1.jpg"
                    />
                    <div className="project-overlay">
                      <a
                        className="btn btn-lg-square btn-light rounded-circle m-1"
                        href={project4}
                        data-lightbox="project"
                      >
                        <i className="fa fa-eye" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a className="d-block h5" href>
                        Rechtsberatung
                      </a>
                      <span>
                        Verschaffen Sie sich mit unserer rechtlichen
                        Unterstützung Sicherheit in rechtlichen Angelegenheiten!
                        Unsere qualifizierten Anwälte bieten Ihnen
                        professionelle Unterstützung und Beratung in
                        verschiedenen Rechtsfragen, darunter Wirtschaftsrecht,
                        Gesellschaftsrecht, Arbeitsrecht, geistiges Eigentum und
                        vieles mehr. Wir entwickeln für Sie individuelle
                        Strategien und wahren Ihre Interessen, um rechtliche
                        Probleme zu vermeiden und diese gegebenenfalls zu lösen.
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project End */}

        {/* Team Start */}
        <CompanyTeam />
        {/* Team End */}
        {/* Testimonial Start */}
        <div className="container-xxl pt-5">
          <div className="container">
            <div
              className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="fs-5 fw-medium text-primary">Zeugnis</p>
              <h1 className="display-5 mb-5">
                Was Kunden über unsere Dienstleistungen sagen!
              </h1>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-inner carousel-inner-2">
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5 carousel-item active">
                  <img className="mb-4" src={testimonial1} alt="" />
                  <p className="mb-4">
                    Ich arbeite seit mehreren Jahren in einem
                    Beratungsunternehmen und freue mich über die Zusammenarbeit
                    mit Ihrem Unternehmen. Ich bin beeindruckt von der
                    Professionalität Ihres Teams und der Qualität Ihrer
                    Dienstleistungen. Dank Ihrer rechtlichen Unterstützung
                    entwickeln wir unser Geschäft erfolgreich weiter und lösen
                    rechtliche Probleme ohne unnötige Sorgen. Ihre fachkundige
                    Hilfe bei der Finanzberatung ermöglicht es uns, die Finanzen
                    effektiv zu verwalten und fundierte Entscheidungen zu
                    treffen. Ich freue mich auch über Ihre Ratschläge zu
                    Investitionen in neue Technologien, die uns helfen, einen
                    Wettbewerbsvorteil auf dem Markt zu wahren. Vielen Dank für
                    Ihre hervorragende Arbeit!
                  </p>
                  <h5>Dorothy Wilshere</h5>
                  <span className="text-primary">Vermarkter</span>
                </div>

                <div className="testimonial-item rounded p-4 p-lg-5 mb-5 carousel-item ">
                  <img className="mb-4" src={testimonial2} alt="" />
                  <p className="mb-4">
                    Als technischer Leiter habe ich das Vergnügen, mit Ihrem
                    Unternehmen zusammenzuarbeiten. Ihre kompetente
                    Unterstützung im Bereich Investitionen in neue Technologien
                    hilft uns, die Weiterentwicklung unseres Produkts
                    sicherzustellen und seine Wettbewerbsfähigkeit zu erhalten.
                    Ihre Beratung zu digitalem Marketing und Datenanalyse
                    ermöglicht es uns, effektiv mit unserem Publikum zu
                    kommunizieren und fundierte Entscheidungen zu treffen.
                    Darüber hinaus hilft uns Ihre finanzielle Unterstützung, die
                    finanzielle Stabilität und den rationellen Einsatz unserer
                    Ressourcen aufrechtzuerhalten. Vielen Dank für Ihre
                    hervorragende Arbeit und Partnerschaft!
                  </p>
                  <h5>Klaus Schultz</h5>
                  <span className="text-primary">Technischer Direktor</span>
                </div>
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5 carousel-item">
                  <img className="mb-4" src={testimonial3} alt="" />
                  <p className="mb-4">
                    Ich arbeite in einem Partnerunternehmen Ihres Unternehmens
                    und möchte mich für Ihre professionelle Hilfe und
                    Unterstützung bedanken. Ihre rechtliche Unterstützung
                    ermöglicht es uns, verschiedene rechtliche Probleme schnell
                    und effizient zu lösen, was für eine erfolgreiche
                    Zusammenarbeit sehr wichtig ist. Sie geben außerdem
                    wertvolle Ratschläge zu Finanzberatung und Anlagestrategien,
                    die uns bei der Verwaltung unserer Finanzen und beim Ausbau
                    unseres Geschäfts helfen. Wir schätzen Ihre Leistungen und
                    Zuverlässigkeit als Partner sehr und hoffen auf eine weitere
                    erfolgreiche Zusammenarbeit
                  </p>
                  <h5>Jan Luka</h5>
                  <span className="text-primary">Manager</span>
                </div>
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5 carousel-item ">
                  <img className="mb-4" src={testimonial4} alt="" />
                  <p className="mb-4">
                    Als Geschäftsführer und Eigentümer des Unternehmens möchte
                    ich Ihrem Unternehmen meinen Dank für die hervorragende
                    Arbeit aussprechen. Sie bieten uns zuverlässige rechtliche
                    Unterstützung, die uns hilft, rechtliche Probleme zu
                    vermeiden und unser Geschäft sorgenfrei auszubauen. Ihre
                    Beratungen im Bereich Finanzberatung helfen uns, unsere
                    Finanzen effektiv zu verwalten und fundierte Entscheidungen
                    zu treffen. Darüber hinaus ermöglicht uns Ihre kompetente
                    Unterstützung im Bereich Investitionen in neue Technologien,
                    die stabile Entwicklung unseres Geschäfts sicherzustellen
                    und am Markt wettbewerbsfähig zu bleiben. Vielen Dank für
                    Ihre Professionalität und Zuverlässigkeit in der
                    Zusammenarbeit!
                  </p>
                  <h5>Joanna Digwick</h5>
                  <span className="text-primary">Direktor</span>
                </div>
              </div>
              <div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
    </>
  );
};

export default Main;
