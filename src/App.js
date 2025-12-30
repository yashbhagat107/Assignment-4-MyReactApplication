import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import UserInfo from './components/UserInfo';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;