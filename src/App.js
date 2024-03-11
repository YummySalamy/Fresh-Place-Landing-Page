import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import LandingPage from "MainComponents/LandingPage.js";
import BlogIndex from "pages/BlogIndex";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="/blog" element={<BlogIndex />} />
        </Routes>
      </Router>
    </>
  );
}
