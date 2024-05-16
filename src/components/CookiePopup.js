import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cookiePopup.css";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    Cookies.set("CookieAkzeptiert", true);
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleContinue = () => {
    toast.success("Cookies akzeptiert!-");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="cookie-popup-container">
          {" "}
          {/* Обертка для позиционирования */}
          <div className="cookie-popup">
            <div className="cookie-content">
              <h2>Cookie Richtlinie</h2>
              <p>
                Diese Website verwendet Cookies, um sicherzustellen, dass Sie
                das beste Erlebnis auf unserer Website erhalten.
              </p>
              <div className="actions">
                <button onClick={handleContinue}>Akzeptieren</button>
                <button onClick={handleClose}>Abfall</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </>
  );
};

export default CookiePopup;
