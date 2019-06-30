import React from 'react';
import '../styles/App.css';
import MainPage from './MainPage';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Authorization from './Authorization';
import About from './About';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/authorization" component={Authorization} />
          <Route path="/main" component={MainPage} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;