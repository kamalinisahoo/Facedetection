import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Identify from "./components/Identify";
import Report from "./components/Report";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/home/Identify" element={<Identify/>} />
          <Route path="/home/Report" element={<Report/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);