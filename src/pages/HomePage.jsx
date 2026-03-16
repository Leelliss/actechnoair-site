import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AC Technoair - Refrigeração, Climatização e Elétrica | São Paulo</title>
        <meta 
          name="description" 
          content="AC Technoair oferece serviços profissionais de instalação e manutenção de ar condicionado, refrigeração e instalações elétricas em São Paulo. Profissionais qualificados e dedicados." 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ServicesSection />
        <ProjectsGallery />
        <ContactSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;