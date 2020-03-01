import React from 'react';
import './App.css';

import {Header} from './components/Header'

import { DepensesList } from './components/DepensesList'

import { AjoutDepense } from './components/AjoutDepense';

import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>

     <Header/>
     
     <div className="container">

     <DepensesList />

     <AjoutDepense />

     </div>

     </GlobalProvider>

  );
}

export default App;
