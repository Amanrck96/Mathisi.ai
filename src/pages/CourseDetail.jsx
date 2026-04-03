import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, BookOpen, GraduationCap, ChevronLeft } from 'lucide-react';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const courseId = id || 'agentic-ai'; // Fallback for testing

  const courseDetails = {
    'agentic-ai': {
      title: 'Agentic AI Program',
      description: 'Master autonomous AI agents and GenAI architectures from scratch. Learn how to build systems that plan, execute, and reason across multiple tools and environments.',
      curriculum: [
        'Module 1: Foundations of Large Language Models',
        'Module 2: Prompt Engineering & Reasoning Chains',
        'Module 3: Autonomous Web Agents & Tool Use',
        'Module 4: Multi-Agent Architectures with LangGraph',
        'Module 5: Deployment & Scalability'
      ],
      duration: '24 Weeks',
      highlights: ['Live sessions by Google Developers', '3+ Real-world projects', 'Job-ready portfolio']
    },
    'data-science': {
      title: 'Data Science & Machine Learning',
      description: 'Go beyond theory and build production-grade ML pipelines. Master statistics, predictive modeling, and deep learning for business applications.',
      curriculum: [
        'Module 1: Applied Statistics & Probability',
        'Module 2: Python for Data Engineering',
        'Module 3: Supervised & Unsupervised Learning',
        'Module 4: Deep Learning for Image & NLP',
        'Module 5: Project Capstone & Deployment'
      ],
      duration: '20 Weeks',
      highlights: ['Master 20+ DS Libraries', 'SQL for Big Data', 'Interview Simulation']
    },
    'full-stack': {
      title: 'Full Stack Engineering',
      description: 'Build scalable software from front-to-back. Master Next.js, System Design, and Cloud Architectures for high-performance applications.',
      curriculum: [
        'Module 1: Frontend Excellence (React/Next)',
        'Module 2: Server-Side Mastery (Node/Python)',
        'Module 3: Database & Caching (Relational/NoSQL)',
        'Module 4: System Design & Microservices',
        'Module 5: Cloud Deployment & DevOps'
      ],
      duration: '22 Weeks',
      highlights: ['System Design Workshops', 'Deploy 5 Live Projects', 'Backend Specialization']
    },
    'cyber-security': {
      title: 'Cyber Security Specialist',
      description: 'Learn ethical hacking, threat modeling, and regulatory compliance. Build defense systems to secure modern enterprise infrastructures.',
      curriculum: [
        'Module 1: Network & OS Fundamentals',
        'Module 2: Ethical Hacking & Pentesting',
        'Module 3: Application & Web Security',
        'Module 4: Threat Intelligence & SecOps',
        'Module 5: Compliances (GDPR/HIPAA)'
      ],
      duration: '18 Weeks',
      highlights: ['Hands-on Pen-Testing Labs', 'Certifications (CEH/CompTIA)', 'Live Incident Response']
    }
  };

  const course = courseDetails[courseId] || courseDetails['agentic-ai'];

  return (
    <div className="page-content course-detail-page section">
      <div className="container">
        <Link to="/courses" className="back-link"><ChevronLeft size={20} /> Back to All Courses</Link>
        <div className="detail-hero glass-card">
          <div className="detail-info">
            <div className="badge glass">Top Specialization</div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className="highlights-grid">
              {course.highlights.map((h, i) => (
                <div key={i} className="highlight-item"><CheckCircle size={18} color="#4f46e5" /> <span>{h}</span></div>
              ))}
            </div>
            <button className="btn-primary">Download Brochure</button>
          </div>
          <div className="detail-meta">
            <div className="meta-card glass">
              <Clock size={24} />
              <div>
                <h4>Duration</h4>
                <p>{course.duration}</p>
              </div>
            </div>
            <div className="meta-card glass">
              <GraduationCap size={24} />
              <div>
                <h4>Level</h4>
                <p>Advanced</p>
              </div>
            </div>
            <div className="meta-card glass">
              <BookOpen size={24} />
              <div>
                <h4>Method</h4>
                <p>Live Classes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h2>Detailed <span className="text-gradient">Curriculum</span></h2>
          <div className="curriculum-list">
            {course.curriculum.map((c, i) => (
              <div key={i} className="curriculum-item glass-card">
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
