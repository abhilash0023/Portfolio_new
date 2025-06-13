
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import SocialLinks from '../components/SocialLinks';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';
import ParticlesBackground from '../components/ParticlesBackground';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'} transition-all duration-500 relative overflow-x-hidden`}>
      {/* Interactive Particles Background */}
      <ParticlesBackground isDark={isDark} />
      
      <div className="relative z-10">
        <Navigation isDark={isDark} />
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <SocialLinks isDark={isDark} />
            <ContactSection />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
