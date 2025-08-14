import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Upload from './components/Upload';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Upload />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;