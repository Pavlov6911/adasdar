import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GradientBackground from '../animations/GradientBackground';
import ParticlesBackground from '../animations/ParticlesBackground';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Dark theme background with subtle animations */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-5">
          <GradientBackground 
            variant="mesh" 
            colors={['#1a1a1a', '#0a0a0a', '#2a2a2a', '#1f1f1f']}
            animate={true}
            speed={3}
            className="w-full h-full"
          />
        </div>
        {/* Animated particles for insane dark theme effect */}
         <div className="absolute inset-0 opacity-20">
           <ParticlesBackground 
             variant="connections"
             color="#F97316"
             className="w-full h-full"
           />
         </div>
        {/* Subtle orange accent overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 animate-pulse" />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;