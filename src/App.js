// App.jsx
 
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import HomePage from './content/HomePage.js'; 

 
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