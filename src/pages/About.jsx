import React from 'react';
import { Target, Users, BookOpen, Star } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="page-content about-page section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">About Mathisi</div>
          <h1>Empowering the Next Generation of <span className="text-gradient">Tech Leaders</span></h1>
          <p className="subtitle">We're on a mission to bridge the gap between classroom learning and industry demands through hands-on, expert-led training.</p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-card">
            <Target className="icon-main" />
            <h3>Our Mission</h3>
            <p>To democratize high-end tech education by making it accessible, outcome-oriented, and industry-aligned.</p>
          </div>
          <div className="glass-card about-card">
            <Users className="icon-main" />
            <h3>Expert Mentors</h3>
            <p>Our curriculum is designed and taught by experts from tech giants like Google, Amazon, and Meta.</p>
          </div>
          <div className="glass-card about-card">
            <BookOpen className="icon-main" />
            <h3>Pragmatic Learning</h3>
            <p>We focus on real-world projects, deployments, and problem-solving, ensuring you're job-ready from day one.</p>
          </div>
        </div>

        <div className="team-section">
          <h2>Led by Industry Veterans</h2>
          <div className="team-grid">
            <div className="team-member glass-card">
              <div className="avatar">AM</div>
              <h4>Aman Rathee</h4>
              <span>Founder & Visionary</span>
              <p>Ex-Senior Engineer with a passion for transformative tech education.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
