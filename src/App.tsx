import React, { Component } from 'react';
import TopBar from './components/TopBar';
import About from './pages/About';
import Contact from './pages/Contact';
import FamilyLaw from './pages/FamilyLaw';
import Home from './pages/Home';
import ICBC from './pages/ICBC';
import ImmLaw from './pages/ImmLaw';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomBar from './components/BottomBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/family-law" element={<FamilyLaw />} />
            <Route path="/icbc-claims" element={<ICBC />} />
            <Route path="/immigration-law" element={<ImmLaw />} />
          </Routes>
          <BottomBar/>
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
