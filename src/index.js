import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import './index.css';
import App from './App';

import Footer from './Footer';
import Categories from './components/categories/Categories';
import Questions from './components/questions/Questions';
import Quiz from './components/quiz/Quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/home" element={<App />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);


