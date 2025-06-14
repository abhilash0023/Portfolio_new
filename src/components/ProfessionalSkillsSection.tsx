
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProfessionalSkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, icon: "⚛️" },
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
      {/* Enhanced Background with better gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30"
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
            <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
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
                className="text-2xl font-bold text-white mb-6 text-center relative"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {category.category}
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
              </motion.h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group"
                  >
                    <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-md group-hover:border-indigo-400/50 shadow-lg hover:shadow-indigo-500/25">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl filter drop-shadow-lg">{skill.icon}</span>
                            <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                          </div>
                          <span className="text-indigo-300 font-bold text-lg">{skill.level}%</span>
                        </div>
                        
                        <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full shadow-lg"
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
          <h3 className="text-4xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-6">
            {[
              { name: "LeetCode", icon: "🧩", url: "#", solved: "500+", color: "from-yellow-400 to-orange-500" },
              { name: "HackerRank", icon: "👨‍💻", url: "#", level: "5⭐", color: "from-green-400 to-blue-500" },
              { name: "Codeforces", icon: "🏆", url: "#", rating: "1800+", color: "from-blue-400 to-indigo-500" },
              { name: "CodeChef", icon: "👨‍🍳", url: "#", stars: "4⭐", color: "from-purple-400 to-pink-500" }
            ].map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-indigo-400/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              >
                <div className="text-4xl mb-3 filter drop-shadow-lg">{profile.icon}</div>
                <div className="text-white font-semibold text-lg">{profile.name}</div>
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
