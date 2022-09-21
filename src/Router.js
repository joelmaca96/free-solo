import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
const Enrutador = () => (
  <Router>
    <Routes>
      <Route exact path={"/"} element={<App />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  </Router>
);
export default Enrutador;
