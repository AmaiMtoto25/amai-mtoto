/* eslint-disable */
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .am-footer { background: #1a0800; padding: 48px 80px 24px; font-family: 'DM Sans', sans-serif; }
        .am-footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .am-footer-logo { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: white; margin-bottom: 12px; }
        .am-footer-logo span { color: #F5C87A; }
        .am-footer-tagline { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.7; font-weight: 300; max-width: 240px; }
        .am-footer-col-title { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #52B788; text-transform: uppercase; margin-bottom: 16px; }
        .am-footer-link { display: block; color: rgba(255,255,255,0.65); text-decoration: none; font-size: 14px; margin-bottom: 10px; font-weight: 300; }
        .am-footer-link:hover { color: #F5A623; }
        .am-footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; align-items: center; justify-content: space-between; }
        .am-footer-copy { font-size: 12px; color: rgba(255,255,255,0.4); }
        .am-footer-copy strong { color: #F5A623; }
        @media (max-width: 900px) {
          .am-footer { padding: 40px 24px 20px; }
          .am-footer-top { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 540px) {
          .am-footer-top { grid-template-columns: 1fr; }
        }
      `}</style>
      <footer className="am-footer">
        <div className="am-footer-top">
          <div>
            <div className="am-footer-logo">Amai-<span>Mtoto</span></div>
            <p className="am-footer-tagline">A culturally-rooted pregnancy wellbeing hub for Black and mixed-race mothers — midwifery-led, community-powered.</p>
          </div>
          <div>
            <div className="am-footer-col-title">Explore</div>
            <a className="am-footer-link" href="/faq">FAQ</a>
            <a className="am-footer-link" href="/about-us">About Us</a>
            <a className="am-footer-link" href="/disclaimer">Disclaimer</a>
            <a className="am-footer-link" href="/contact-us">Contact Us</a>
          </div>
          <div>
            <div className="am-footer-col-title">Trimesters</div>
            <a className="am-footer-link" href="/trimester-1/summary">Trimester 1</a>
            <a className="am-footer-link" href="/trimester-2/summary">Trimester 2</a>
            <a className="am-footer-link" href="/trimester-3/summary">Trimester 3</a>
          </div>
          <div>
            <div className="am-footer-col-title">Community</div>
            <a className="am-footer-link" href="https://amai-mtoto.forumotion.com/" target="_blank" rel="noreferrer">Forum</a>
            <a className="am-footer-link" href="/sign-up">Join Us</a>
            <a className="am-footer-link" href="/log-in">Sign In</a>
          </div>
        </div>
        <div className="am-footer-bottom">
          <p className="am-footer-copy">© {new Date().getFullYear()} <strong>Amai-Mtoto</strong>. All rights reserved.</p>
          <p className="am-footer-copy">Built for Black and mixed-race mothers.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
