import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Donation from "./pages/Donation";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Media from "./pages/Media";
import EventReadMore from "./pages/EventReadMore";
import ProjectReadMore from "./pages/ProjectReadMore";
import WhatWeDo from "./pages/WhatWeDo";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/event-read-more" element={<EventReadMore />} />
        <Route path="/project-read-more" element={<ProjectReadMore />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>
    </Router>
  );
}

export default App;
