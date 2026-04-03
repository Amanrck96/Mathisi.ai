import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket, Code, Database, Brain, Lock } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowCourses(false);
  }, [location]);

  const courses = [
    { name: 'Agentic AI', icon: <Brain size={18} />, path: '/courses/agentic-ai' },
    { name: 'Data Science', icon: <Database size={18} />, path: '/courses/data-science' },
    { name: 'Full Stack', icon: <Code size={18} />, path: '/courses/full-stack' },
    { name: 'Cyber Security', icon: <Lock size={18} />, path: '/courses/cyber-security' },
  ];

  return (
    <nav className={`header ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <Rocket className="logo-icon" />
          <span>Mathisi<span className="text-gradient">.ai</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <span className="nav-link">Courses <ChevronDown size={14} /></span>
            {showCourses && (
              <div className="dropdown-menu glass">
                {courses.map((course) => (
                  <Link key={course.name} to={course.path} className="dropdown-item">
                    {course.icon} {course.name}
                  </Link>
                ))}
                <Link to="/courses" className="dropdown-item all-courses">
                  View All Courses
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blogs" className="nav-link">Blogs</Link>
          <Link to="/pap" className="nav-link">Pay After Placement</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="auth-btns desktop-only">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass">
          <div className="container mobile-container">
            <Link to="/courses" className="mobile-item">Courses</Link>
            <Link to="/about" className="mobile-item">About</Link>
            <Link to="/blogs" className="mobile-item">Blogs</Link>
            <Link to="/pap" className="mobile-item">Pay After Placement</Link>
            <Link to="/contact" className="mobile-item">Contact</Link>
            <div className="mobile-auth">
              <button className="btn-secondary w-full">Login</button>
              <button className="btn-primary w-full">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
