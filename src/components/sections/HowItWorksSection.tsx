import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../layout/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import { UserPlus, CheckCircle, Lock, LineChart, DollarSign } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import GsapAnimation from '../animations/GsapAnimation';
import LottieAnimation from '../animations/LottieAnimation';
import GradientBackground from '../animations/GradientBackground';

const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('howItWorks.steps.step1.title'),
      content: t('howItWorks.steps.step1.content'),
      icon: <UserPlus size={32} />,
    },
    {
      title: t('howItWorks.steps.step2.title'),
      content: t('howItWorks.steps.step2.content'),
      icon: <CheckCircle size={32} />,
    },
    {
      title: t('howItWorks.steps.step3.title'),
      content: t('howItWorks.steps.step3.content'),
      icon: <Lock size={32} />,
    },
    {
      title: t('howItWorks.steps.step4.title'),
      content: t('howItWorks.steps.step4.content'),
      icon: <LineChart size={32} />,
    },
    {
      title: t('howItWorks.steps.step5.title'),
      content: t('howItWorks.steps.step5.content'),
      icon: <DollarSign size={32} />,
    },
  ];

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
    <SectionContainer id="how-it-works" className="relative overflow-hidden">
      <div className="relative z-10">
        <ScrollReveal type="fade" direction="up">
          <SectionTitle title={t('howItWorks.title')} />
        </ScrollReveal>

        <GsapAnimation 
          type="timeline"
          scrollTrigger
          markers={false}
          scrub={0.5}
          pin={false}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step, index) => (
              <ScrollReveal 
                key={index} 
                type="slide" 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={index * 0.1}
              >
                <motion.div
                  className="flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Connecting line between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-1 h-12 md:left-8 md:h-24 bg-gradient-to-b from-accent to-transparent z-0 hidden md:block" />
                  )}
                  
                  <motion.div 
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-xl border border-slate-600/50 flex items-center justify-center mb-4 md:mb-0 md:mr-6 relative z-10 shadow-2xl"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 15,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.div
                      className="text-blue-400"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {step.icon}
                    </motion.div>
                    <motion.span 
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      {index + 1}
                    </motion.span>
                  </motion.div>
                  
                  <div className="md:ml-4">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      whileHover={{ color: "#6d28d9", x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-gray-300">{step.content}</p>
                    
                    {/* Professional step visualization */}
                    <motion.div 
                      className="mt-6 rounded-2xl h-40 w-full md:w-96 overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl relative group"
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Animated background pattern */}
                      <motion.div 
                        className="absolute inset-0 opacity-30"
                        animate={{
                          background: [
                            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
                          ]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <div className="relative z-10 h-full flex items-center justify-center p-6">
                        {index === 0 && (
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div 
                              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30"
                              animate={{ 
                                rotateY: [0, 180, 360],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <UserPlus size={28} className="text-blue-400" />
                            </motion.div>
                            <h4 className="text-lg font-semibold text-white mb-2">Account Setup</h4>
                            <p className="text-sm text-slate-300">Quick and secure registration process</p>
                          </motion.div>
                        )}
                        {index === 1 && (
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <motion.div 
                              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-500/20 flex items-center justify-center border border-green-400/30"
                              animate={{ 
                                rotate: [0, 360],
                                boxShadow: [
                                  "0 0 20px rgba(34, 197, 94, 0.3)",
                                  "0 0 40px rgba(34, 197, 94, 0.5)",
                                  "0 0 20px rgba(34, 197, 94, 0.3)"
                                ]
                              }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                              <CheckCircle size={28} className="text-green-400" />
                            </motion.div>
                            <h4 className="text-lg font-semibold text-white mb-2">Verification</h4>
                            <p className="text-sm text-slate-300">Identity confirmation and compliance</p>
                          </motion.div>
                        )}
                        {index === 2 && (
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <motion.div 
                              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-400/30"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotateZ: [0, 10, -10, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Lock size={28} className="text-purple-400" />
                            </motion.div>
                            <h4 className="text-lg font-semibold text-white mb-2">Secure Access</h4>
                            <p className="text-sm text-slate-300">Protected trading environment setup</p>
                          </motion.div>
                        )}
                        {index === 3 && (
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <motion.div 
                              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30"
                              animate={{ 
                                rotateX: [0, 180, 360],
                                y: [0, -5, 0]
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <LineChart size={28} className="text-cyan-400" />
                            </motion.div>
                            <h4 className="text-lg font-semibold text-white mb-2">Live Trading</h4>
                            <p className="text-sm text-slate-300">Real-time market analysis and execution</p>
                          </motion.div>
                        )}
                        {index === 4 && (
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, rotate: -10 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <motion.div 
                              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-400/30"
                              animate={{ 
                                scale: [1, 1.15, 1],
                                rotate: [0, 5, -5, 0],
                                boxShadow: [
                                  "0 0 20px rgba(234, 179, 8, 0.3)",
                                  "0 0 30px rgba(234, 179, 8, 0.5)",
                                  "0 0 20px rgba(234, 179, 8, 0.3)"
                                ]
                              }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <DollarSign size={28} className="text-yellow-400" />
                            </motion.div>
                            <h4 className="text-lg font-semibold text-white mb-2">Profit Distribution</h4>
                            <p className="text-sm text-slate-300">Transparent 50/50 profit sharing</p>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Hover glow effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </GsapAnimation>
      </div>
    </SectionContainer>
  );
};

export default HowItWorksSection;