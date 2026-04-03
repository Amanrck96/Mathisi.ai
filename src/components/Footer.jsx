import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo logo">
            <Rocket className="logo-icon" size={28} />
            <span>Mathisi<span className="text-gradient">.ai</span></span>
          </Link>
          <p>
            Bridging the gap between ambition and skill. The world's first tech intelligence school 
            focused on professional outcomes and industry standard curriculum.
          </p>
          <div className="social-links">
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/courses">All Courses</Link>
            <Link to="/blogs">QuantumPod Insights</Link>
            <Link to="/pap">Pay After Placement</Link>
            <Link to="/contact">Contact Support</Link>
          </div>

          <div className="footer-col">
            <h4>Programs</h4>
            <Link to="/courses/agentic-ai">Agentic AI</Link>
            <Link to="/courses/data-science">Data Science</Link>
            <Link to="/courses/full-stack">Full Stack engineering</Link>
            <Link to="/courses/cyber-security">Cyber Security</Link>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Mail size={16} /> <span>info@mathisi.ai</span>
            </div>
            <div className="contact-item">
              <Phone size={16} /> <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} /> <span>Cyber City, Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Mathisi.ai - School of Technology. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
