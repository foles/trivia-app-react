import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import './index.css';
import App from './App';

import Footer from './Footer';
import Categories from './components/categories/Categories';
import Questions from './components/questions/Questions';
import Quiz from './components/quiz/Quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/home" element={<App />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);


