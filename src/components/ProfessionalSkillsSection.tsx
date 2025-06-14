
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
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "JavaScript (ES6+)", level: 95, icon: "🟨" },
        { name: "HTML5 & CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "Framer Motion", level: 85, icon: "🎬" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟩" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
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
        { name: "Three.js", level: 80, icon: "🎯" },
        { name: "Figma", level: 85, icon: "🎨" },
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
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
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
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
                className="text-2xl font-bold text-white mb-6 text-center"
                variants={itemVariants}
              >
                {category.category}
              </motion.h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group-hover:border-cyan-400/30">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <h4 className="text-white font-semibold">{skill.name}</h4>
                          </div>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                        
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            variants={skillBarVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Coding Profiles</h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-6">
            {[
              { name: "LeetCode", icon: "🧩", url: "#", solved: "500+" },
              { name: "HackerRank", icon: "👨‍💻", url: "#", level: "5⭐" },
              { name: "Codeforces", icon: "🏆", url: "#", rating: "1800+" },
              { name: "CodeChef", icon: "👨‍🍳", url: "#", stars: "4⭐" }
            ].map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{profile.icon}</div>
                <div className="text-white font-semibold">{profile.name}</div>
                <div className="text-cyan-400 text-sm">
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
