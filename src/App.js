import React from 'react';

import Navbar from './components/navbar';
import Routes from './routes';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
