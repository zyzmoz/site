import React from 'react';
import './assets/css/master.css';
import MainSection from './components/MainSection/MainSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div className="app-container">
      <MainSection />
      <Portfolio />
      <ContactSection />      
      <Footer />
    </div>
  );
};

export default App;