import React from 'react';
import logo from './landon-pad.png';
import './App.css';
//  <img src={logo} className="App-logo shadowed" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I4FrERHT0ow?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/landonfears/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn Profile
        </a>
        <svg height="0" xmlns="http://www.w3.org/2000/svg">
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feFlood flood-color="rgba(0,0,0,0.6)"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </svg>
      </header>
    </div>
  );
}

export default App;
