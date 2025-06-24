import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Phone, Mail, Download,
  ExternalLink, Code, Database, Cpu, Globe, GitBranch
} from 'lucide-react';
import profile from '../src/assets/profile.jpg' ;
import resume from '../src/assets/resume.pdf' ;
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

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
  { name: 'React Native', icon: Globe, color: 'text-indigo-500' },
  { name: 'Next.js', icon: Globe, color: 'text-black' },
  { name: 'Node.js', icon: Globe, color: 'text-green-500' },
  { name: 'Express.js', icon: Globe, color: 'text-gray-600' },
  { name: 'MongoDB', icon: Database, color: 'text-green-600' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: Globe, color: 'text-teal-600' },
  { name: 'Git & GitHub', icon: GitBranch, color: 'text-orange-600' },
  { name: 'Assembly (x86)', icon: Cpu, color: 'text-purple-600' },
  { name: 'NumPy', icon: Code, color: 'text-yellow-500' },
  { name: 'Pandas', icon: Code, color: 'text-black' },
  { name: 'Scikit-learn', icon: Code, color: 'text-blue-500' },
  { name: 'Figma', icon: Globe, color: 'text-pink-500' },
  { name: 'Canva', icon: Globe, color: 'text-purple-400' }
];


  const projects = [
    {
      title: 'SkillSync',
      description: 'A platform for skill development and synchronization, connecting learners with mentors.',
      github: 'https://github.com/VedaK27/SkillSync.git',
      contributions: [
        'Developed the full-stack architecture using React.js and Node.js',
        'Implemented user authentication and profile management system',
        'Built real-time messaging feature between mentors and learners',
        'Designed responsive UI with Tailwind CSS',
        'Integrated MongoDB for data storage and retrieval'
      ]
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Machine learning model to predict heart disease risk from patient data.',
      github: 'https://github.com/VedaK27/Heart-disease-prediction',
      contributions: [
        'Implemented multiple ML algorithms (Random Forest, SVM, Logistic Regression)',
        'Performed data preprocessing and feature engineering',
        'Achieved 95% accuracy on test dataset',
        'Created interactive web interface using Flask',
        'Visualized data insights using matplotlib and seaborn'
      ]
    },
    {
      title: 'Milun Money',
      description: 'Personal finance management app with budgeting tools and expense tracking.',
      github: 'https://github.com/VedaK27/Milun-Money.git',
      contributions: [
        'Built expense tracking system with category-wise analysis',
        'Implemented budget planning and goal-setting features',
        'Created data visualization dashboard with charts and graphs',
        'Developed secure user authentication system',
        'Integrated bank API for transaction data synchronization'
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth w-1/2 mx-auto">
      {/* Navbar */}
      <nav className="fixed w-1/2 mx-auto bg-white border-b z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto py-3 flex justify-end gap-6 pr-6">
          {['about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                activeSection === section ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto pt-20 space-y-20">
        {/* About */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Hi, I'm Veda 👋</h1>
            <p className="text-lg leading-relaxed">
              Hi, I’m Veda — a passionate developer who turns ideas into real, working products. I build fast backends, clean APIs, manage databases, and dabble in frontend when needed. I work with JavaScript, Node.js, MongoDB, Prisma, and React, while also exploring AI and sharpening my DSA skills. I'm always building something new, learning with curiosity, and coding with heart.            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={profile} alt="Profile" className="w-72 h-72 object-cover rounded-full shadow-lg" />
          </div>
        </section>

         {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="p-5 border rounded-md shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(({ name, icon: Icon, color }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 border px-4 py-3 rounded-md hover:shadow transition"
              >
                <Icon className={`w-5 h-5 ${color}`} />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91-7972229580</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>vedakimbahune27@gmail.com</span>
              </div>
            </div>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/vedakimbahune/" target="_blank" className="flex items-center gap-3 hover:underline">
                <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
              </a>
              <a href="https://github.com/VedaK27" target="_blank" className="flex items-center gap-3 hover:underline">
                <Github className="w-4 h-4 text-black" /> GitHub
              </a>
              <a href="https://leetcode.com/u/VedaKimbahune/" target="_blank" className="flex items-center gap-3 hover:underline">
                <Code className="w-4 h-4 text-orange-500" /> LeetCode
              </a>
            </div>
          </div>
          <div className="mt-6">
            <a
              href={resume}
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 w-max hover:bg-blue-700 transition"
            >
              <Download size={16} /> Resume
            </a>
        </div>

        </section>
      </div>

      <footer className="text-center py-6 text-sm text-gray-500 mt-16">
        © 2025 Veda. Built with React & Tailwind CSS.
      </footer>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;