import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.div 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-accent">Safe</span>
          <span className="ml-1">Trade</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('about.whoWeAre.content')}
            </motion.p>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('nav.title', 'Quick Links')}
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <li>
                <a href="#home" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  {t('nav.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#performance" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  {t('nav.performance')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  {t('nav.faq')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  {t('nav.contact')}
                </a>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('contact.getInTouch')}
            </motion.h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <MessageCircle className="text-accent mr-2" size={20} />
                <span className="text-gray-400">{t('contact.contactMethods.telegram')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent mr-2" size={20} />
                <span className="text-gray-400">{t('contact.contactMethods.whatsapp')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent mr-2" size={20} />
                <span className="text-gray-400">{t('contact.contactMethods.email')}</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Safe Trade. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;