import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import WhyUnibexs from './components/WhyUnibexs';
import WhatYouGet from './components/WhatYouGet';
import EarlyAccess from './components/EarlyAccess';
import WaitingList from './components/WaitingList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhoItsFor />
        <HowItWorks />
        <WhyUnibexs />
        <WhatYouGet />
        <EarlyAccess />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
