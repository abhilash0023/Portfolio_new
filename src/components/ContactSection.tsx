
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  isDark?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDark = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'GitHub', url: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', url: '#', color: 'hover:text-blue-500' },
    { name: 'LeetCode', url: '#', color: 'hover:text-yellow-500' },
    { name: 'Email', url: 'mailto:abikumar0023@gmail.com', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900 to-slate-800' 
          : 'bg-gradient-to-br from-white via-blue-50 to-blue-100'
      }`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Get In <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's collaborate on your next project or just have a conversation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>Let's Connect</h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>abikumar0023@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
                </div>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>+91 96005984446</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Pollachi, Coimbatore</span>
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } ${social.color} transition-colors duration-200 text-lg font-medium`}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-xl border space-y-6 backdrop-blur-sm ${
              isDark 
                ? 'bg-black/50 border-gray-700/50' 
                : 'bg-white/80 border-blue-200/50 shadow-lg'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`border focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-blue-200 text-black placeholder-gray-500 focus:border-blue-400'
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`border focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-blue-200 text-black placeholder-gray-500 focus:border-blue-400'
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`border focus:ring-2 focus:ring-blue-500 resize-none ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-blue-200 text-black placeholder-gray-500 focus:border-blue-400'
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
