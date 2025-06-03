import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../layout/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import LottieAnimation from '../animations/LottieAnimation';
import ParticlesBackground from '../animations/ParticlesBackground';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.5 
      } 
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <motion.div 
      className="mb-4 last:mb-0 border border-gray-700 rounded-xl overflow-hidden shadow-soft"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.button
        className={`w-full p-4 text-left flex justify-between items-center ${isOpen ? 'bg-primary/10' : 'bg-background-light'} hover:bg-primary/10 transition-colors duration-300`}
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-bold text-lg flex items-center">
          <motion.span 
            className="inline-block mr-2 text-accent"
            initial={false}
            animate={isOpen ? { y: [0, -2, 0] } : { y: 0 }}
            transition={{ repeat: isOpen ? Infinity : 0, repeatDelay: 1.5 }}
          >
            <HelpCircle size={18} />
          </motion.span>
          {question}
        </span>
        <motion.span 
          className="text-accent"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            className="bg-background-light/50 px-4 overflow-hidden"
          >
            <div className="py-4">
              <p className="text-gray-300">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: t('faq.questions.q1'),
      answer: t('faq.answers.a1'),
    },
    {
      question: t('faq.questions.q2'),
      answer: t('faq.answers.a2'),
    },
    {
      question: t('faq.questions.q3'),
      answer: t('faq.answers.a3'),
    },
    {
      question: t('faq.questions.q4'),
      answer: t('faq.answers.a4'),
    },
    {
      question: t('faq.questions.q5'),
      answer: t('faq.answers.a5'),
    },
    {
      question: t('faq.questions.q6'),
      answer: t('faq.answers.a6'),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <SectionContainer id="faq" className="bg-black relative overflow-hidden">
      {/* Dark particles background for consistency */}
      <ParticlesBackground variant="connections" color="#3B82F6" className="opacity-20" />
      
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10 pointer-events-none">
        <LottieAnimation 
          animationPath="https://assets8.lottiefiles.com/packages/lf20_qjosmr4w.json" 
          loop 
          autoplay 
        />
      </div>
      
      <div className="relative z-10">
        <ScrollReveal type="fade" direction="up">
          <SectionTitle 
            title={t('faq.title')} 
            subtitle={t('faq.subtitle')}
          />
        </ScrollReveal>

        <ScrollReveal type="fade" direction="up" delay={0.3} staggerChildren={0.1}>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => toggleFaq(index)}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    background: [
                      `radial-gradient(circle at ${20 + index * 15}% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)`,
                      `radial-gradient(circle at ${70 - index * 10}% 60%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)`,
                      `radial-gradient(circle at ${50 + index * 20}% 30%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)`
                    ]
                  }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/30 backdrop-blur-sm border border-blue-400/30 shadow-lg"
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-slate-300 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};

export default FaqSection;