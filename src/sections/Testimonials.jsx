import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Verma",
      role: "SDE at Microsoft",
      content: "The Agentic AI curriculum was eye-opening. The projects I built here helped me crack my interviews with confidence.",
      avatar: "RV"
    },
    {
      name: "Sneha Kapoor",
      role: "Data Scientist at Amazon",
      content: "Excellent mentor support! The live sessions were way more effective than any self-paced course I've taken.",
      avatar: "SK"
    },
    {
      name: "Arjun Mehta",
      role: "Full Stack Engineer",
      content: "Mathisi's focus on placement is unmatched. They don't just teach code; they teach how to build a career.",
      avatar: "AM"
    }
  ];

  return (
    <section className="section testimonials-section glass">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">Success Stories</div>
          <h2>Hear from Our <span className="text-gradient">Graduates</span></h2>
          <p>Join the ranks of professionals who've transformed their careers with Mathisi.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card testimonial-card">
              <div className="quote-icon"><MessageSquareQuote /></div>
              <p className="testimonial-text">"{review.content}"</p>
              <div className="testimonial-footer">
                <div className="avatar-small">{review.avatar}</div>
                <div className="user-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
