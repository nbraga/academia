import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Header from './componentes/Herder/index'
import Footer from './componentes/Footer/index'

import Routes from './Routes'

import './App.css'

 function App(){
  return (
  <BrowserRouter>
   <Header />

   <Routes/>

   <Footer />
  </BrowserRouter>
   
  );
}

export default App;