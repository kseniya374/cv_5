import React from 'react';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

export default App;