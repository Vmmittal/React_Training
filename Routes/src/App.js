
// import './App.css';
import React from 'react';

import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import Routing from './pages/Routing';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';


function App() {
  return (
    <div className='App'>  
    <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Routing />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />

     </Routes>
  </BrowserRouter>
  </div>
   
    
  );
}
export default App;
