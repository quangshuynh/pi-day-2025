import React from 'react';
import BackgroundDigits from './components/BackgroundDigits';
import HomePage from './components/HomePage';
import LivePiCounter from './components/LivePiCounter';
import PiSpiralVisualization from './components/PiSpiralVisualization';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundDigits />
      {/* <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#livepi">Live Pi</a></li>
            <li><a href="#visualization">Visualization</a></li>
          </ul>
        </nav>
      </header> */}
      <main>
        <section id="home"><HomePage /></section>
        <section id="visualization"><PiSpiralVisualization /></section>
        <section id="livepi"><LivePiCounter /></section>
      </main>
      <footer className="app-footer">
        <p>Happy Pi Day! &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
