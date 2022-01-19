import logo from './logo.svg';
import './App.css';
import Manage  from "./components/login/manage"

import AccountProvider from './contextapi/accountprovider';

import React from 'react'

function App() {
  return (
< AccountProvider>
    <Manage/>
    </AccountProvider>
    // <ChatBox/>
  )
}

export default App;
