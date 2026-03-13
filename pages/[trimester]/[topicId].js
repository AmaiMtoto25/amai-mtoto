/* eslint-disable */
import React from "react";
import ArticleCard from "../../components/ArticleCard";
import Layout from "../../components/Layout";
import topicSummaryArr from "../../lib/data/topicSummary";
import { getArticleByTopic } from "../../lib/helper-functions.js";
import { getArticlesByTrimester } from "../../firebase/firestore";
import Head from "next/head";

export async function getServerSideProps({ params, resolvedUrl }) {
  const topicId = params.topicId;
  const trimester = params.trimester.slice(params.trimester.length - 1);
  const trimesterArticlesDb = await getArticlesByTrimester(trimester);
  return {
    props: { trimesterArticlesDb, topicId, resolvedUrl },
  };
}

const trimesterColors = {
  "1": { from: "#3D1200", to: "#C4622D", label: "First Trimester", weeks: "Weeks 1–12" },
  "2": { from: "#1B4332", to: "#2D6A4F", label: "Second Trimester", weeks: "Weeks 13–26" },
  "3": { from: "#1a0800", to: "#5C1200", label: "Third Trimester", weeks: "Weeks 27–40" },
};

const topicIcons = {
  summary: "◉",
  exercise: "❋",
  nutrition: "✦",
  wellbeing: "◈",
};

const Topic = ({ trimesterArticlesDb, topicId, resolvedUrl }) => {
  const topicContent = topicSummaryArr.find((topic) => topic.id === resolvedUrl);
  const localTopicArticles = topicContent.resources;
  const topicArticles = getArticleByTopic(
    [...localTopicArticles, ...trimesterArticlesDb],
    topicId
  );

  const trimesterNum = resolvedUrl.match(/trimester-(\d)/)?.[1] || "1";
  const colors = trimesterColors[trimesterNum];
  const icon = topicIcons[topicId] || "◉";

  const otherTopics = ["summary", "exercise", "nutrition", "wellbeing"].filter(t => t !== topicId);

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero banner */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
        padding: "72px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative symbol */}
        <div style={{
          position: "absolute", right: "60px", top: "50%",
          transform: "translateY(-50%)",
          fontSize: "200px", color: "rgba(255,255,255,0.04)",
          fontFamily: "serif", lineHeight: 1, pointerEvents: "none",
          userSelect: "none",
        }}>{icon}</div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "24px", padding: "6px 16px", color: "rgba(255,255,255,0.9)",
          fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px",
          marginBottom: "20px", fontFamily: "'DM Sans', sans-serif",
        }}>
          <span style={{width:"8px",height:"8px",background:"#F5A623",borderRadius:"50%",display:"inline-block"}}></span>
          {colors.label.toUpperCase()} · {colors.weeks.toUpperCase()}
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 4vw, 54px)",
          fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "16px",
        }}>
          {topicContent.title}
        </h1>

        {/* Topic nav pills */}
        <div style={{display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "28px"}}>
          <span style={{
            background: "rgba(255,255,255,0.25)", color: "white",
            borderRadius: "20px", padding: "6px 16px", fontSize: "13px",
            fontWeight: "600", fontFamily: "'DM Sans', sans-serif",
            border: "1px solid rgba(255,255,255,0.4)",
          }}>
            {topicIcons[topicId]} {topicId.charAt(0).toUpperCase() + topicId.slice(1)}
          </span>
          {otherTopics.map(t => (
            <a key={t} href={`/trimester-${trimesterNum}/${t}`} style={{
              background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)",
              borderRadius: "20px", padding: "6px 16px", fontSize: "13px",
              fontWeight: "500", fontFamily: "'DM Sans', sans-serif",
              border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none",
            }}>
              {topicIcons[t]} {t.charAt(0).toUpperCase() + t.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div style={{background: "#FDF6F0", padding: "64px 80px", fontFamily: "'DM Sans', sans-serif"}}>
        <div style={{maxWidth: "800px", margin: "0 auto"}}>

          {/* Main content card */}
          <div style={{
            background: "white", borderRadius: "20px",
            border: "1px solid #EDD8C8", padding: "48px",
            marginBottom: "40px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          }}>
            <div style={{
              fontSize: "15px", color: "#4a2010", lineHeight: "1.85",
              fontWeight: "300",
            }}
              className="topic-content"
            >
              {topicContent.content}
            </div>
          </div>

          {/* Resources section */}
          {topicArticles.length > 0 && (
            <div>
              <div style={{
                display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px",
              }}>
                <span style={{
                  fontSize: "11px", fontWeight: "700", letterSpacing: "2px",
                  color: "#2D6A4F", textTransform: "uppercase",
                }}>Further Reading</span>
                <div style={{flex: 1, height: "1px", background: "#EDD8C8"}}></div>
              </div>
              <ArticleCard articles={topicArticles} />
            </div>
          )}

          {/* Trimester navigation */}
          <div style={{
            marginTop: "56px",
            background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            borderRadius: "20px", padding: "36px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "20px", flexWrap: "wrap",
          }}>
            <div>
              <p style={{fontFamily:"'Playfair Display', serif", fontSize:"20px", color:"white", marginBottom:"6px"}}>
                Explore more topics
              </p>
              <p style={{fontSize:"13px", color:"rgba(255,255,255,0.7)", fontWeight:"300"}}>
                Continue your pregnancy journey
              </p>
            </div>
            <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
              {otherTopics.map(t => (
                <a key={t} href={`/trimester-${trimesterNum}/${t}`} style={{
                  background: "rgba(255,255,255,0.15)", color: "white",
                  borderRadius: "24px", padding: "10px 20px", fontSize: "14px",
                  fontWeight: "500", fontFamily: "'DM Sans', sans-serif",
                  border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none",
                }}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .topic-content p { margin-bottom: 16px; }
        .topic-content ul { padding-left: 24px; margin: 12px 0 20px; }
        .topic-content li { margin-bottom: 8px; color: #4a2010; font-size: 15px; line-height: 1.7; }
        .topic-content h2 { font-family: 'Playfair Display', serif; font-size: 22px; color: #1a0800; margin: 28px 0 16px; font-weight: 700; }
        .topic-content iframe { width: 100%; height: 360px; border-radius: 12px; margin: 20px 0; border: none; }
        .topic-content img { width: 100%; border-radius: 12px; margin: 20px 0; }
        @media (max-width: 900px) {
          .topic-content iframe { height: 220px; }
        }
      `}</style>
    </Layout>
  );
};

export default Topic;
