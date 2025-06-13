
import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/20'
    },
    {
      name: 'GitHub',
      url: '#',
      icon: '🐱',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-500/20'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: '📸',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-500/20'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: '📺',
      color: 'hover:text-red-400',
      bgColor: 'hover:bg-red-500/20'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '🐦',
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-500/20'
    }
  ];

  return (
    <section id="social-links" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">With Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's stay connected across all platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8 flex-wrap gap-6"
        >
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className={`group relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-400 ${platform.color} ${platform.bgColor} transition-all duration-300 shadow-lg hover:shadow-xl hover:border-gray-600`}
            >
              <motion.span 
                className="text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                {platform.icon}
              </motion.span>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: -5 }}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap border border-gray-700"
              >
                {platform.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
