import React from 'react';
import CoursesGrid from '../sections/CoursesGrid';
import { Search, Filter } from 'lucide-react';
import './CoursesPage.css';

const Courses = () => {
  return (
    <div className="page-content courses-page section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">Programs 2026</div>
          <h1>Explore our Expert-Led <span className="text-gradient">Specializations</span></h1>
          <p>Find the perfect path to accelerate your professional growth.</p>
        </div>

        <div className="courses-search-bar glass">
          <div className="search-input">
            <Search size={20} />
            <input type="text" placeholder="Search for courses (AI, Data, etc.)" />
          </div>
          <div className="filter-btns">
            <button className="btn-filter glass">All</button>
            <button className="btn-filter">Data Science</button>
            <button className="btn-filter">AI/ML</button>
            <button className="btn-filter">Development</button>
            <div className="filter-dropdown">
              <Filter size={18} /> Filters
            </div>
          </div>
        </div>

        <CoursesGrid />
        
        <div className="career-assistance section glass-card">
          <div className="ca-content">
            <h2>Need help choosing the <span className="text-gradient">right path?</span></h2>
            <p>Our career experts can help you identify the best program based on your background and goals.</p>
            <button className="btn-primary">Book a Career Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
