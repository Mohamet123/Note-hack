import logo from './logo.svg';
import './App.css';
import CircleButtons from './Components/Section1-btn';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import Form from './Components/Section2-input';
import NoteApp from './Components/Section2-input';


function App() {
  
  return (
    <div className="App container">
      <div className="section1 row mt-5 shadow" >
          <div className='col-4'><p className='fs-4'>NoteHack</p></div>
          <div className=' col-8 d-flex justify-content-end'><CircleButtons /></div>
      </div>

      <div className='section2 '>
          <NoteApp/> 
      </div>
    </div>
  );
}

export default App;
