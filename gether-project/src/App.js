import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import background from '../src/images/gether-background.png'
import WelcomePage from './WelcomePage';
import LocationPage from './LocationPage';
import MapPage from './MapPage';
import ErrorPage from './ErrorPage';

function App() {


  return (
    <div className="App">
<<<<<<< HEAD

      <WelcomePage />
      <MapPage />
=======
      <h1>gether.</h1>
    <Router>
      <Routes>
      
          <Route path="/" element={<WelcomePage />} />
          <Route path="/locationpage" element={<LocationPage />} />
          <Route path="/mappage" element={<MapPage />} />
          <Route path="*" element={<ErrorPage />} />
>>>>>>> thomas-branch2
        
      </Routes>
    </Router>

    </div>
  );
}

export default App;




// style={{ background: `url(${background})`}}
