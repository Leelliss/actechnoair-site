import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

<a
  href="https://wa.me/5511933097406?text=Olá,%20gostaria%20de%20um%20orçamento."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-[#20BD5C] transition-all duration-300 hover:scale-110 z-50"
>
  <MessageCircle size={20} />
  WhatsApp
</a>
    </Router>
  );
}

export default App;
