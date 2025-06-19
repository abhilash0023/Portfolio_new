
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

interface EnhancedHeroSectionProps {
  isDark?: boolean;
}

const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ isDark = false }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
      }`} />
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 to-blue-600 opacity-30' 
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 opacity-40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: isDark ? [0.3, 0.7, 0.3] : [0.4, 0.8, 0.4],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-8"
        >
          <motion.div variants={textVariants} className="space-y-4">
            <motion.p
              variants={textVariants}
              className={`font-medium tracking-wider uppercase text-sm ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1
              variants={textVariants}
              className="text-6xl lg:text-8xl font-bold leading-tight"
            >
              <span className={`block bg-gradient-to-r ${
                isDark 
                  ? 'from-white via-gray-200 to-white' 
                  : 'from-gray-900 via-gray-700 to-gray-900'
              } bg-clip-text text-transparent`}>
                I'M ABHI
              </span>
              <span className={`block bg-gradient-to-r ${
                isDark 
                  ? 'from-blue-600 via-blue-500 to-blue-700' 
                  : 'from-blue-600 via-indigo-600 to-purple-600'
              } bg-clip-text text-transparent`}>
                Developer
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            variants={textVariants}
            className={`text-xl lg:text-2xl leading-relaxed max-w-2xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Building exceptional digital solutions with modern technologies,
            clean architecture, and user-focused design principles.
          </motion.p>
          
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className={`group px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-blue-500/25'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:shadow-indigo-500/25'
              }`}
            >
              <span className="flex items-center gap-3">
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ${
                isDark 
                  ? 'border-2 border-blue-500/50 text-blue-400 hover:bg-blue-50/10 hover:border-blue-400'
                  : 'border-2 border-blue-500/50 text-blue-600 hover:bg-blue-50 hover:border-blue-600'
              }`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textVariants}
            className="flex justify-center lg:justify-start space-x-6 pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/abhilash0023", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abhilash-k-302361283", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`group p-3 rounded-lg backdrop-blur-sm border transition-all duration-300 shadow-md ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/60 hover:border-blue-500' 
                    : 'bg-white/90 border-blue-200 hover:bg-blue-50 hover:border-blue-400 shadow-blue-100/50'
                }`}
              >
                <social.icon className={`w-6 h-6 transition-colors ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-blue-400' 
                    : 'text-gray-600 group-hover:text-blue-600'
                }`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Developer Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center items-center relative"
        >
          <div className="relative">
            <motion.div
              className={`absolute inset-0 rounded-full blur-2xl ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20'
                  : 'bg-gradient-to-r from-blue-400/30 via-indigo-500/30 to-purple-500/30'
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: isDark ? [0.2, 0.4, 0.2] : [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="/lovable-uploads/4b0f87c4-b2dd-4ae0-bb31-58d81a02ac0b.png"
              alt="Abhi"
              className={`relative w-80 h-80 object-cover rounded-full border-4 shadow-2xl ${
                isDark 
                  ? 'border-gray-700 shadow-blue-900/50'
                  : 'border-white shadow-blue-200/50'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className={`absolute -inset-4 rounded-full border-2 ${
                isDark ? 'border-blue-500/30' : 'border-blue-400/40'
              }`}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Scroll Down</span>
          <ChevronDown className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
