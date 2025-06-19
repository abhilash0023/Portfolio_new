
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadResume = () => {
  const downloadResume = () => {
    // Create the actual resume content based on the uploaded image
    const resumeContent = `
ABHILASH K
UNDERGRADUATE STUDENT

Aspiring to build a rewarding career by leveraging my technical expertise and problem-solving skills and MERN stack development to drive business growth and enhance digital efficiency. Passionate about emerging web technologies, especially full-stack in MERN stack and collaborating within dynamic teams to deliver innovative, user-centric web applications.

SKILLS

TECHNICAL SKILLS
Programming Skills: Java, C, JavaScript
Database Management: Mongo DB
Front-end Languages: HTML, CSS, JavaScript, Bootstrap, React.js

PROJECTS

TRAVEL ITINERARY PLANNER:
Developed a responsive travel planner using React.js, allowing users to create, manage, and share custom itineraries with real-time weather and map integration.

E-COMMERCE WEBSITE:
Built a dynamic e-commerce platform with React.js, featuring product listings, shopping cart functionality, user authentication, and secure payment integration.

GEMINI CLONE:
Developed a Gemini clone using React and Vite, replicating the core UI and user experience. Integrated the application with the Gemini API to enable real-time conversational functionality.

SMART-LMS:
Built a Smart-LMS (Learning Management System) using React, Vite, Node.js, and MongoDB, providing seamless course management and user interaction. Implemented features like user authentication, course tracking, and dynamic content delivery for an efficient learning experience.

INTERNSHIP

AWERUM - POLLACHI                                    24.06.24 - 09.07.24
Done a 15-day front-end development internship at Awerum, specializing in HTML, CSS, and JavaScript. Built responsive user interfaces and improved UI/UX through clean, efficient coding practices.

NOVI TECH - COIMBATORE                              16.10.24 - 23.11.24
Done Completed a MERN Stack development internship at Novi Tech, progressing from foundational to intermediate level. Gained practical experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.

CERTIFICATIONS
• Power BI workshop (November 2024)
• Certified in android development using flutter workshop in KPR college (Feb-2024)
• BEC Certificate- Cambridge University (Feb-2023)
• Certificate of completion for the NPTEL course "Introduction to industry 4.0 and Industrial IOT", with Elite certificate
• Certificate of completion for the NPTEL course "Data Analytics with Python", with a consolidated score of 56%

ACHIEVEMENTS
• B1 grade in Linguaskill exam
• A grade in B Certificate exam[NCC]
• B grade in CCertificate exam[NCC]
• ATC & CATC camp[NCC]
• Ek Bharat Shrestha Bharat (EBSB)-A National camp [NCC]

CONTACT
Phone: +91 9600598446
Email: abikumar0023@gmail.com
LinkedIn: https://www.linkedin.com/in/abhilash-k-302361283
GitHub: https://github.com/abhilash0023

EDUCATION
2022 - 2026
Dr.Mahalingam College of Engineering and Technology
• B.Tech Information Technology
• CGPA: 7.8(Till 5 sem)

2019-2022
Our lady of Lourders Matriculation Higher Secondary School
• HSC: 70.3%
• SSLC: 67.8%

STRENGTHS
• Adaptability
• Teamwork
• Time Management
• Problem Solving
• Leadership

EXTRACURRICULAR ACTIVITIES:
• NCC Cadet
• Basketball Player
• Athlete
    `;

    // Create a more formatted PDF-like content
    const blob = new Blob([resumeContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abhilash_K_Resume.pdf';
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
    </motion.div>
  );
};

export default DownloadResume;
