import React from 'react';
import './App.css';

import Counter from './components/Counter';
import Gauge from './components/Gauge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>useEffect - Demo</h2>
        <Counter />
        <Gauge value="40"/>
      </header>
    </div>
  );
}

export default App;