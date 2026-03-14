/* eslint-disable */
import React from "react";

const TopicSection = ({ topicName, summary, href, children }) => {
  return (
    <div style={{
      width: "100%",
      marginBottom: "32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid #EDD8C8",
        borderTop: "3px solid #C4622D",
        padding: "28px",
        marginBottom: "16px",
      }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "20px",
          fontWeight: "700",
          color: "#1a0800",
          marginBottom: "12px",
        }}>
          {topicName}
        </h3>
        <p style={{
          fontSize: "14px",
          color: "#4a2010",
          lineHeight: "1.75",
          fontWeight: "400",
          marginBottom: "16px",
        }}>
          {summary}
        </p>
        {children && (
          <div style={{ marginBottom: "16px" }}>
            {children}
          </div>
        )}
        {href && (
          <a href={href} style={{
            display: "inline-block",
            background: "#C4622D",
            color: "white",
            borderRadius: "24px",
            padding: "10px 24px",
            fontSize: "13px",
            fontWeight: "700",
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Read more →
          </a>
        )}
      </div>
    </div>
  );
};

export default TopicSection;
