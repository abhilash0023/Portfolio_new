
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ArticleCard = ({ article, index }: { article: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group"
    >
      <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">{article.date}</span>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ArticlesSection = () => {
  const articles = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for building large-scale React applications using TypeScript, including proper typing, component architecture, and state management.',
      category: 'Development',
      date: 'March 15, 2024'
    },
    {
      title: 'The Future of Web Development: AI and Machine Learning',
      excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing web development and creating new opportunities for developers.',
      category: 'AI/ML',
      date: 'March 10, 2024'
    },
    {
      title: 'Optimizing Performance in Modern Web Applications',
      excerpt: 'Techniques and strategies for improving web application performance, including code splitting, lazy loading, and efficient rendering.',
      category: 'Performance',
      date: 'March 5, 2024'
    },
    {
      title: 'Introduction to Three.js and 3D Web Development',
      excerpt: 'Getting started with Three.js to create immersive 3D experiences on the web, including basic concepts and practical examples.',
      category: '3D Graphics',
      date: 'February 28, 2024'
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-indigo-900/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights and tutorials on modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-3"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
