import React, { Suspense } from 'react';
import './App.css';
import AboutUs from './components/AboutUs'
import Packages from './components/Packages'
import { Audio } from 'react-loader-spinner'

function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        <Suspense fallback={<Audio 
        type='Bars'
        color='#FF00FF'
        height={200}
        width={200}
        style={{margin: '0 auto'}}/>}>
           <AboutUs />
           <Packages />
        </Suspense>

      </div>
    </div>
  );
}

export default App;
