import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../layout/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Shield, TrendingUp, Users, BarChart4, Percent } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import GradientBackground from '../animations/GradientBackground';
import ThreeDAnimation from '../animations/ThreeDAnimation';
import LottieAnimation from '../animations/LottieAnimation';
import businessPresentation from '../../assets/business-presentation.svg';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('about.whoWeAre.title'),
      content: t('about.whoWeAre.content'),
      icon: <Users size={36} />,
    },
    {
      title: t('about.approach.title'),
      content: t('about.approach.content'),
      icon: <TrendingUp size={36} />,
    },
    {
      title: t('about.partnership.title'),
      content: t('about.partnership.content'),
      icon: <BarChart4 size={36} />,
    },
    {
      title: t('about.profitSharing.title'),
      content: t('about.profitSharing.content'),
      icon: <Percent size={36} />,
    },
    {
      title: t('about.transparency.title'),
      content: t('about.transparency.content'),
      icon: <Shield size={36} />,
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

  return (
    <SectionContainer id="about" className="relative overflow-hidden">
      <div className="relative z-10">
        <ScrollReveal type="fade" direction="up">
          <SectionTitle 
            title={t('about.title')} 
            subtitle="Safe Trade is a collective of expert traders, recognized for elite strategies and consistent performance."
          />
        </ScrollReveal>
        
        <ScrollReveal type="fade" direction="up" delay={0.3} staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                title={feature.title}
                icon={feature.icon}
                delay={index}
                className="h-full"
              >
                <p className="text-gray-300">{feature.content}</p>
                
                {/* Professional animated visual elements */}
                <motion.div 
                  className="mt-6 rounded-2xl h-48 overflow-hidden bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl relative group"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))",
                        "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(225deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Content based on feature type */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                    {index === 0 && (
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Users size={32} className="text-blue-400" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                        <p className="text-sm text-slate-300">Professional traders with proven track records</p>
                      </motion.div>
                    )}
                    {index === 1 && (
                      <div className="w-full h-full flex items-center justify-center">
                        <motion.img 
                          src={businessPresentation} 
                          alt="Business presentation" 
                          className="w-full h-full object-contain filter brightness-110"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}
                    {index === 2 && (
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <BarChart4 size={32} className="text-purple-400" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">Strategic Partnership</h4>
                        <p className="text-sm text-slate-300">Collaborative approach to wealth building</p>
                      </motion.div>
                    )}
                    {index === 3 && (
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                          animate={{ rotateY: [0, 180, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Percent size={32} className="text-green-400" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">Fair Profit Sharing</h4>
                        <p className="text-sm text-slate-300">50/50 split ensures aligned interests</p>
                      </motion.div>
                    )}
                    {index === 4 && (
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center"
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(6, 182, 212, 0.3)",
                              "0 0 40px rgba(6, 182, 212, 0.5)",
                              "0 0 20px rgba(6, 182, 212, 0.3)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Shield size={32} className="text-cyan-400" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">Full Transparency</h4>
                        <p className="text-sm text-slate-300">Complete visibility into all trading activities</p>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;