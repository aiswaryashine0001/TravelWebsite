// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; // Adjust the path if necessary
import Footer from './components/Footer';
import Book from './components/Book'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
