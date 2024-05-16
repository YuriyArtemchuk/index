import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Faq = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const faqs = [
    {
      id: 1,
      title: "Was ist Beratung und wie kann sie meinem Unternehmen helfen?",
      description: `Beratung ist der Prozess der Bereitstellung von Fachwissen und Beratung zur Lösung von Geschäftsproblemen und zur Erreichung von Unternehmenszielen. Berater helfen dabei, Probleme zu identifizieren, Strategien zu entwickeln und Änderungen umzusetzen, um die Effizienz und Rentabilität des Unternehmens zu verbessern`,
    },
    {
      id: 2,
      title: "Wie wähle ich den richtigen Berater für mein Unternehmen aus?",
      description: `Bei der Auswahl eines Beraters ist es wichtig, dessen Erfahrung, Reputation, Spezialisierung und frühere Projekte zu berücksichtigen. Es ist auch wichtig, die Kundenbewertungen zu prüfen und zu beurteilen, wie gut der Berater Ihre Branche versteht.`,
    },
    {
      id: 3,
      title: "Welche konkreten Probleme kann ein Berater lösen?",
      description: `Berater können bei der Lösung einer Vielzahl von Problemen helfen, darunter strategische Planung, Betriebsführung, Marketing und Vertrieb, Änderungsmanagement, Prozessoptimierung usw.`,
    },
    {
      id: 4,
      title:
        "Welche Ergebnisse können Sie von der Zusammenarbeit mit einem Berater erwarten?",
      description: `Die Ergebnisse der Zusammenarbeit mit einem Berater können je nach Ziel und Kontext des Projekts variieren. Dies können Gewinnsteigerungen, Kostensenkungen, Prozessverbesserungen, die Entwicklung neuer Strategien usw. sein.`,
    },
    {
      id: 5,
      title: "Wie lange dauert der Beratungsprozess?",
      description: ` Der Zeitaufwand für die Zusammenarbeit mit einem Berater hängt von der Komplexität der Aufgabe, dem Arbeitsaufwand und den vom Kunden vorgegebenen Fristen ab. Einige Projekte können mehrere Wochen dauern, während andere mehrere Monate oder sogar Jahre dauern können.`,
    },
    {
      id: 6,
      title:
        " Welche Ressourcen und Beteiligung benötigt mein Unternehmen während des Beratungsprojekts?",
      description: `Abhängig vom Projekt muss sich Ihr Unternehmen möglicherweise an der Datenerfassung, der Bereitstellung von Geschäftsinformationen, der Schulung von Mitarbeitern zu neuen Prozessen oder Strategien und der Unterstützung bei der Umsetzung von Änderungen beteiligen.`,
    },
    {
      id: 7,
      title: " Wie misst man die Wirksamkeit eines Beratungsprojekts?",
      description: `Die Projekteffektivität kann anhand der Erreichung festgelegter Ziele und Leistungsindikatoren gemessen werden, z. B. höhere Gewinne, kürzere Aufgabenerledigungszeiten, erhöhte Kundenzufriedenheit und andere wichtige Erfolgsindikatoren.`,
    },
    {
      id: 8,
      title: "Welche Erfolgsgarantien gibt der Berater?",
      description: `Der Berater kann nur insoweit Garantien geben, als er den Prozess und die Ergebnisse kontrolliert. Anstatt Erfolgsgarantien anzubieten, verspricht der Berater in der Regel, seine Erfahrung und sein Fachwissen einzusetzen, um die Wahrscheinlichkeit eines erfolgreichen Ergebnisses zu maximieren.`,
    },
    {
      id: 9,
      title: "Wie hoch sind die Honorare für Beratungsleistungen?",
      description: `Die Kosten für Beratungsleistungen hängen von vielen Faktoren ab, darunter der Erfahrung und dem Ruf des Beraters, der Komplexität des Projekts, dem Arbeitsumfang usw. Normalerweise arbeiten Berater entweder auf Stunden- oder auf Projektbasis.`,
    },
    {
      id: 10,
      title:
        "Wie bereite ich mich auf die Zusammenarbeit mit einem Berater vor?",
      description: `Zur Vorbereitung auf die Zusammenarbeit mit einem Berater gehören die Definition der Projektziele, das Sammeln notwendiger Daten und Geschäftsinformationen sowie die Festlegung klarer Erwartungen und Verpflichtungen seitens beider Parteien.`,
    },
  ];
  // Pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsPage = lastPostIndex - postsPerPage;
  const currentListPosts = faqs.slice(firstPostsPage, lastPostIndex);
  const totalPosts = faqs.length;

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage))
      setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            FAQ
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Heim</Link>
              </li>

              <li className="breadcrumb-item text-primary" aria-current="page">
                FAQ
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      <div className="section search-result-wrap">
        <div className="container">
          <div className="row posts-entry">
            <div className="col-lg-8">
              <h5 style={{ marginBottom: "30px" }}>
                Berater werden von ihren Kunden mit vielen Fragen konfrontiert.
                Hier finden Sie einige der am häufigsten gestellten Fragen in
                der Beratung und kurze Antworten darauf:
              </h5>
            </div>
            <div className="col-lg-8">
              {currentListPosts.map((faq) => (
                <div className="blog-entry d-flex blog-entry-search-item">
                  <div>
                    <h2>{faq.title}</h2>
                    <p>{faq.description}</p>
                  </div>
                </div>
              ))}

              <div className="row text-start pt-5 border-top">
                <div className="col-md-12">
                  <div className="pagination-wrapper">
                    <div className="pagination">
                      <button className="prev page-numbers" onClick={prevPage}>
                        &#8592;
                      </button>
                      <div className="custom-pagination">
                        {pages.map((page, index) => {
                          return (
                            <button
                              key={index}
                              className={`page-numbers ${
                                page === currentPage ? "current" : ""
                              }`}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          );
                        })}
                      </div>
                      <button className="next page-numbers" onClick={nextPage}>
                        &#8594;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
