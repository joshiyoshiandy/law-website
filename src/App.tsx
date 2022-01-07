import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// import components
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

// import pages
import About from './pages/About';
import Contact from './pages/Contact';
import FamilyLaw from './pages/FamilyLaw';
import Home from './pages/Home';
import ICBC from './pages/ICBC';
import ImmLaw from './pages/ImmLaw';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/family-law" element={<FamilyLaw />} />
          <Route path="/icbc-claims" element={<ICBC />} />
          <Route path="/immigration-law" element={<ImmLaw />} />
          <Route element={<NotFound />} />
        </Routes>
        <BottomBar />
      </div>
    );
  }
}

export default App;
