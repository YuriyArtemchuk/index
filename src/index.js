import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CookiePopup from "./components/CookiePopup";
// import $ from "jquery";
// import WOW from "wowjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <CookiePopup />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const RootComponent = () => {
//   useEffect(() => {
//     new WOW().init();
//   }, []); // Запускаем WOW.js только после первого рендеринга

//   return (
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//       <CookiePopup />
//     </React.StrictMode>
//   );
// };

// root.render(<RootComponent />);
