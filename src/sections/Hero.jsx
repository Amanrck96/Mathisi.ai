import React from 'react';
import { Play, Shield, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge glass">
            <Award size={16} /> <span>Ranked #1 for AI Education in 2026</span>
          </div>
          <h1>Master the Art of <span className="text-gradient">Tech Intelligence</span></h1>
          <p>
            Dive into the world of Data Science, Generative AI, and Engineering. 
            Industry-aligned programs designed to turn your ambition into a career.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Explore Programs <Rocket size={20} className="icon-right" /></button>
            <button className="btn-secondary">Free Counselling <Play size={18} className="icon-right" /></button>
          </div>
          <div className="hero-trust">
            <p>Our Graduates Work At:</p>
            <div className="trust-logos">
              <span>Google</span>
              <span>Amazon</span>
              <span>Microsoft</span>
              <span>Meta</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="main-card glass-card">
            <div className="card-header">
              <Shield color="#818cf8" size={24} />
              <span>Program Guaranteed</span>
            </div>
            <div className="card-body">
              <div className="stat">
                <span className="stat-value">+55%</span>
                <span className="stat-label">Average Salary Hike</span>
              </div>
              <div className="stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Placement Support</span>
              </div>
            </div>
          </div>

          {/* Floating Notifications */}
          <div className="floating-notif glass n-1">
            <Globe size={16} /> <span>Student from London Joined</span>
          </div>
          <div className="floating-notif glass n-2">
            <Brain size={16} /> <span>New Agentic AI Module Live!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Rocket = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.5-1 1-4c2 1 5 1 5 1z" />
    <path d="M12 15v5s1-.5 4-1c-1-2-1-5-1-5z" />
  </svg>
);

const Brain = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.48z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.48z" />
  </svg>
);

export default Hero;
