import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    const phoneRegex = /^\(?[1-9]{2}\)?\s?9?\s?\d{4}-?\d{4}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Telefone inválido';
    }
    if (!formData.serviceType) {
      newErrors.serviceType = 'Selecione um serviço';
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const budgets = JSON.parse(localStorage.getItem('budgets') || '[]');
        budgets.push({
          ...formData,
          id: Date.now(),
          date: new Date().toISOString()
        });
        localStorage.setItem('budgets', JSON.stringify(budgets));
        toast({
          title: 'Orçamento enviado com sucesso!',
          description: 'Entraremos em contato em breve.',
          duration: 5000
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
        setErrors({});
      } catch (error) {
        toast({
          title: 'Erro ao enviar orçamento',
          description: 'Tente novamente mais tarde.',
          variant: 'destructive',
          duration: 5000
        });
      }
    } else {
      toast({
        title: 'Erro no formulário',
        description: 'Por favor, corrija os campos destacados.',
        variant: 'destructive',
        duration: 5000
      });
    }
  };
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  return <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#d4af37]/10 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(11) 93309-7406</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#d4af37]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Email</h4>
                  <p className="text-gray-600">actechnoair@gmail.com</p>
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

            <a href="https://wa.me/5511933097406" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BD5C] transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              <span>Fale pelo WhatsApp</span>
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              Solicite um Orçamento
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all text-gray-900 bg-white`} placeholder="Seu nome" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all text-gray-900 bg-white`} placeholder="seu@email.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all text-gray-900 bg-white`} placeholder="(11) 99999-9999" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Serviço *
                </label>
                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.serviceType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all text-gray-900 bg-white`}>
                  <option value="">Selecione um serviço</option>
                  <option value="instalacao-ar">Instalação de Ar Condicionado</option>
                  <option value="instalacao-eletrica">Instalações Elétricas</option>
                  <option value="manutencao">Manutenção e Refrigeração</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all resize-none text-gray-900 bg-white`} placeholder="Descreva seu projeto ou necessidade" />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full bg-[#d4af37] text-[#1a1a1a] px-6 py-3 rounded-lg font-semibold hover:bg-[#c4a037] transition-all duration-300 hover:scale-105">
                Enviar Orçamento
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;