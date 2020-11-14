// App.jsx
 
import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
            <div className="navigation">
            <div className="navigation-sub">
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;