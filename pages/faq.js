/* eslint-disable */
import React, { useState } from "react";
import Layout from "../components/Layout";
import { getAllFAQs } from "../firebase/firestore";
import Head from "next/head";

export async function getServerSideProps() {
  const questionsData = await getAllFAQs();
  return { props: { questionsData } };
}

export default function FaqPage({ questionsData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero banner */}
      <div style={{
        background: "linear-gradient(135deg, #3D1200 0%, #8B2500 50%, #C4622D 100%)",
        padding: "72px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(45,106,79,0.35)", border: "1px solid rgba(82,183,136,0.45)",
          borderRadius: "24px", padding: "6px 16px", color: "#74C69D",
          fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px",
          marginBottom: "20px", fontFamily: "'DM Sans', sans-serif",
        }}>
          <span style={{width:"8px",height:"8px",background:"#52B788",borderRadius:"50%",display:"inline-block"}}></span>
          GOT QUESTIONS?
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 4.5vw, 60px)",
          fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "16px",
        }}>
          Frequently asked <em style={{fontStyle:"italic", color:"#F5C87A"}}>questions</em>
        </h1>
        <p style={{
          fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: "1.75",
          maxWidth: "500px", fontWeight: "300", fontFamily: "'DM Sans', sans-serif",
        }}>
          Everything you need to know about pregnancy, exercise, nutrition and wellbeing — answered with evidence-based guidance tailored for our community.
        </p>
      </div>

      {/* FAQ list */}
      <div style={{
        background: "#FDF6F0",
        padding: "64px 80px",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px"}}>
          {questionsData.map((item, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              style={{
                background: openIndex === i ? "white" : "white",
                border: openIndex === i ? "1.5px solid #C4622D" : "1px solid #EDD8C8",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: openIndex === i ? "0 4px 24px rgba(196,98,45,0.12)" : "0 1px 4px rgba(0,0,0,0.04)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {/* Question row */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 28px", gap: "16px",
              }}>
                <span style={{
                  fontSize: "15px", fontWeight: "500",
                  color: openIndex === i ? "#C4622D" : "#1a0800",
                  lineHeight: "1.4", flex: 1,
                }}>
                  {item.title}
                </span>
                <span style={{
                  width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
                  background: openIndex === i ? "#C4622D" : "#FDF6F0",
                  border: openIndex === i ? "none" : "1px solid #EDD8C8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "20px", fontWeight: "300",
                  color: openIndex === i ? "white" : "#C4622D",
                  transform: openIndex === i ? "rotate(45deg)" : "none",
                  transition: "all 0.2s",
                }}>
                  +
                </span>
              </div>

              {/* Answer */}
              {openIndex === i && (
                <div style={{
                  padding: "0 28px 24px",
                  borderTop: "1px solid #EDD8C8",
                  paddingTop: "20px",
                }}>
                  <p style={{
                    fontSize: "14px", color: "#4a2010", lineHeight: "1.85",
                    fontWeight: "300", margin: 0,
                  }}>
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          maxWidth: "800px", margin: "48px auto 0",
          background: "linear-gradient(135deg, #1B4332, #2D6A4F)",
          borderRadius: "20px", padding: "40px 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "24px", flexWrap: "wrap",
        }}>
          <div>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:"22px", color:"white", marginBottom:"8px"}}>
              Still have questions?
            </p>
            <p style={{fontSize:"14px", color:"rgba(255,255,255,0.75)", fontWeight:"300", lineHeight:"1.6"}}>
              Join our community and connect with other mothers and midwives.
            </p>
          </div>
          <button
            onClick={() => window.location.href = "/sign-up"}
            style={{
              background: "#F5A623", color: "#3D1200", border: "none",
              borderRadius: "32px", padding: "14px 32px", fontSize: "15px",
              fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Join Our Community
          </button>
        </div>
      </div>
    </Layout>
  );
}
