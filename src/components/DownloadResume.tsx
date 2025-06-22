import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadResume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center mt-8"
    >
      <a
        href="/pdf/resume.pdf"
        download="resume.pdf"
      >
        <Button
          className="group bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/25"
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
      </a>
    </motion.div>
  );
};

export default DownloadResume;
