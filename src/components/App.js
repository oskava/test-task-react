import React from 'react';
import '../styles/App.css';
import MainPage from './MainPage';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Authorization from './Authorization';
import About from './About';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <MainPage />
      </div>
      {/*<Content />
             <Authorization />
         <About />*/}
    </div>
  );
}


export default App;