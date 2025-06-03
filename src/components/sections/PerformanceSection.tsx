import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../layout/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import GsapAnimation from '../animations/GsapAnimation';
import LottieAnimation from '../animations/LottieAnimation';

// Dummy data for the performance chart
const performanceData = [
  { month: 'Jan', profit: 5 },
  { month: 'Feb', profit: 8 },
  { month: 'Mar', profit: 7 },
  { month: 'Apr', profit: 12 },
  { month: 'May', profit: 10 },
  { month: 'Jun', profit: 15 },
  { month: 'Jul', profit: 18 },
  { month: 'Aug', profit: 14 },
  { month: 'Sep', profit: 20 },
  { month: 'Oct', profit: 22 },
  { month: 'Nov', profit: 25 },
  { month: 'Dec', profit: 30 },
];

// Dummy testimonials data
const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Investor',
    content: 'I\'ve been with Safe Trade for 6 months and the results have been consistently impressive. Their transparent approach gives me confidence in my investment.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Business Owner',
    content: 'The 50/50 profit sharing model is fair and motivating. I appreciate how they only make money when I do. Their focus on XAUUSD has been particularly profitable.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Retired Professional',
    content: 'After trying several trading services, Safe Trade stands out for their expertise and communication. I can monitor my account anytime and the returns have been excellent.',
    rating: 4,
  },
  {
    name: 'Sarah Williams',
    role: 'Financial Advisor',
    content: 'As someone in the financial industry, I appreciate their risk management approach. The specialized focus on specific markets shows their strategic thinking.',
    rating: 5,
  },
];

const PerformanceSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <SectionContainer id="performance" className="">
      <ScrollReveal type="fade" direction="up">
        <SectionTitle title={t('performance.title')} />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal type="slide" direction="left" delay={0.2}>
          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <LottieAnimation 
                animationPath="https://assets9.lottiefiles.com/packages/lf20_l4fgppor.json" 
                loop 
                autoplay 
              />
            </div>
            
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <GsapAnimation type="fade" scrollTrigger={true} start="top 80%">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative z-10">{t('performance.historicalPerformance')}</h3>
              
              <div className="h-80 relative z-10" id="performance-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
                    <YAxis stroke="#94A3B8" fontSize={12} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.3} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                        borderColor: '#475569', 
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                      }}
                      itemStyle={{ color: '#F1F5F9', fontWeight: '500' }}
                      labelStyle={{ color: '#3B82F6', fontWeight: 'bold' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="#3B82F6" 
                      fillOpacity={1} 
                      fill="url(#colorProfit)" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Enhanced Animated Performance Visual */}
              <div className="mt-6 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-xl h-40 flex items-center justify-center border border-slate-600/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-60"></div>
                <motion.div 
                  className="relative z-10 flex items-center space-x-8"
                  animate={{ 
                    x: [0, 15, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 flex items-center justify-center mb-2 border border-slate-500/30"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 30px rgba(147, 51, 234, 0.4)",
                          "0 0 20px rgba(6, 182, 212, 0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                    </motion.div>
                    <span className="text-blue-400 text-sm font-semibold">Live Data</span>
                  </div>
                  <div className="flex space-x-2">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 rounded-full"
                        style={{ 
                          height: Math.random() * 35 + 15,
                          background: `linear-gradient(to top, #3B82F6, #8B5CF6, #06B6D4)`
                        }}
                        animate={{ 
                          height: [Math.random() * 35 + 15, Math.random() * 45 + 20, Math.random() * 35 + 15],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2.5 + i * 0.3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </GsapAnimation>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal type="slide" direction="right" delay={0.4}>
          <div className="bg-background-light p-6 rounded-2xl shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
              <LottieAnimation 
                animationPath="https://assets5.lottiefiles.com/packages/lf20_jhlaooj5.json" 
                loop 
                autoplay 
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-6">{t('performance.clientTestimonials')}</h3>
            
            <div className="relative h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  variants={testimonialVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-background-light p-6 rounded-2xl shadow-inner h-full flex flex-col"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic flex-grow">"{testimonials[currentTestimonial].content}"</p>
                  
                  <div className="mt-4">
                    <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <motion.button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-background hover:bg-primary/20 text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-background hover:bg-primary/20 text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${currentTestimonial === index ? 'bg-accent' : 'bg-gray-600'}`}
                  whileHover={{ scale: 1.2 }}
                  animate={currentTestimonial === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={currentTestimonial === index ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}                  
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};

export default PerformanceSection;