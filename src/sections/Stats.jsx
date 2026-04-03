import React from 'react';
import { Users, GraduationCap, Building2, TrendingUp } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { label: 'Successful Placements', value: '450+', icon: <Users /> },
    { label: 'Industry Partners', value: '120+', icon: <Building2 /> },
    { label: 'Highest Salary Package', value: '45 LPA', icon: <GraduationCap /> },
    { label: 'Average Career Growth', value: '55%', icon: <TrendingUp /> }
  ];

  return (
    <section className="stats-section glass">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-text">
              <span className="stat-num">{stat.value}</span>
              <span className="stat-name">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
