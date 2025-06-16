
import React from 'react';
import { motion } from 'framer-motion';
import DownloadResume from './DownloadResume';

interface AboutSectionProps {
  isDark?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDark = false }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
      }`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className={`absolute inset-0 rounded-2xl blur-xl ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20'
                    : 'bg-gradient-to-r from-blue-400/30 via-indigo-500/30 to-purple-500/30'
                }`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: isDark ? [0.2, 0.3, 0.2] : [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src="/lovable-uploads/54428ba1-b9d4-41a8-9678-799fdfc44b9e.png"
                alt="Developer"
                className={`relative w-80 h-96 object-cover rounded-2xl border-4 shadow-2xl ${
                  isDark 
                    ? 'border-gray-700 shadow-blue-900/50'
                    : 'border-white shadow-blue-200/50'
                }`}
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className={`absolute -inset-2 rounded-2xl border-2 ${
                  isDark ? 'border-blue-500/20' : 'border-blue-400/30'
                }`}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`backdrop-blur-sm rounded-xl p-6 border shadow-lg ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700/50' 
                  : 'bg-white/90 border-blue-200/70 shadow-blue-100/50'
              }`}
            >
              <p className={`text-lg leading-relaxed font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                I'm a passionate full-stack developer with a love for creating innovative
                web applications. With expertise in modern technologies like React, Node.js,
                and cloud platforms, I bring ideas to life through clean, efficient code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`backdrop-blur-sm rounded-xl p-6 border shadow-lg ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700/50' 
                  : 'bg-white/90 border-blue-200/70 shadow-blue-100/50'
              }`}
            >
              <p className={`text-lg leading-relaxed font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                My journey in software development spans over 5 years, during which I've
                worked on diverse projects ranging from e-commerce platforms to AI-powered
                applications. I'm always eager to learn new technologies and tackle
                challenging problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <DownloadResume />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
