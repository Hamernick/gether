import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import background from '../src/images/gether-background.png'
import WelcomePage from './WelcomePage';
import LocationPage from './LocationPage';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="App">

      <WelcomePage />
      <MapPage />
        
      </Routes>
    </Router>

    </div>
  );
}

export default App;




// style={{ background: `url(${background})`}}
