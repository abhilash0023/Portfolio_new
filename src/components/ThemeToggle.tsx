
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-20 right-4 z-50"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className={`rounded-full ${
          isDark 
            ? 'bg-gray-800 border-gray-600 hover:bg-gray-700' 
            : 'bg-white border-gray-300 hover:bg-gray-50'
        } shadow-lg transition-all duration-300`}
      >
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? '🌙' : '☀️'}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
