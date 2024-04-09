import React from 'react'
// import {Article, Brand, CTA} from './components/Article'
import {Footer, Blog, Header, Features, Possibility, WhatGPT3} from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;
