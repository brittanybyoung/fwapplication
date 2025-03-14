import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import TheoryList from './theories/TheoryList';
import AddTheoriesPage from './pages/AddTheoriesPage';
import TheoryDetailsPage from './pages/TheoryDetailsPage';
import BookPage from './pages/BookPage';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<TheoryList />} />
          <Route path="/add" element={<AddTheoriesPage />} />
          <Route path="/theories/:id" element={<TheoryDetailsPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
