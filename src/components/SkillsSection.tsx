
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Express.js', level: 82, icon: '🚀' },
        { name: 'REST APIs', level: 85, icon: '🔌' },
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Docker', level: 68, icon: '🐋' },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            Skills & <span className="text-blue-600 dark:text-blue-400">Technologies</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={categoryVariants}>
              <Card className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/50 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-500 shadow-lg hover:shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center pb-4 border-b border-slate-200 dark:border-slate-700">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                          </div>
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-slate-200 dark:bg-slate-700"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
            <p className="text-blue-100 text-lg">
              I'm constantly expanding my skill set and staying updated with the latest technologies and industry best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
