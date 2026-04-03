import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Twitter = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Linkedin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Facebook = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

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
