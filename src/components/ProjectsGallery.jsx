import React from 'react';
import { motion } from 'framer-motion';

const ProjectsGallery = () => {
  const projects = [
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/96ba688e90649033e4bd0046a66a16b1.png',
      title: 'Iluminação de Banheiro',
      description: 'Instalação elétrica completa em banheiro residencial'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/96fb51b4a3b2fc5d62933e0a10138980.png',
      title: 'Ar Condicionado Split',
      description: 'Instalação de ar condicionado split residencial'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/61c9626711692ab07d1237c05ebb259e.png',
      title: 'Iluminação de Cozinha',
      description: 'Sistema de iluminação moderna para cozinha'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/7c3fd95b6cfe2418deaee17c71f73eeb.png',
      title: 'Controle de Ar Condicionado',
      description: 'Sistema de controle e automação de climatização'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/aa10ca8edca3c65ae9f90c770de0e48d.png',
      title: 'Unidade Externa de Ar Condicionado',
      description: 'Instalação profissional de condensadora externa'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/a6f94be0d34e694b436a3dc4d259f005.png',
      title: 'Ar Condicionado Midea',
      description: 'Instalação de sistema Midea de alta eficiência'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/eaf27527aefd66ea48558a949655d454.jpg',
      title: 'Painel Elétrico - ANTES',
      description: 'Estado anterior, um painel todo desorganizado'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/64142a8e-aceb-4c8c-9b7e-51c476def2cb/5436653be446c34d7f3c36ff01a64498.jpg',
      title: 'Painel Elétrico - DEPOIS',
      description: 'Painel elétrico profissional com componentes organizados e bem distribuídos'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projetos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Nossos Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos realizados pela AC Technoair
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#d4af37] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver detalhes
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;