import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-content contact-page section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">Contact Mathisi</div>
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p>Have questions about a course? Our team is here to help you navigate your options.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass-card">
              <Mail className="info-icon" />
              <div>
                <h4>Email Us</h4>
                <p>info@mathisi.ai</p>
                <span>For general inquiries and support.</span>
              </div>
            </div>
            <div className="info-card glass-card">
              <Phone className="info-icon" />
              <div>
                <h4>Call Our Support</h4>
                <p>+91 98765 43210</p>
                <span>Mon-Fri (9 AM - 6 PM IST)</span>
              </div>
            </div>
            <div className="info-card glass-card">
              <MapPin className="info-icon" />
              <div>
                <h4>Visit Us</h4>
                <p>Cyber City, Hyderabad</p>
                <span>S-305, Tech Hub 500081 India</span>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card">
            <div className="form-head">
              <MessageSquare size={28} color="#4f46e5" />
              <h3>Send a Message</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="example@mail.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help?" rows="4"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message <Send size={18} className="icon-right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
