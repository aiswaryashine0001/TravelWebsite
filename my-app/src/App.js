// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; 
import Footer from './components/Footer';
import Book from './components/Book'; 
import BudgetTracker from './components/BudgetTracker';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/home" element={<Home />} />
          <Route path="/budget-tracker" element={<BudgetTracker />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
