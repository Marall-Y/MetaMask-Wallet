import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <React.StrictMode>
      <CssBaseline>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </CssBaseline>
    </React.StrictMode>
  );
};

export default App;
