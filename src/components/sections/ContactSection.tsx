import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../layout/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import LottieAnimation from '../animations/LottieAnimation';
import GradientBackground from '../animations/GradientBackground';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    }
    
    if (!formState.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }
    
    if (!formState.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionContainer id="contact" className="relative overflow-hidden">
      <div className="relative z-10">
        <ScrollReveal type="fade" direction="up">
          <SectionTitle title={t('contact.title')} />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal type="slide" direction="left" delay={0.2}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="bg-background-light/50 backdrop-blur-sm p-6 rounded-2xl shadow-soft relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                <LottieAnimation 
                  animationPath="https://assets5.lottiefiles.com/packages/lf20_u8o7BL.json" 
                  loop 
                  autoplay 
                />
              </div>
              
              <motion.h3 
                className="text-2xl font-bold mb-6"
                variants={itemVariants}
              >
                {t('contact.getInTouch')}
              </motion.h3>
              
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <p className="text-gray-300 mb-6">{t('contact.description')}</p>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center mr-4 shadow-lg">
                      <Mail size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t('contact.email')}</p>
                      <p className="font-medium">info@safetrade.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm border border-green-400/30 flex items-center justify-center mr-4 shadow-lg">
                      <Phone size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t('contact.phone')}</p>
                      <p className="font-medium">+359 888 123 456</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center mr-4 shadow-lg">
                      <MapPin size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t('contact.address')}</p>
                      <p className="font-medium">Sofia, Bulgaria</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Professional Contact Visual */}
              <motion.div 
                className="bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl rounded-2xl h-48 flex items-center justify-center border border-slate-700/50 overflow-hidden relative shadow-2xl group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-40"
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.3) 0%, transparent 70%)"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="relative z-10 flex flex-col items-center space-y-4"
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/30 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(147, 51, 234, 0.4)",
                        "0 0 20px rgba(6, 182, 212, 0.3)"
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.svg 
                      className="w-8 h-8 text-blue-400" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </motion.svg>
                  </motion.div>
                  <motion.p 
                    className="text-blue-400 font-semibold text-lg"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Let's Connect
                  </motion.p>
                  <p className="text-slate-300 text-sm text-center max-w-xs">Ready to start your trading journey? We're here to guide you every step of the way.</p>
                </motion.div>
                
                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          </ScrollReveal>

        <ScrollReveal type="slide" direction="right" delay={0.4}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-background-light/50 backdrop-blur-sm p-6 rounded-2xl shadow-soft relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <LottieAnimation 
                animationPath="https://assets3.lottiefiles.com/packages/lf20_ystsffqy.json" 
                loop 
                autoplay 
              />
            </div>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.3, duration: 0.5, rotate: { repeat: 0, duration: 0.5 } }}
                  >
                    <Check size={32} />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {t('contact.form.success.title')}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {t('contact.form.success.message')}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div className="mb-4" variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-background border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300`}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div className="mb-4" variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-background border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300`}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div className="mb-6" variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 bg-background border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all duration-300`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send size={16} />}
                    >
                      {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
    </SectionContainer>
  );
};

export default ContactSection;