import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const TradingRoom = lazy(() => import('@/pages/TradingRoom'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participant/:id" element={<TradingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
