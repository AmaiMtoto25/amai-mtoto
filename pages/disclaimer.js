/* eslint-disable */
import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export async function getServerSideProps() {
  return { props: {} };
}

export default function Disclaimer() {
  const AKOKO = "/akoko-nan-medium.png";

  const sections = [
    {
      title: "Medical disclaimer",
      content: "The information on Amai-Mtoto is provided for general educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your midwife, GP, obstetrician or other qualified healthcare professional with any questions you may have about your pregnancy, health or that of your baby. Never disregard professional medical advice or delay seeking it because of something you have read on this platform.",
    },
    {
      title: "Emergency situations",
      content: "If you believe you or your baby are experiencing a medical emergency, call 999 immediately. For urgent but non-emergency medical advice during pregnancy, call 111 or contact your maternity unit directly. Amai-Mtoto is not an emergency service and cannot provide real-time clinical support.",
    },
    {
      title: "Content accuracy",
      content: "We work hard to ensure all content on Amai-Mtoto is evidence-based, up to date and reviewed by qualified NHS professionals. However, medical guidance changes over time and individual circumstances vary. Amai-Mtoto CIC accepts no liability for any loss, injury or damage resulting from reliance on information provided on this platform.",
    },
    {
      title: "Cultural and traditional practices",
      content: "Amai-Mtoto acknowledges and respects traditional cultural practices within African and Caribbean communities. Where we discuss herbal remedies, traditional foods or cultural birthing practices, this is for informational purposes only. We always recommend discussing any traditional practices with your healthcare provider before use during pregnancy.",
    },
    {
      title: "External links",
      content: "Amai-Mtoto contains links to external websites and resources. These are provided for convenience and information only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
      },
    {
      title: "Data and privacy",
      content: "Amai-Mtoto CIC takes your privacy seriously. We collect only the data necessary to provide our service and never sell your personal information to third parties. Your health data and check-in information is stored securely and shared only with your explicit consent. For full details, please see our Privacy Policy.",
    },
    {
      title: "Safeguarding",
      content: "If you are concerned about the safety of yourself or your baby, please contact your midwife, GP or call 999. If you are experiencing domestic abuse or feel unsafe, please contact the National Domestic Abuse Helpline on 0808 2000 247 (free, 24 hours). Amai-Mtoto staff will always act in accordance with safeguarding obligations.",
    },
    {
      title: "Intellectual property",
      content: "All content on Amai-Mtoto — including text, images, graphics, the Akoko Nan symbol usage and brand identity — is the property of Amai-Mtoto CIC unless otherwise stated. Content may not be reproduced, distributed or used without written permission from Amai-Mtoto CIC.",
    },
  ];

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0800 0%, #3D1200 60%, #8B2500 100%)", padding: "64px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "220px", height: "220px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" }}></div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "24px", padding: "6px 16px", color: "rgba(255,255,255,0.85)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "20px" }}>
          <span style={{ width: "8px", height: "8px", background: "#F5A623", borderRadius: "50%", display: "inline-block" }}></span>
          LEGAL & SAFETY
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "14px" }}>
          Disclaimer & <em style={{ fontStyle: "italic", color: "#F5C87A" }}>terms</em>
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", lineHeight: "1.75", maxWidth: "520px", fontWeight: "400" }}>
          Please read this carefully. Amai-Mtoto is an information and community platform — not a clinical service. Your safety is our priority.
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "16px" }}>Last updated: March 2026 · Amai-Mtoto CIC</p>
      </div>

      {/* Emergency banner */}
      <div style={{ background: "#3D1200", padding: "16px 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: "500" }}>
          In a medical emergency — <strong style={{ color: "#F5A623" }}>call 999</strong>. For urgent pregnancy advice — <strong style={{ color: "#F5A623" }}>call 111</strong>.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="tel:999" style={{ background: "#F5A623", color: "#3D1200", borderRadius: "20px", padding: "7px 20px", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>Call 999</a>
          <a href="tel:111" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderRadius: "20px", padding: "7px 20px", fontSize: "13px", fontWeight: "600", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>Call 111</a>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#FDF6F0", padding: "64px 80px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "36px", paddingBottom: "36px", borderBottom: i < sections.length - 1 ? "1px solid #EDD8C8" : "none" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#1a0800", marginBottom: "12px" }}>
                {section.title}
              </h2>
              <p style={{ fontSize: "15px", color: "#4a2010", lineHeight: "1.85", fontWeight: "400" }}>
                {section.content}
              </p>
            </div>
          ))}

          {/* Contact */}
          <div style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)", borderRadius: "16px", padding: "32px 36px", marginTop: "8px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-16px", bottom: "-16px", width: "100px", height: "100px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "white", marginBottom: "10px" }}>Questions about this disclaimer?</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.82)", lineHeight: "1.7", marginBottom: "20px" }}>Contact us at <a href="mailto:amaimtoto@gmail.com" style={{ color: "#B7E4C7", fontWeight: "600" }}>amaimtoto@gmail.com</a> and we will respond within 2–3 working days.</p>
            <a href="/contact-us" style={{ display: "inline-block", background: "#F5A623", color: "#3D1200", borderRadius: "24px", padding: "12px 28px", fontSize: "14px", fontWeight: "700", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
              Contact us →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .disc-hero { padding: 40px 20px !important; }
          .disc-banner { padding: 14px 20px !important; flex-direction: column !important; }
          .disc-body { padding: 32px 16px !important; }
        }
      `}</style>
    </Layout>
  );
}
