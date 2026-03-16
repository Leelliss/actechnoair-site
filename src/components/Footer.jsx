import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
const Footer = () => {
  const scrollToSection = sectionId => {
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
  return <footer className="bg-[#1a1a1a] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-3">AC Technoair</h3>
            <p className="text-sm text-white/80 mb-4">
              Refrigeração, Climatização e Elétrica
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Profissionais qualificados e dedicados em oferecer as melhores soluções para sua casa ou empresa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <button onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })} className="block text-white/80 hover:text-[#d4af37] transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('servicos')} className="block text-white/80 hover:text-[#d4af37] transition-colors duration-300">
                Serviços
              </button>
              <button onClick={() => scrollToSection('projetos')} className="block text-white/80 hover:text-[#d4af37] transition-colors duration-300">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contato')} className="block text-white/80 hover:text-[#d4af37] transition-colors duration-300">
                Contato
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#d4af37]" />
                <span className="text-white/80 text-sm">(11) 93309-7406</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#d4af37]" />
                <span className="text-white/80 text-sm">actechnoair@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Redes Sociais</h4>
            <p className="text-sm text-white/70 mb-4">
              Siga-nos no Instagram e fique por dentro das novidades
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_ac_technoair/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#d4af37] transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} AC Technoair. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;