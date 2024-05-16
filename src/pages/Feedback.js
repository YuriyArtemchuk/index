import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./feedback.css";

const Feedback = () => {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMessage, setMessage] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setInputPhone(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageData = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      message: inputMessage,
    };
    console.log(messageData);
    setName("");
    setEmail("");
    setInputPhone("");
    setMessage("");
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
            Rückmeldung
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Heim</Link>
              </li>

              <li className="breadcrumb-item text-primary" aria-current="page">
                Rückmeldung
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-3 feedback-content">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">Haben Sie irgendwelche Fragen?</h3>
              <p className="mb-4">
                Füllen Sie das untenstehende Formular aus und wir werden Ihnen
                innerhalb von 24 Stunden antworten.
              </p>

              <form
                classForm="feedback-form"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={inputName}
                        onChange={nameChangeHandler}
                        required
                      />
                      <label htmlFor="name">Ihr Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={inputEmail}
                        onChange={emailChangeHandler}
                        required
                      />
                      <label htmlFor="email">Ihre E-Mail</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <PhoneInput
                        inputStyle={{
                          width: "calc(100% - 40px)",
                          height: "calc(3.75rem)",
                          padding: ".375rem .75rem",
                          fontSize: "1rem",
                          fontWeight: "400",
                          lineHeight: "1.5",
                          color: "#495057",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #ced4da",
                          borderRadius: ".5rem",
                          transition:
                            "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                          marginLeft: "40px",
                        }}
                        country={"ch"}
                        placeholder="Enter phone number"
                        value={inputPhone}
                        onChange={setInputPhone}
                        inputProps={{
                          name: "phone",
                          required: true,
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 200 }}
                        defaultValue={""}
                        value={inputMessage}
                        onChange={messageChangeHandler}
                        required
                      />
                      <label htmlFor="message">Nachricht</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5"
                      type="submit"
                    >
                      Nachricht senden
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
