import React from 'react';
import '../styles/App.css';
import MainPage from './MainPage';
import Header from './Header';
import Navbar from './Navbar';
import Auth from './Auth';
import About from './About';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-grid'>
        <Header />
        <Navbar />
        <div className='app-grid-content'>
          <div id='block'>
          <Route path="/authorization" component={Auth} />
          <Route path="/main" component={MainPage} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </div>
    </BrowserRouter >
  );
}


export default App;