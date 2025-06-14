
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadResume = () => {
  const downloadResume = () => {
    // Create a professional resume file for demonstration
    const resumeContent = `
JOHN DOE
Full Stack Developer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
📧 john.doe@email.com
📱 (555) 123-4567
🌐 linkedin.com/in/johndoe
🔗 github.com/johndoe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL SUMMARY
Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. 
Proficient in modern JavaScript frameworks, cloud technologies, and agile development practices. 
Passionate about creating innovative solutions and leading development teams.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WORK EXPERIENCE

Senior Full Stack Developer | Tech Innovations Inc. (2022 - Present)
• Led development of 15+ enterprise web applications serving 100K+ users
• Architected microservices infrastructure reducing system latency by 40%
• Mentored junior developers and established coding standards
• Technologies: React, Node.js, AWS, MongoDB, Docker

Full Stack Developer | Digital Solutions Ltd. (2020 - 2022)
• Developed and maintained 8 client projects with 99.9% uptime
• Implemented CI/CD pipelines improving deployment efficiency by 60%
• Collaborated with cross-functional teams using Agile methodologies
• Technologies: Vue.js, Express.js, PostgreSQL, Firebase

Frontend Developer | StartupHub (2019 - 2020)
• Built responsive web applications for early-stage startups
• Optimized application performance achieving 95+ Lighthouse scores
• Integrated third-party APIs and payment gateways
• Technologies: React, TypeScript, Tailwind CSS, Stripe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TECHNICAL SKILLS

Frontend: React, Vue.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js, Python, Django, REST APIs, GraphQL
Database: MongoDB, PostgreSQL, MySQL, Redis
Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, GitHub Actions
Tools: Git, Webpack, Vite, Jest, Cypress, Figma

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EDUCATION

Bachelor of Science in Computer Science
University of Technology (2015 - 2019)
• Graduated Magna Cum Laude (GPA: 3.8/4.0)
• Relevant Coursework: Data Structures, Algorithms, Software Engineering

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CERTIFICATIONS

• AWS Certified Solutions Architect (2023)
• Google Cloud Professional Developer (2022)
• MongoDB Certified Developer (2021)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY PROJECTS

E-Commerce Platform | Lead Developer
• Full-stack application with payment processing and inventory management
• 50K+ monthly active users, $2M+ in processed transactions
• Tech Stack: React, Node.js, MongoDB, Stripe, AWS

AI Chat Application | Full Stack Developer  
• Real-time messaging with AI integration and natural language processing
• WebSocket implementation supporting 10K+ concurrent connections
• Tech Stack: React, Socket.io, OpenAI API, Redis, Docker
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'John_Doe_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Button
        onClick={downloadResume}
        size="lg"
        className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          <span>Download Resume</span>
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default DownloadResume;
