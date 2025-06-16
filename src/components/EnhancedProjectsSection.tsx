
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Code, Star, GitFork } from 'lucide-react';

interface EnhancedProjectsSectionProps {
  isDark?: boolean;
}

const ProjectCard3D = ({ project, index, isDark }: { project: any; index: number; isDark?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -20, rotateX: 5, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`relative backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 transform-gpu shadow-lg ${
        isDark 
          ? 'bg-gray-800/90 border-gray-700 group-hover:border-blue-500 hover:shadow-blue-500/25'
          : 'bg-white/90 border-gray-200 group-hover:border-blue-300 hover:shadow-blue-500/25'
      }`}>
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'Live' 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-blue-100 text-blue-700 border border-blue-200'
            } backdrop-blur-sm`}
          >
            {project.status}
          </motion.div>

          {/* Project Stats */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {project.stars && (
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-xs text-white">{project.stars}</span>
              </div>
            )}
            {project.forks && (
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                <GitFork className="w-3 h-3 text-gray-300" />
                <span className="text-xs text-white">{project.forks}</span>
              </div>
            )}
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex space-x-4">
              <Button
                size="sm"
                className={`backdrop-blur-sm border transition-colors ${
                  isDark 
                    ? 'bg-gray-800/90 border-gray-600 hover:bg-gray-700 text-white'
                    : 'bg-white/90 border-gray-200 hover:bg-white text-black'
                }`}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                size="sm"
                variant="outline"
                className={`backdrop-blur-sm transition-colors ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700/80 hover:text-white'
                    : 'border-white/80 text-white hover:bg-white/20'
                }`}
              >
                <Code className="w-4 h-4 mr-2" />
                Code
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className={`text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {project.title}
            </h3>
            <p className={`line-clamp-3 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.description}
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  isDark 
                    ? 'bg-blue-900/50 text-blue-300 border-blue-700'
                    : 'bg-blue-100 text-blue-700 border-blue-200'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button
              variant="outline"
              className={`transition-colors ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-black'
              }`}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </div>

        {/* 3D Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        />
      </div>
    </motion.div>
  );
};

const EnhancedProjectsSection: React.FC<EnhancedProjectsSectionProps> = ({ isDark = false }) => {
  const projects = [
    {
      title: 'Travel Itinerary Planner',
      description: 'Developed a responsive travel planner using React.js, allowing users to create, manage, and share custom itineraries with real-time weather and map integration.',
      tech: ['React.js', 'JavaScript', 'CSS', 'Weather API', 'Maps API'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      status: 'Live',
      stars: 124,
      forks: 28
    },
    {
      title: 'E-Commerce Website',
      description: 'Built a dynamic e-commerce platform with React.js, featuring product listings, shopping cart functionality, user authentication, and secure payment integration.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      status: 'Live',
      stars: 198,
      forks: 45
    },
    {
      title: 'Gemini Clone',
      description: 'Developed a Gemini clone using React and Vite, replicating the core UI and user experience. Integrated the application with the Gemini API to enable real-time conversational functionality.',
      tech: ['React', 'Vite', 'Gemini API', 'JavaScript', 'CSS'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      status: 'Live',
      stars: 156,
      forks: 32
    },
    {
      title: 'Smart-LMS',
      description: 'Built a Smart-LMS (Learning Management System) using React, Vite, Node.js, and MongoDB, providing seamless course management and user interaction. Implemented features like user authentication, course tracking, and dynamic content delivery for an efficient learning experience.',
      tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      status: 'Live',
      stars: 287,
      forks: 67
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive portfolio website using React, Vite, Node.js, and MongoDB to showcase projects, skills, and personal achievements. Integrated dynamic content management, contact forms, and dark mode support for an enhanced user experience.',
      tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      status: 'Live',
      stars: 189,
      forks: 41
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with proper dark/light mode support */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-white via-blue-50 to-gray-50'
      }`} />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark ? [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(147, 197, 253, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(147, 197, 253, 0.15) 0%, transparent 50%)"
          ] : [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity }}
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
            Featured <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A showcase of my recent work, creative solutions, and technical expertise
            across various domains and technologies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard3D key={project.title} project={project} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjectsSection;
