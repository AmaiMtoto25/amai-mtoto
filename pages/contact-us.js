/* eslint-disable */
import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export async function getServerSideProps() {
  return { props: {} };
}

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const AKOKO = "/akoko-nan-medium.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", border: "1.5px solid #EDD8C8", borderRadius: "10px",
    padding: "14px 16px", fontSize: "14px", fontFamily: "'DM Sans', sans-serif",
    fontWeight: "500", outline: "none", background: "#FDF6F0", color: "#1a0800",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontSize: "13px", fontWeight: "700", color: "#1a0800", marginBottom: "6px", display: "block",
  };

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #C4622D 100%)", padding: "64px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "220px", height: "220px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" }}></div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "24px", padding: "6px 16px", color: "#B7E4C7", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "20px" }}>
          <span style={{ width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", display: "inline-block" }}></span>
          GET IN TOUCH
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "14px" }}>
          Contact <em style={{ fontStyle: "italic", color: "#B7E4C7" }}>us</em>
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: "1.75", maxWidth: "480px", fontWeight: "400" }}>
          We'd love to hear from you — whether you're a mother, an NHS professional, a funder or a community partner.
        </p>
      </div>

      <div style={{ background: "#FDF6F0", padding: "64px 80px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "56px", alignItems: "start" }}>

          {/* Left — contact info */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "12px" }}>How to reach us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: "700", color: "#1a0800", marginBottom: "24px" }}>
              We're here to <em style={{ fontStyle: "italic", color: "#C4622D" }}>help</em>
            </h2>

            {[
              { icon: "✉", title: "General enquiries", detail: "amaimtoto@gmail.com", href: "mailto:amaimtoto@gmail.com" },
              { icon: "◈", title: "NHS & partnerships", detail: "amaimtoto@gmail.com", href: "mailto:amaimtoto@gmail.com" },
              { icon: "✦", title: "Funding & press", detail: "amaimtoto@gmail.com", href: "mailto:amaimtoto@gmail.com" },
              { icon: "◉", title: "Community forum", detail: "amai-mtoto.forumotion.com", href: "https://amai-mtoto.forumotion.com/" },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "18px 0", borderBottom: "1px solid #EDD8C8", textDecoration: "none" }}>
                <span style={{ fontSize: "20px", color: "#C4622D", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#1a0800", marginBottom: "3px" }}>{item.title}</div>
                  <div style={{ fontSize: "13px", color: "#C4622D", fontWeight: "500" }}>{item.detail}</div>
                </div>
              </a>
            ))}

            <div style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)", borderRadius: "16px", padding: "24px", marginTop: "28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-10px", bottom: "-10px", width: "80px", height: "80px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "white", marginBottom: "8px", fontWeight: "700" }}>Response time</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)", lineHeight: "1.7", fontWeight: "400" }}>We aim to respond to all enquiries within 2–3 working days. For urgent safeguarding concerns, please contact your local NHS trust directly.</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div style={{ background: "white", borderRadius: "20px", border: "1px solid #EDD8C8", borderTop: "3px solid #2D6A4F", padding: "48px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>💚</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: "700", color: "#1a0800", marginBottom: "12px" }}>Message received!</h3>
                <p style={{ fontSize: "14px", color: "#6b4030", lineHeight: "1.7" }}>Thank you for getting in touch. We'll get back to you within 2–3 working days.</p>
              </div>
            ) : (
              <div style={{ background: "white", borderRadius: "20px", border: "1px solid #EDD8C8", padding: "40px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1a0800", marginBottom: "24px" }}>Send us a <em style={{ fontStyle: "italic", color: "#C4622D" }}>message</em></h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div>
                        <label style={labelStyle}>Your name</label>
                        <input type="text" placeholder="e.g. Amara" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email address</label>
                        <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Subject</label>
                      <select value={subject} onChange={e => setSubject(e.target.value)} required style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select a subject...</option>
                        <option>General enquiry</option>
                        <option>NHS / clinical partnership</option>
                        <option>Funding or press</option>
                        <option>Content or clinical feedback</option>
                        <option>Technical issue</option>
                        <option>Community support</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea value={message} onChange={e => setMessage(e.target.value)} required placeholder="Tell us how we can help..." style={{ ...inputStyle, height: "140px", resize: "none", lineHeight: "1.7" }} />
                    </div>
                    <button type="submit" style={{ width: "100%", background: "#C4622D", color: "white", border: "none", borderRadius: "12px", padding: "16px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                      Send message →
                    </button>
                    <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center" }}>We never share your details with third parties.</p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-hero { padding: 40px 20px !important; }
          .contact-body { padding: 32px 16px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  );
}
