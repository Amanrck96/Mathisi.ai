import React from 'react';
import { DollarSign, Briefcase, GraduationCap, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import './PAP.css';

const PAP = () => {
  return (
    <div className="page-content pap-page section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">Earn First, Pay Later</div>
          <h1>Focus on Learning, <span className="text-gradient">Not Finance</span></h1>
          <p>Join our Pay After Placement (PAP) program and start your career journey without any upfront tuition fees.</p>
        </div>

        <div className="pap-main-grid">
          <div className="pap-content">
            <div className="pap-step">
              <ShieldCheck className="pap-icon" />
              <div>
                <h3>Zero Upfront Cost</h3>
                <p>Register and complete your training without paying a single rupee. We invest in your success.</p>
              </div>
            </div>
            <div className="pap-step">
              <Users className="pap-icon" />
              <div>
                <h3>Master-Led Training</h3>
                <p>Learn in live environments from experts at top tech companies. Get job-ready skills.</p>
              </div>
            </div>
            <div className="pap-step">
              <Briefcase className="pap-icon" />
              <div>
                <h3>Land Your Dream Job</h3>
                <p>Gain access to 120+ hiring partners and a dedicated placement team to crack interviews.</p>
              </div>
            </div>
            <div className="pap-step">
              <DollarSign className="pap-icon" />
              <div>
                <h3>Pay Only After Earning</h3>
                <p>Once you secure a job with more than 5 LPA, only then do you start paying in easy monthly installments.</p>
              </div>
            </div>
          </div>

          <div className="pap-sidebar glass-card">
            <div className="sidebar-header">
              <h3>Eligibility Check</h3>
              <p>Quickly see if you qualify for the PAP program.</p>
            </div>
            <div className="eligibility-list">
              <div className="eligibility-item">
                <GraduationCap size={18} /> <span>Graduated in 2024, 2025 or 2026</span>
              </div>
              <div className="eligibility-item">
                <ShieldCheck size={18} /> <span>Willingness to commit 15+ hours/week</span>
              </div>
              <div className="eligibility-item">
                <TrendingUp size={18} /> <span>Passion for Tech/AI/Engineering</span>
              </div>
            </div>
            <button className="btn-primary w-full">Apply for PAP <ArrowRight size={18} className="icon-right" /></button>
            <p className="sidebar-foot">Limited slots available per batch.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Users = ({ className }) => (
  <svg 
    width="24" 
    height="24" 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default PAP;
