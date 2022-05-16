import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Identify from "./components/IDENTIFY/Identify.js";
// import Identify from "/Users/sarthakjain/Desktop/DEV/REACTLEARNING/React_Firebase_Auth_Tutorial-master/src/components/IDENTIFY/Identify.js";
import Report from "./components/REPORT/Report.js";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
      {/* <Route
                path="/home/Identify"
                element={
                  <ProtectedRoute>
                    <Identify/>
                  </ProtectedRoute>
                }
              />
        <Route
                path="/home/Report"
                element={
                  <ProtectedRoute>
                    <Report/>
                  </ProtectedRoute>
                }
              /> */}
  
        <Route path="/home/Identify" element={<Identify/>} />
          <Route path="/home/Report" element={<Report/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);