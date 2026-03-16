import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Wind,
      title: 'Instalação de Ar Condicionado',
      description: 'Instalação profissional de sistemas de ar condicionado residenciais e comerciais. Trabalhamos com as melhores marcas do mercado, garantindo conforto térmico e eficiência energética.'
    },
    {
      icon: Zap,
      title: 'Instalações Elétricas',
      description: 'Projetos e execução de instalações elétricas residenciais, comerciais e industriais. Seguimos rigorosamente as normas de segurança e qualidade, garantindo sua tranquilidade.'
    },
    {
      icon: Wrench,
      title: 'Manutenção e Refrigeração',
      description: 'Manutenção preventiva e corretiva de sistemas de refrigeração e climatização. Equipe técnica qualificada para garantir o perfeito funcionamento dos seus equipamentos.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas em climatização, refrigeração e instalações elétricas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#d4af37] cursor-pointer"
              >
                <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;