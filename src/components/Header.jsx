import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a1a1a] shadow-lg py-3' 
          : 'bg-[#1a1a1a]/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <h1 className="text-2xl font-bold text-[#d4af37]">AC Technoair</h1>
              <p className="text-xs text-white/80">Refrigeração, Climatização e Elétrica</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contato')}
            className="hidden md:block bg-[#d4af37] text-[#1a1a1a] px-6 py-2 rounded-md font-semibold hover:bg-[#c4a037] transition-all duration-300 hover:scale-105"
          >
            Orçamento
          </button>

          <button
            onClick={() => {
              const nav = document.getElementById('mobile-menu');
              nav.classList.toggle('hidden');
            }}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('mobile-menu').classList.add('hidden');
              }}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('servicos');
                document.getElementById('mobile-menu').classList.add('hidden');
              }}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => {
                scrollToSection('projetos');
                document.getElementById('mobile-menu').classList.add('hidden');
              }}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => {
                scrollToSection('contato');
                document.getElementById('mobile-menu').classList.add('hidden');
              }}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;