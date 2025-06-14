
import React from 'react';
import { motion } from 'framer-motion';
import DownloadResume from './DownloadResume';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' }
  ];

  return (
    <section id="about" className="py-24 relative bg-gradient-to-br from-white via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 dark:border-slate-700/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Full-Stack Developer & Problem Solver
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                innovative web applications. I specialize in modern technologies like React, Node.js, 
                and cloud platforms, bringing ideas to life through clean, efficient, and scalable code.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                My journey spans diverse projects from e-commerce platforms to AI-powered applications. 
                I thrive on solving complex problems and am always eager to learn new technologies 
                and tackle challenging projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 text-center border border-blue-200/30 dark:border-blue-700/30"
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <DownloadResume />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-20 blur-2xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 opacity-30"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-16 rounded-full bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 opacity-60"
              />
              
              <div className="absolute inset-24 rounded-full bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
