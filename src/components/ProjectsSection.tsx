
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/70 dark:border-gray-700/50 group"
    >
      <div className="h-48 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: project.color }}>
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-24 h-24 bg-white/20 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white"
          >
            View Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white"
          >
            View Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#14B8A6'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI with natural language processing capabilities. Built with React and integrated with OpenAI API.',
      tech: ['React', 'Socket.io', 'OpenAI', 'Express'],
      color: '#10B981'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'WebRTC'],
      color: '#06B6D4'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency price tracking application with portfolio management and market analysis tools.',
      tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      color: '#0891B2'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-teal-50/60 to-emerald-50/60 dark:from-cyan-900/10 dark:via-teal-900/10 dark:to-emerald-900/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
