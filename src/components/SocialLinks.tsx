
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, Youtube, Twitter } from 'lucide-react';

interface SocialLinksProps {
  isDark: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isDark }) => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: Linkedin,
      color: isDark ? 'hover:text-blue-400' : 'hover:text-blue-600',
      bgColor: isDark ? 'hover:bg-blue-500/20' : 'hover:bg-blue-100'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/johndoe',
      icon: Github,
      color: isDark ? 'hover:text-gray-300' : 'hover:text-gray-700',
      bgColor: isDark ? 'hover:bg-gray-500/20' : 'hover:bg-gray-200'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/johndoe',
      icon: Instagram,
      color: isDark ? 'hover:text-pink-400' : 'hover:text-pink-600',
      bgColor: isDark ? 'hover:bg-pink-500/20' : 'hover:bg-pink-100'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@johndoe',
      icon: Youtube,
      color: isDark ? 'hover:text-red-400' : 'hover:text-red-600',
      bgColor: isDark ? 'hover:bg-red-500/20' : 'hover:bg-red-100'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/johndoe',
      icon: Twitter,
      color: isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600',
      bgColor: isDark ? 'hover:bg-cyan-500/20' : 'hover:bg-cyan-100'
    }
  ];

  return (
    <section id="social-links" className="py-20 relative">
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50'
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
            Connect <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">With Me</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
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
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
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
                className={`group relative w-16 h-16 flex items-center justify-center rounded-full ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700/50 text-gray-400' 
                    : 'bg-white/80 border-gray-300/50 text-gray-600'
                } backdrop-blur-sm border ${platform.color} ${platform.bgColor} transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isDark ? 'hover:border-gray-600' : 'hover:border-gray-400'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <IconComponent size={24} />
                </motion.div>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  className={`absolute -top-10 left-1/2 transform -translate-x-1/2 ${
                    isDark ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
                  } px-3 py-1 rounded text-sm font-medium whitespace-nowrap border shadow-lg`}
                >
                  {platform.name}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent ${
                    isDark ? 'border-t-gray-900' : 'border-t-white'
                  }`}></div>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
