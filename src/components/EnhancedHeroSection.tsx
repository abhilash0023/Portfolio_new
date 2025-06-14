
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

const EnhancedHeroSection = () => {
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
      {/* Clean white to light blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-blue-200/30"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 197, 253, 0.1) 100%)",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 197, 253, 0.1) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 197, 253, 0.1) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
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
              className="text-blue-600 font-medium tracking-wider uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1
              variants={textVariants}
              className="text-6xl lg:text-8xl font-bold leading-tight"
            >
              <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Creative
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            variants={textVariants}
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl"
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
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
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
              className="border-2 border-blue-500/50 text-blue-600 hover:bg-blue-50 hover:border-blue-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
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
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md"
              >
                <social.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Professional Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center items-center h-96"
        >
          <div className="relative">
            {/* Clean geometric shapes with light blue theme */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-64 h-64 rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-8 rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-25 blur-lg"
            />
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-16 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 rounded-lg blur-md"
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
          <span className="text-gray-600 text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
