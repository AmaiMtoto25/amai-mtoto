/* eslint-disable */
import React, { useState } from "react";
import Layout from "../components/Layout";
import { getAllFAQs } from "../firebase/firestore";

export async function getServerSideProps() {
  const questionsData = await getAllFAQs();
  return { props: { questionsData } };
}

export default function FaqPage({ questionsData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .faq-page { width: 100%; max-width: 800px; margin: 0 auto; padding: 64px 24px; font-family: 'DM Sans', sans-serif; }
        .faq-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #2D6A4F; text-transform: uppercase; margin-bottom: 12px; }
        .faq-title { font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: #1a0800; line-height: 1.1; margin-bottom: 12px; }
        .faq-title em { font-style: italic; color: #C4622D; }
        .faq-sub { font-size: 15px; color: #6b4030; line-height: 1.7; font-weight: 300; margin-bottom: 48px; max-width: 560px; }
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item { background: white; border: 1px solid #EDD8C8; border-radius: 14px; overflow: hidden; transition: box-shadow 0.2s; }
        .faq-item.open { border-color: #C4622D; box-shadow: 0 4px 20px rgba(196,98,45,0.1); }
        .faq-question { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: transparent; border: none; cursor: pointer; text-align: left; font-family: 'DM Sans', sans-serif; gap: 16px; }
        .faq-question-text { font-size: 15px; font-weight: 500; color: #1a0800; line-height: 1.4; }
        .faq-item.open .faq-question-text { color: #C4622D; }
        .faq-icon { width: 28px; height: 28px; border-radius: 50%; background: #FDF6F0; border: 1px solid #EDD8C8; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #C4622D; flex-shrink: 0; transition: transform 0.2s, background 0.2s; }
        .faq-item.open .faq-icon { background: #C4622D; color: white; transform: rotate(45deg); }
        .faq-answer { padding: 0 24px 20px; font-size: 14px; color: #4a2010; line-height: 1.8; font-weight: 300; border-top: 1px solid #EDD8C8; padding-top: 16px; }
      `}</style>

      <div className="faq-page">
        <p className="faq-label">Got questions?</p>
        <h1 className="faq-title">Frequently asked <em>questions</em></h1>
        <p className="faq-sub">Everything you need to know about pregnancy, exercise, nutrition and wellbeing — answered with evidence-based guidance.</p>

        <div className="faq-list">
          {questionsData.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span className="faq-question-text">{item.title}</span>
                <span className="faq-icon">+</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
