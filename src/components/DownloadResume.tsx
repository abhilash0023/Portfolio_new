
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadResume = () => {
  const downloadResume = () => {
    // Create a dummy resume file for demonstration
    const resumeContent = `
John Doe - Full Stack Developer

EXPERIENCE:
• Senior React Developer at Tech Corp (2022-Present)
• Frontend Developer at StartupXYZ (2020-2022)
• Junior Developer at WebSolutions (2019-2020)

SKILLS:
• React, TypeScript, Node.js
• Python, MongoDB, PostgreSQL
• AWS, Docker, Kubernetes

EDUCATION:
• B.S. Computer Science, University XYZ (2019)

CONTACT:
• Email: john.doe@example.com
• Phone: (555) 123-4567
• LinkedIn: linkedin.com/in/johndoe
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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center mt-8"
    >
      <Button
        onClick={downloadResume}
        className="group bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-teal-500/25"
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
