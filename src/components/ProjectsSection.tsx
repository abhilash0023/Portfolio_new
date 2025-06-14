
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {project.status}
            </span>
          </div>
        </div>
        
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Button
              variant="default"
              size="sm"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution featuring user authentication, payment processing, inventory management, and real-time order tracking. Built with modern technologies and scalable architecture.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      image: 'photo-1488590528505-98d2b5aba04b',
      status: 'Completed'
    },
    {
      title: 'AI-Powered Chat Application',
      description: 'Real-time messaging platform integrated with AI capabilities for intelligent responses and natural language processing. Features include file sharing, voice messages, and group chats.',
      tech: ['React', 'Socket.io', 'OpenAI', 'Express', 'Redis'],
      image: 'photo-1461749280684-dccba630e2f6',
      status: 'In Progress'
    },
    {
      title: 'Project Management Dashboard',
      description: 'Collaborative workspace with advanced project tracking, team communication, file management, and analytics. Designed for remote teams and agile workflows.',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'WebRTC', 'Chart.js'],
      image: 'photo-1486312338219-ce68d2c6f44d',
      status: 'Completed'
    },
    {
      title: 'Cryptocurrency Analytics',
      description: 'Real-time cryptocurrency tracking and portfolio management platform with advanced charting, market analysis, and automated trading alerts for informed investment decisions.',
      tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'WebSocket'],
      image: 'photo-1531297484001-80022131f5a1',
      status: 'Beta'
    },
    {
      title: 'Code Review Assistant',
      description: 'AI-powered code analysis tool that provides intelligent suggestions, detects potential bugs, and ensures code quality standards across multiple programming languages.',
      tech: ['TypeScript', 'Node.js', 'Docker', 'GitHub API', 'ML'],
      image: 'photo-1487058792275-0ad4aaf24ca7',
      status: 'Completed'
    },
    {
      title: 'Developer Portfolio Builder',
      description: 'Dynamic portfolio generator that helps developers create stunning, responsive portfolios with minimal effort. Features drag-and-drop interface and multiple themes.',
      tech: ['Next.js', 'Tailwind', 'Prisma', 'Vercel', 'MDX'],
      image: 'photo-1498050108023-c5249f4df085',
      status: 'Launch Ready'
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing expertise in full-stack development, 
            AI integration, and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
