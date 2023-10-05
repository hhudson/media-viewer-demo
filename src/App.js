import logo from './logo.svg';
import './App.css';
import React from 'react';
import MediaViewer from 'media-viewer-js';
import {IntlProvider} from 'react-intl';

function App() {
  return (
    <IntlProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>





<div>


<MediaViewer
  mediaViewerProps={{
    files: [
      {
        fileUrl: 'Pain Management Consent.pdf',
      },
      {
        fileUrl: 'Pain Management Consent.pdf',
        zoom: 200,
        rotation: 90,
      }
    ]
  }}
  onLoad={() => {}}
  multiPageMode
/>
</div>
    </div>
    </IntlProvider>
  );
}

export default App;
