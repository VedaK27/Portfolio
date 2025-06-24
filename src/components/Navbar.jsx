// 

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Phone, Mail, Download, ExternalLink, Code, Database, Cpu, Globe, GitBranch } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'C++', icon: Code, color: 'text-blue-600' },
    { name: 'Python', icon: Code, color: 'text-green-600' },
    { name: 'Java', icon: Code, color: 'text-red-600' },
    { name: 'React.js', icon: Globe, color: 'text-cyan-600' },
    { name: 'Node.js', icon: Globe, color: 'text-green-500' },
    { name: 'Express.js', icon: Globe, color: 'text-gray-600' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'Tailwind CSS', icon: Globe, color: 'text-teal-600' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'text-orange-600' },
    { name: 'MySQL', icon: Database, color: 'text-blue-600' },
    { name: 'Assembly (x86)', icon: Cpu, color: 'text-purple-600' }
  ];

  const projects = [
    {
      title: 'SkillSync',
      description: 'A comprehensive platform for skill development and synchronization, connecting learners with mentors and resources.',
      github: 'https://github.com/yourgithub/skillsync'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Machine learning model to predict heart disease risk using patient data and advanced algorithms.',
      github: 'https://github.com/yourgithub/heart-disease-prediction'
    },
    {
      title: 'Milun Money',
      description: 'Personal finance management application with budgeting tools and expense tracking features.',
      github: 'https://github.com/yourgithub/milun-money'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-screen-md mx-auto px-6 py-4">
          <div className="flex justify-end space-x-8">
            {[
              { id: 'about', label: 'About Me' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                  activeSection === id ? 'text-blue-500' : 'text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-screen-md mx-auto px-6 pt-20">
        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center py-16">
          <div className="w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="text-blue-500">Veda</span>
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                Hi, I'm Veda — a second-year Computer Engineering student at PICT with a deep love for building, learning, and solving real-world problems through code. I enjoy exploring AI/ML and full-stack development, and I love clean UI design.
              </p>
              <div className="flex space-x-4 pt-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-lg font-medium">Your Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 ${
                    hoveredSkill === index ? 'transform -translate-y-2 scale-105' : ''
                  }`}>
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300`}>
                        <Icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                    </div>
                  </div>
                  {hoveredSkill === index && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Contact Me</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">+91-XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">yourmail@example.com</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">LinkedIn Profile</span>
                </a>
                
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">GitHub Profile</span>
                </a>
                
                <a
                  href="https://leetcode.com/yourleetcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <Code className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">LeetCode Profile</span>
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-50 py-8 mt-16">
        <div className="max-w-screen-md mx-auto px-6 text-center">
          <p className="text-gray-600">© 2025 Veda. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;