
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Code, Star, GitFork } from 'lucide-react';

const ProjectCard3D = ({ project, index }: { project: any; index: number }) => {
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
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 transform-gpu">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'Live' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            } backdrop-blur-sm`}
          >
            {project.status}
          </motion.div>

          {/* Project Stats */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {project.stars && (
              <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-xs text-white">{project.stars}</span>
              </div>
            )}
            {project.forks && (
              <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                <GitFork className="w-3 h-3 text-gray-300" />
                <span className="text-xs text-white">{project.forks}</span>
              </div>
            )}
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/20"
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
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
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
            background: "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        />
      </div>
    </motion.div>
  );
};

const EnhancedProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'A full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard. Features include user authentication, payment processing, and personalized shopping experiences.',
      tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Stripe', 'Socket.io'],
      image: '/placeholder.svg',
      status: 'Live',
      stars: 245,
      forks: 67
    },
    {
      title: 'Real-time Collaboration Platform',
      description: 'Modern team collaboration tool with real-time editing, video conferencing, file sharing, and project management features. Built with cutting-edge technologies for optimal performance.',
      tech: ['Next.js', 'TypeScript', 'WebRTC', 'PostgreSQL', 'Redis', 'AWS'],
      image: '/placeholder.svg',
      status: 'Live',
      stars: 189,
      forks: 34
    },
    {
      title: '3D Interactive Portfolio',
      description: 'Immersive 3D portfolio website showcasing creative projects with interactive elements, particle systems, and smooth animations. Features include dynamic lighting and responsive design.',
      tech: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'WebGL'],
      image: '/placeholder.svg',
      status: 'Development',
      stars: 156,
      forks: 29
    },
    {
      title: 'Machine Learning Dashboard',
      description: 'Comprehensive ML dashboard for data visualization, model training, and performance monitoring. Includes real-time analytics, automated reporting, and collaborative features.',
      tech: ['Python', 'FastAPI', 'React', 'D3.js', 'TensorFlow', 'Docker'],
      image: '/placeholder.svg',
      status: 'Live',
      stars: 312,
      forks: 89
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology. Features include voter verification, real-time results, and comprehensive audit trails.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
      image: '/placeholder.svg',
      status: 'Development',
      stars: 278,
      forks: 45
    },
    {
      title: 'IoT Smart Home Hub',
      description: 'Centralized smart home control system with device management, automation rules, energy monitoring, and mobile app integration for remote control.',
      tech: ['Vue.js', 'Node.js', 'MQTT', 'InfluxDB', 'Docker', 'Raspberry Pi'],
      image: '/placeholder.svg',
      status: 'Live',
      stars: 198,
      forks: 52
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)"
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
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
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
            <ProjectCard3D key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjectsSection;
