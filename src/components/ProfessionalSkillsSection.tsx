
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ProfessionalSkillsSectionProps {
  isDark?: boolean;
}

const ProfessionalSkillsSection: React.FC<ProfessionalSkillsSectionProps> = ({ isDark = false }) => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "JavaScript (ES6+)", level: 95, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🧡" },
        { name: "CSS3", level: 95, icon: "🔵" },
        { name: "Bootstrap", level: 90, icon: "🅱️" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟩" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "REST APIs", level: 90, icon: "🔗" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "📝" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS Cloud", level: 70, icon: "☁️" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut" as const,
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background with proper dark/light mode support */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-white'
      }`} />
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: isDark ? [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(147, 197, 253, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, rgba(96, 165, 250, 0.15) 0%, transparent 50%)"
          ] : [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`bg-gradient-to-r ${
              isDark 
                ? 'from-white via-gray-200 to-white'
                : 'from-black via-gray-800 to-black'
            } bg-clip-text text-transparent`}>
              Technical Expertise
            </span>
          </motion.h2>
          <motion.p 
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive overview of my technical skills and proficiency levels
            across modern web development technologies.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3 
                className={`text-2xl font-bold mb-6 text-center relative ${
                  isDark ? 'text-white' : 'text-black'
                }`}
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {category.category}
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </motion.h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group"
                  >
                    <Card className={`border transition-all duration-300 backdrop-blur-md group-hover:border-blue-300 shadow-lg hover:shadow-blue-500/25 ${
                      isDark 
                        ? 'bg-gray-800/90 border-gray-700 hover:bg-gray-800/95'
                        : 'bg-white/80 border-gray-200 hover:bg-white/90'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl filter drop-shadow-lg">{skill.icon}</span>
                            <h4 className={`font-semibold text-lg ${
                              isDark ? 'text-white' : 'text-black'
                            }`}>{skill.name}</h4>
                          </div>
                          <span className="text-blue-600 font-bold text-lg">{skill.level}%</span>
                        </div>
                        
                        <div className={`relative h-3 rounded-full overflow-hidden ${
                          isDark ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg"
                            variants={skillBarVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Coding Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className={`text-4xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-6">
            {[
              { name: "LeetCode", icon: "🧩", url: "#", solved: "500+", color: "from-blue-400 to-blue-600" },
              { name: "HackerRank", icon: "👨‍💻", url: "#", level: "5⭐", color: "from-blue-500 to-blue-700" },
              { name: "Codeforces", icon: "🏆", url: "#", rating: "1800+", color: "from-blue-400 to-blue-500" },
              { name: "CodeChef", icon: "👨‍🍳", url: "#", stars: "4⭐", color: "from-blue-600 to-blue-800" }
            ].map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group backdrop-blur-md border rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 ${
                  isDark 
                    ? 'bg-gray-800/90 border-gray-700 hover:bg-gray-800/95 hover:border-blue-300'
                    : 'bg-white/80 border-gray-200 hover:bg-white/90 hover:border-blue-300'
                }`}
              >
                <div className="text-4xl mb-3 filter drop-shadow-lg">{profile.icon}</div>
                <div className={`font-semibold text-lg ${
                  isDark ? 'text-white' : 'text-black'
                }`}>{profile.name}</div>
                <div className={`text-transparent bg-gradient-to-r ${profile.color} bg-clip-text font-bold`}>
                  {profile.solved || profile.level || profile.rating || profile.stars}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;
