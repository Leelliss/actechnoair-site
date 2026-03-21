import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#d4af37]/10 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(11) 91922-6481</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#d4af37]/10 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/_ac_technoair/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#d4af37] transition-colors"
                  >
                    @_ac_technoair
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#d4af37]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Localização</h4>
                  <p className="text-gray-600">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/message/3RVKBRJU7BPNI1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BD5C] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale pelo WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/_ac_technoair/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#333333] transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                <span>Acesse o Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
