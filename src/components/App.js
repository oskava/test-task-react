import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';

const App = () => {
   return (
     <div className='app-main'>
      <Header />
      <Navbar />
      <Content />
     </div>
   );
 }


export default App;