import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import ParticlesBackground from '../animations/ParticlesBackground';
import GradientBackground from '../animations/GradientBackground';
import ScrollReveal from '../animations/ScrollReveal';

const AnimatedBackground = () => {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // Use effect to set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Don't render if not in browser or component not mounted
  if (!isBrowser || !isMounted || hasError) {
    return (
      <>
        {/* Fallback black background */}
        <div className="absolute inset-0 bg-black z-0"></div>
        {/* Dark particles for insane effect */}
        <ParticlesBackground variant="stars" color="#F97316" className="opacity-15" />
      </>
    );
  }
  
  try {
    return (
      <>
        {/* Black background for better contrast */}
        <div className="absolute inset-0 bg-black z-0"></div>
        
        <div className="absolute inset-0 z-10 opacity-90">
          <Canvas 
            camera={{ position: [0, 0, 10], fov: 45 }}
            onError={() => setHasError(true)}
            fallback={<div className="w-full h-full bg-black" />}
            style={{ background: 'transparent' }}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={3} color="#F97316" />
            <pointLight position={[-10, -10, -10]} intensity={2.5} color="#FF6B00" />
            <pointLight position={[0, 0, 15]} intensity={2} color="#F97316" />
            <spotLight position={[0, 20, 10]} intensity={4} angle={0.2} penumbra={0.8} color="#F97316" />
          </Canvas>
        </div>
        {/* Dark particles for insane effect */}
        <ParticlesBackground variant="stars" color="#F97316" className="opacity-15" />
      </>
    );
  } catch (error) {
    console.error('Canvas error:', error);
    setHasError(true);
    return (
      <>
        {/* Fallback black background */}
        <div className="absolute inset-0 bg-black z-0"></div>
        {/* Dark particles for insane effect */}
        <ParticlesBackground variant="stars" color="#F97316" className="opacity-15" />
      </>
    );
  }
};



const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-20">
        <ScrollReveal type="fade" direction="up" threshold={0.5}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-light to-accent">
                {t('home.hero.title')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                variant="accent" 
                size="lg" 
                icon={<ArrowRight />}
                iconPosition="right"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('common.getStarted')}
              </Button>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-accent transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="mb-2 text-sm">{t('common.learnMore')}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;