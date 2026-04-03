import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Will I get a certificate after completion?",
      answer: "Yes, you'll receive an industry-recognized certificate from Mathisi.ai, co-signed by our corporate partners. This certificate validates your hands-on proficiency in the specific track."
    },
    {
      question: "Is there any placement assistance?",
      answer: "Absolutely. We have a dedicated placement cell that works with 120+ hiring partners. We assist with resume labs, interview prep, and direct referrals."
    },
    {
      question: "What are the timings for live classes?",
      answer: "We offer both weekday and weekend batches to accommodate working professionals and students. Typically, classes are held in the evenings (7 PM - 9 PM IST) to ensure maximum attendance."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible EMI options starting at very low monthly payments. We also have a 'Pay After Placement' model for eligible candidates."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header">
          <div className="badge glass">FAQ</div>
          <h2>Common Questions</h2>
          <p>Everything you need to know about our programs and admissions.</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-card ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
