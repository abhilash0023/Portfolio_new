
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import AboutSection from '../components/AboutSection';
import ProfessionalSkillsSection from '../components/ProfessionalSkillsSection';
import EnhancedProjectsSection from '../components/EnhancedProjectsSection';
import ContactSection from '../components/ContactSection';
import SocialLinks from '../components/SocialLinks';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';
import ParticlesBackground from '../components/ParticlesBackground';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.8
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`min-h-screen ${isDark ? 'dark bg-slate-900' : 'bg-white'} transition-all duration-500 relative overflow-x-hidden`}
    >
      {/* Enhanced Interactive Particles Background */}
      <ParticlesBackground isDark={isDark} />
      
      <div className="relative z-10">
        <Navigation isDark={isDark} />
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <EnhancedHeroSection />
            <AboutSection />
            <ProfessionalSkillsSection />
            <EnhancedProjectsSection />
            <SocialLinks isDark={isDark} />
            <ContactSection />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Index;
