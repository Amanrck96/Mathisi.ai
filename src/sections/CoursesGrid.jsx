import React from 'react';
import { Brain, Database, Code, Shield, ChevronRight, BarChart, Server, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import './CoursesGrid.css';

const courses = [
  {
    title: 'Agentic AI Program',
    desc: 'Master autonomous AI agents and GenAI architectures.',
    icon: <Brain size={32} />,
    color: '#818cf8',
    level: 'Advanced',
    duration: '24 Weeks'
  },
  {
    title: 'Data Science & ML',
    desc: 'Predictive modeling, deep learning, and statistical analysis.',
    icon: <Database size={32} />,
    color: '#4f46e5',
    level: 'Intermediate',
    duration: '20 Weeks'
  },
  {
    title: 'Full Stack Engineering',
    desc: 'End-to-end web architecture with modern frameworks.',
    icon: <Code size={32} />,
    color: '#7c3aed',
    level: 'Entry-Advanced',
    duration: '22 Weeks'
  },
  {
    title: 'Cyber Security',
    desc: 'Ethical hacking, penetration testing, and network defense.',
    icon: <Shield size={32} />,
    color: '#ef4444',
    level: 'Intermediate',
    duration: '18 Weeks'
  },
  {
    title: 'Data Engineering',
    desc: 'ETL pipelines, big data systems, and cloud infrastructure.',
    icon: <Layers size={32} />,
    color: '#ec4899',
    level: 'Advanced',
    duration: '20 Weeks'
  },
  {
    title: 'Cloud Architecting',
    desc: 'Master AWS, Azure, and Google Cloud at scale.',
    icon: <Server size={32} />,
    color: '#06b6d4',
    level: 'Advanced',
    duration: '22 Weeks'
  },
  {
    title: 'Business Analytics',
    desc: 'Data-driven decision making and visualization.',
    icon: <BarChart size={32} />,
    color: '#f59e0b',
    level: 'Entry-Level',
    duration: '16 Weeks'
  },
  {
    title: 'UI/UX Design',
    desc: 'Human-centric design and interactive prototyping.',
    icon: <Layers size={32} />,
    color: '#10b981',
    level: 'All Levels',
    duration: '14 Weeks'
  }
];

const CoursesGrid = () => {
  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">Our Programs</div>
          <h2>Industry-Leading <span className="text-gradient">Specializations</span></h2>
          <p>Carefully curated paths for the next generation of tech leaders.</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.div 
              key={course.title}
              className="course-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="course-icon" style={{ color: course.color }}>
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="course-meta">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
              <button className="course-btn">
                Course Details <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="courses-footer">
          <button className="btn-primary">View All 12+ Programs</button>
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
