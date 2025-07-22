import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Dashboard from './Admin/AdminPage/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
