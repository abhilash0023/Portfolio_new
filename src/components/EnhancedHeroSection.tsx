
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
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-500/10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)",
            "linear-gradient(225deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)",
            "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)"
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
              className="text-indigo-400 font-medium tracking-wider uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1
              variants={textVariants}
              className="text-6xl lg:text-8xl font-bold leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                Creative
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            variants={textVariants}
            className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl"
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
              className="group bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/25"
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
              className="border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
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
                className="group p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
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
            {/* Professional animated geometric shapes */}
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
              className="w-64 h-64 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 opacity-20 blur-xl"
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
              className="absolute inset-8 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-25 blur-lg"
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
              className="absolute inset-16 bg-gradient-to-r from-indigo-400 to-violet-600 opacity-30 rounded-lg blur-md"
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
          <span className="text-slate-400 text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-indigo-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
