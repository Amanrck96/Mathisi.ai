import React from 'react';
import { Clock, User, ChevronRight, Tag } from 'lucide-react';
import './Blogs.css';

const Blogs = () => {
  const posts = [
    {
      title: "The Rise of Agentic AI: Why LLMs are Becoming Autonomous",
      excerpt: "Explore the transition from passive chatbots to active agents that can reason, plan, and execute tasks.",
      author: "Aman Rathee",
      date: "April 2, 2026",
      tag: "AI Trends",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Mastering Large Language Models in 2026",
      excerpt: "The ultimate guide to fine-tuning, RAG, and multi-modal models for production environments.",
      author: "Aman Rathee",
      date: "March 28, 2026",
      tag: "Engineering",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Science for Non-Techies: A Practical Blueprint",
      excerpt: "How to use data-driven decision making without having a background in mathematics or programming.",
      author: "Aman Rathee",
      date: "March 15, 2026",
      tag: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="page-content blogs-page section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">QuantumPod Insights</div>
          <h1>Technical Deep Dives & <span className="text-gradient">Industry Trends</span></h1>
          <p>Curated insights to keep you ahead in the rapidly evolving tech landscape.</p>
        </div>

        <div className="blogs-grid">
          {posts.map((post, index) => (
            <div key={index} className="glass-card blog-card">
              <div className="blog-img">
                <img src={post.image} alt={post.title} />
                <div className="blog-tag glass">{post.tag}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Clock size={14} /> {post.date}</span>
                  <span><User size={14} /> {post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more">Read Full Post <ChevronRight size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
