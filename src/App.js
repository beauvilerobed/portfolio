// App.jsx
 
import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom'; 
import HomePage from './content/HomePage.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage} />
      </div>
    </BrowserRouter>
  );
}
 
export default App;