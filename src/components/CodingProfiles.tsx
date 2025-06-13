
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      username: '@johndoe',
      url: '#',
      color: 'from-orange-500 to-yellow-500',
      icon: '🧠',
      stats: '500+ Problems Solved'
    },
    {
      name: 'HackerRank',
      username: '@johndoe123',
      url: '#',
      color: 'from-green-500 to-emerald-500',
      icon: '⚡',
      stats: '5★ Algorithm Badge'
    },
    {
      name: 'Codeforces',
      username: '@john_doe',
      url: '#',
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀',
      stats: 'Expert (1600+ Rating)'
    },
    {
      name: 'GitHub',
      username: '@johndoe',
      url: '#',
      color: 'from-gray-600 to-gray-800',
      icon: '💻',
      stats: '100+ Repositories'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="coding-profiles" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Coding <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey across various competitive programming platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {profiles.map((profile, index) => (
            <motion.div key={profile.name} variants={itemVariants}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="text-4xl mb-4"
                  >
                    {profile.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {profile.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-3 font-mono text-sm">
                    {profile.username}
                  </p>
                  
                  <div className={`bg-gradient-to-r ${profile.color} p-0.5 rounded-lg mb-4`}>
                    <div className="bg-gray-800 rounded-lg p-2">
                      <p className="text-white text-sm font-semibold">
                        {profile.stats}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${profile.color} text-white py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    View Profile
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
