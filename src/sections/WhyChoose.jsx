import React from 'react';
import { Award, Briefcase, PlayCircle, BookOpen } from 'lucide-react';
import './WhyChoose.css';

const WhyChoose = () => {
  const points = [
    {
      title: 'Live Interactive Classes',
      desc: 'Not just pre-recorded videos. Learn live from industry veterans and clear your doubts in real-time.',
      icon: <PlayCircle />
    },
    {
      title: 'Industry-Vetted Curriculum',
      desc: 'Designed and taught by engineers from Google, Amazon, Meta, and niche AI labs.',
      icon: <Award />
    },
    {
      title: 'Outcome-Driven Approach',
      desc: 'Focus on hands-on deployment and real-world impact over rote memorization.',
      icon: <BookOpen />
    },
    {
      title: 'Dedicated Placement Cell',
      desc: 'Access our network of 120+ hiring partners with interview prep and resume labs.',
      icon: <Briefcase />
    }
  ];

  return (
    <section className="section why-choose-section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">Why Mathisi</div>
          <h2>A Learning Experience Built for <span className="text-gradient">Professional Success</span></h2>
          <p>We've redesigned tech education from the ground up to focus on what actually matters in the job market.</p>
        </div>

        <div className="why-grid">
          {points.map((point, index) => (
            <div key={index} className="why-card glass-card">
              <div className="why-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
