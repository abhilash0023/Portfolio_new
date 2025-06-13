
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const downloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
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
            {/* Animated gradient shape instead of 3D avatar */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-48 h-48 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-lg"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I'm a passionate full-stack developer with a love for creating innovative
              web applications. With expertise in modern technologies like React, Node.js,
              and cloud platforms, I bring ideas to life through clean, efficient code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              My journey in software development spans over 5 years, during which I've
              worked on diverse projects ranging from e-commerce platforms to AI-powered
              applications. I'm always eager to learn new technologies and tackle
              challenging problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
