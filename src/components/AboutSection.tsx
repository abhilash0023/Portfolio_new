
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
            className="h-96 flex items-center justify-center"
          >
            {/* Enhanced 3D-like animated shape */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-48 h-48"
            >
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-40' 
                  : 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-60'
              } blur-xl rounded-full`} />
              <div 
                className={`absolute inset-4 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-60' 
                    : 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 opacity-80'
                } rounded-full`}
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              />
            </motion.div>
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
