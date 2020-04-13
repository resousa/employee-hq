import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Employee from './pages/Employee';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;
