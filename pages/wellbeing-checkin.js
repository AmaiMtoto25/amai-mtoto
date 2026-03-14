/* eslint-disable */
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  return { props: {} };
}

const MOODS = [
  { emoji: "😔", label: "Really hard", value: 1, color: "#A32D2D" },
  { emoji: "😟", label: "Struggling",  value: 2, color: "#C4622D" },
  { emoji: "😐", label: "Getting by",  value: 3, color: "#854F0B" },
  { emoji: "🙂", label: "Okay",        value: 4, color: "#2D6A4F" },
  { emoji: "😊", label: "Really good", value: 5, color: "#1B4332" },
];

const FEELING_TAGS = [
  { label: "Worry about baby",     type: "hard" },
  { label: "Grateful moments",     type: "good" },
  { label: "Feeling dismissed",    type: "hard", escalate: true },
  { label: "Low energy",           type: "hard" },
  { label: "Relationship stress",  type: "hard" },
  { label: "Feeling connected",    type: "good" },
  { label: "Work pressure",        type: "hard" },
  { label: "Body image",           type: "hard" },
  { label: "Racism or bias",       type: "hard", escalate: true },
  { label: "Financial worry",      type: "hard" },
  { label: "Movement helped",      type: "good" },
  { label: "Sleep problems",       type: "hard" },
  { label: "Birth anxiety",        type: "hard", escalate: true },
  { label: "Feeling supported",    type: "good" },
  { label: "Lonely or isolated",   type: "hard", escalate: true },
  { label: "Hopeful",              type: "good" },
];

const RESOURCES = [
  { icon: "◈", title: "5-min breathing session", desc: "A grounding breathwork practice made for pregnancy.", href: "/trimester-1/wellbeing", type: "breathing" },
  { icon: "❋", title: "Gentle movement today", desc: "10 min prenatal yoga — low energy, low pressure.", href: "/trimester-1/exercise", type: "movement" },
  { icon: "✦", title: "You are not alone", desc: "Stories from Black mothers who felt the same way.", href: "/about-us", type: "stories" },
  { icon: "◉", title: "Join your peer circle", desc: "Your trimester group is here for you — real mothers, real support.", href: "https://amai-mtoto.forumotion.com/", type: "peer" },
  { icon: "◆", title: "PANDAS helpline", desc: "Free, confidential postnatal depression support. 0808 1961 776", href: "tel:08081961776", type: "support" },
];

const JOURNAL_PROMPTS = [
  "This week, the thing that felt hardest was...",
  "Something I'm grateful for right now is...",
  "I wish my midwife understood that...",
  "One thing that helped me this week was...",
  "Right now I need...",
];

export default function WellbeingCheckin() {
  const { user } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [mood, setMood] = useState(null);
  const [anxiety, setAnxiety] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [supported, setSupported] = useState(5);
  const [selectedTags, setSelectedTags] = useState([]);
  const [journal, setJournal] = useState("");
  const [shareWith, setShareWith] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showEscalation, setShowEscalation] = useState(false);
  const [promptIndex] = useState(Math.floor(Math.random() * JOURNAL_PROMPTS.length));

  const AKOKO = "/akoko-nan-medium.png";

  const shouldEscalate = () => {
    const lowMood = mood && mood.value <= 2;
    const escalateTags = selectedTags.some(t => FEELING_TAGS.find(f => f.label === t)?.escalate);
    return lowMood || escalateTags;
  };

  const handleSubmit = () => {
    if (shouldEscalate()) setShowEscalation(true);
    setSubmitted(true);
  };

  const toggleTag = (label) => {
    setSelectedTags(prev =>
      prev.includes(label) ? prev.filter(t => t !== label) : [...prev, label]
    );
  };

  const s = {
    page: { background: "#FDF6F0", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" },
    hero: { background: `linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)`, padding: "56px 80px", position: "relative", overflow: "hidden" },
    heroSymbol: { position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "220px", height: "220px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" },
    badge: { display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "24px", padding: "6px 16px", color: "#B7E4C7", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "20px", fontFamily: "'DM Sans', sans-serif" },
    badgeDot: { width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", display: "inline-block", flexShrink: 0 },
    heroTitle: { fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "14px" },
    heroSub: { fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: "1.75", maxWidth: "480px", fontWeight: "400" },
    streak: { background: "#1a0800", padding: "16px 80px", display: "flex", alignItems: "center", gap: "32px" },
    streakNum: { fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#F5A623", fontWeight: "700", display: "block" },
    streakLbl: { fontSize: "10px", color: "rgba(255,255,255,0.6)", fontWeight: "600", letterSpacing: "0.5px" },
    streakDiv: { width: "1px", height: "32px", background: "rgba(255,255,255,0.1)" },
    body: { padding: "48px 80px", maxWidth: "840px", margin: "0 auto" },
    secLbl: { fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "8px" },
    secTitle: { fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1a0800", marginBottom: "20px" },
    card: { background: "white", borderRadius: "16px", border: "1px solid #EDD8C8", padding: "28px", marginBottom: "20px" },
    divider: { display: "flex", alignItems: "center", gap: "12px", margin: "28px 0 20px" },
    dividerLine: { flex: 1, height: "1px", background: "#EDD8C8" },
  };

  if (submitted) {
    return (
      <Layout>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <div style={s.page}>

          {/* Escalation banner */}
          {showEscalation && (
            <div style={{ background: "#3D1200", padding: "20px 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "white", marginBottom: "6px", fontWeight: "700" }}>It sounds like things are really hard right now.</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)", fontWeight: "400" }}>You deserve support. The PANDAS helpline is free, confidential and here for you.</p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="tel:08081961776" style={{ background: "#F5A623", color: "#3D1200", borderRadius: "24px", padding: "10px 24px", fontSize: "14px", fontWeight: "700", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>Call PANDAS now</a>
                <a href="https://www.blackmindsmatteruk.com/" target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderRadius: "24px", padding: "10px 24px", fontSize: "14px", fontWeight: "600", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>Black Minds Matter</a>
              </div>
            </div>
          )}

          {/* Thank you hero */}
          <div style={{ ...s.hero, textAlign: "center", padding: "64px 80px" }}>
            <div style={s.heroSymbol}></div>
            <div style={{ fontSize: "56px", marginBottom: "20px" }}>{mood?.emoji || "💚"}</div>
            <h1 style={{ ...s.heroTitle, margin: "0 auto 14px" }}>Thank you for checking in.</h1>
            <p style={{ ...s.heroSub, margin: "0 auto" }}>You showed up for yourself today. That matters more than you know.</p>
          </div>

          <div style={{ ...s.body }}>

            {/* Summary card */}
            <div style={{ ...s.card, borderTop: `3px solid ${mood?.color || "#2D6A4F"}` }}>
              <div style={s.secLbl}>Your check-in summary</div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "40px" }}>{mood?.emoji}</span>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#1a0800", fontWeight: "700" }}>{mood?.label}</div>
                  <div style={{ fontSize: "13px", color: "#888", marginTop: "2px" }}>Today — {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                {[{ label: "Anxiety", value: anxiety }, { label: "Energy", value: energy }, { label: "Support", value: supported }].map((m, i) => (
                  <div key={i} style={{ background: "#FDF6F0", borderRadius: "10px", padding: "12px 16px", textAlign: "center", flex: 1, minWidth: "80px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#C4622D", fontWeight: "700" }}>{m.value}</div>
                    <div style={{ fontSize: "11px", color: "#888", fontWeight: "600" }}>{m.label}</div>
                  </div>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {selectedTags.map((t, i) => {
                    const tag = FEELING_TAGS.find(f => f.label === t);
                    return (
                      <span key={i} style={{ background: tag?.type === "good" ? "#E8F5EE" : "#FEF3E8", color: tag?.type === "good" ? "#1B4332" : "#8B2500", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600" }}>{t}</span>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Share */}
            <div style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)", borderRadius: "16px", padding: "28px 32px", marginBottom: "24px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-16px", bottom: "-16px", width: "100px", height: "100px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "white", marginBottom: "8px", fontWeight: "700" }}>Share your summary</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginBottom: "20px", fontWeight: "400" }}>You are in complete control. Choose who sees this — or keep it just for you.</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["Keep private", "Share with midwife", "Share with doula"].map((opt, i) => (
                  <button key={i} onClick={() => setShareWith(opt)} style={{ background: shareWith === opt ? "#F5A623" : "rgba(255,255,255,0.15)", color: shareWith === opt ? "#3D1200" : "white", border: shareWith === opt ? "none" : "1px solid rgba(255,255,255,0.3)", borderRadius: "24px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                    {opt}
                  </button>
                ))}
              </div>
              {shareWith && shareWith !== "Keep private" && (
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "12px" }}>✓ Your summary will be available to share at your next appointment.</p>
              )}
            </div>

            {/* Resources */}
            <div style={s.divider}><div style={s.secLbl}>For you, right now</div><div style={s.dividerLine}></div></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", marginBottom: "32px" }}>
              {RESOURCES.map((r, i) => (
                <a key={i} href={r.href} target={r.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderTop: i % 2 === 0 ? "3px solid #2D6A4F" : "3px solid #C4622D", padding: "20px", textDecoration: "none", display: "block" }}>
                  <span style={{ fontSize: "22px", color: i % 2 === 0 ? "#2D6A4F" : "#C4622D", marginBottom: "10px", display: "block" }}>{r.icon}</span>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#1a0800", marginBottom: "6px" }}>{r.title}</div>
                  <div style={{ fontSize: "12px", color: "#6b4030", lineHeight: "1.6", fontWeight: "400" }}>{r.desc}</div>
                </a>
              ))}
            </div>

            {/* Back to dashboard */}
            <button onClick={() => router.push("/dashboard")} style={{ width: "100%", background: "#1B4332", color: "white", border: "none", borderRadius: "12px", padding: "16px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginBottom: "12px" }}>
              Back to my dashboard
            </button>
            <button onClick={() => { setSubmitted(false); setStep(1); setMood(null); setSelectedTags([]); setJournal(""); }} style={{ width: "100%", background: "transparent", color: "#6b4030", border: "1px solid #EDD8C8", borderRadius: "12px", padding: "12px", fontSize: "13px", fontWeight: "500", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Edit my check-in
            </button>

          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .ci-hero { padding: 40px 20px !important; }
            .ci-streak { padding: 14px 20px !important; gap: 16px !important; }
            .ci-body { padding: 32px 16px !important; }
            .ci-resources { grid-template-columns: 1fr !important; }
            .ci-share-btns { flex-direction: column !important; }
            .ci-escalation { padding: 20px !important; flex-direction: column !important; }
          }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={s.page}>

        {/* Hero */}
        <div className="ci-hero" style={s.hero}>
          <div style={s.heroSymbol}></div>
          <div style={s.badge}><span style={s.badgeDot}></span>WEEKLY CHECK-IN</div>
          <h1 style={s.heroTitle}>How are you <em style={{ fontStyle: "italic", color: "#B7E4C7" }}>feeling</em> today?</h1>
          <p style={s.heroSub}>This is your space — honest, private, and unjudged. There are no wrong answers. Take as long as you need.</p>
        </div>

        {/* Streak bar */}
        <div className="ci-streak" style={s.streak}>
          {[{ num: "6", lbl: "WEEK STREAK" }, { num: "18", lbl: "CHECK-INS" }, { num: "T2", lbl: "TRIMESTER" }, { num: "24w", lbl: "PREGNANT" }].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={s.streakDiv}></div>}
              <div style={{ textAlign: "center" }}>
                <span style={s.streakNum}>{item.num}</span>
                <span style={s.streakLbl}>{item.lbl}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ background: "#EDD8C8", height: "4px" }}>
          <div style={{ background: "#2D6A4F", height: "100%", width: `${(step / 4) * 100}%`, transition: "width 0.3s" }}></div>
        </div>

        <div className="ci-body" style={{ ...s.body, paddingTop: "40px" }}>

          {/* Step 1 — Mood */}
          {step === 1 && (
            <>
              <div style={s.secLbl}>Step 1 of 4</div>
              <h2 style={s.secTitle}>Overall, how are you <em style={{ fontStyle: "italic", color: "#C4622D" }}>feeling?</em></h2>
              <div style={{ display: "flex", gap: "12px", marginBottom: "32px", flexWrap: "wrap" }}>
                {MOODS.map((m) => (
                  <div key={m.value} onClick={() => setMood(m)} style={{ flex: 1, minWidth: "80px", background: mood?.value === m.value ? "#E8F5EE" : "white", border: `1.5px solid ${mood?.value === m.value ? m.color : "#EDD8C8"}`, borderRadius: "14px", padding: "18px 12px", textAlign: "center", cursor: "pointer", transition: "all 0.15s" }}>
                    <span style={{ fontSize: "32px", display: "block", marginBottom: "8px" }}>{m.emoji}</span>
                    <span style={{ fontSize: "12px", fontWeight: "600", color: mood?.value === m.value ? m.color : "#6b4030" }}>{m.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => mood && setStep(2)} style={{ width: "100%", background: mood ? "#2D6A4F" : "#EDD8C8", color: mood ? "white" : "#aaa", border: "none", borderRadius: "12px", padding: "16px", fontSize: "15px", fontWeight: "700", cursor: mood ? "pointer" : "not-allowed", fontFamily: "'DM Sans', sans-serif" }}>
                Continue →
              </button>
            </>
          )}

          {/* Step 2 — Sliders */}
          {step === 2 && (
            <>
              <div style={s.secLbl}>Step 2 of 4</div>
              <h2 style={s.secTitle}>Rate these areas <em style={{ fontStyle: "italic", color: "#C4622D" }}>this week</em></h2>
              {[
                { label: "Anxiety level", value: anxiety, setter: setAnxiety, low: "None at all", high: "Very high", color: "#C4622D" },
                { label: "Energy levels", value: energy, setter: setEnergy, low: "Exhausted", high: "Full of energy", color: "#2D6A4F" },
                { label: "Feeling supported", value: supported, setter: setSupported, low: "Very alone", high: "Well supported", color: "#2D6A4F" },
              ].map((slider, i) => (
                <div key={i} style={{ ...s.card, padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#1a0800" }}>{slider.label}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: "700", color: slider.color }}>{slider.value}</span>
                  </div>
                  <input type="range" min="1" max="10" value={slider.value} onChange={e => slider.setter(Number(e.target.value))} step="1" style={{ width: "100%", accentColor: slider.color, height: "6px", marginBottom: "8px" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#aaa", fontWeight: "500" }}>
                    <span>{slider.low}</span><span>{slider.high}</span>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, background: "transparent", color: "#6b4030", border: "1px solid #EDD8C8", borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: "500", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
                <button onClick={() => setStep(3)} style={{ flex: 2, background: "#2D6A4F", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Continue →</button>
              </div>
            </>
          )}

          {/* Step 3 — Tags */}
          {step === 3 && (
            <>
              <div style={s.secLbl}>Step 3 of 4</div>
              <h2 style={s.secTitle}>What's been coming up? <em style={{ fontStyle: "italic", color: "#C4622D" }}>Select all that apply</em></h2>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                {FEELING_TAGS.map((tag, i) => {
                  const selected = selectedTags.includes(tag.label);
                  return (
                    <div key={i} onClick={() => toggleTag(tag.label)} style={{ background: selected ? (tag.type === "good" ? "#E8F5EE" : "#FEF3E8") : "white", border: `1.5px solid ${selected ? (tag.type === "good" ? "#2D6A4F" : "#C4622D") : "#EDD8C8"}`, borderRadius: "24px", padding: "8px 16px", fontSize: "13px", fontWeight: "600", color: selected ? (tag.type === "good" ? "#1B4332" : "#8B2500") : "#6b4030", cursor: "pointer", transition: "all 0.15s" }}>
                      {tag.label}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, background: "transparent", color: "#6b4030", border: "1px solid #EDD8C8", borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: "500", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
                <button onClick={() => setStep(4)} style={{ flex: 2, background: "#2D6A4F", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Continue →</button>
              </div>
            </>
          )}

          {/* Step 4 — Journal */}
          {step === 4 && (
            <>
              <div style={s.secLbl}>Step 4 of 4</div>
              <h2 style={s.secTitle}>Anything you want to <em style={{ fontStyle: "italic", color: "#C4622D" }}>say?</em></h2>
              <div style={{ ...s.card, padding: "24px 28px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#1a0800", marginBottom: "12px" }}>{JOURNAL_PROMPTS[promptIndex]}</p>
                <textarea value={journal} onChange={e => setJournal(e.target.value)} placeholder="Write as much or as little as you like. This is just for you." style={{ width: "100%", background: "#FDF6F0", border: "1px solid #EDD8C8", borderRadius: "10px", padding: "14px 16px", fontSize: "14px", color: "#1a0800", fontFamily: "'DM Sans', sans-serif", height: "120px", resize: "none", outline: "none", lineHeight: "1.7" }} />
                <p style={{ fontSize: "11px", color: "#aaa", marginTop: "8px" }}>Your journal is private — it is never shared without your permission.</p>
              </div>

              {/* Notification preference */}
              <div style={{ ...s.card, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#1a0800", marginBottom: "4px" }}>Weekly check-in reminder</div>
                  <div style={{ fontSize: "12px", color: "#6b4030" }}>We'll gently remind you to check in each week. You can turn this off any time.</div>
                </div>
                <div style={{ background: "#2D6A4F", borderRadius: "20px", padding: "6px 16px", fontSize: "12px", fontWeight: "700", color: "white", whiteSpace: "nowrap", cursor: "pointer" }}>On ✓</div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button onClick={() => setStep(3)} style={{ flex: 1, background: "transparent", color: "#6b4030", border: "1px solid #EDD8C8", borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: "500", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
                <button onClick={handleSubmit} style={{ flex: 2, background: "#2D6A4F", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Save my check-in ✓</button>
              </div>
              <button onClick={() => router.push("/dashboard")} style={{ width: "100%", background: "transparent", color: "#aaa", border: "none", padding: "12px", fontSize: "13px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: "8px" }}>
                Come back to this later
              </button>
            </>
          )}

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ci-hero { padding: 40px 20px !important; }
          .ci-streak { padding: 14px 20px !important; gap: 16px !important; }
          .ci-body { padding: 32px 16px !important; }
        }
      `}</style>
    </Layout>
  );
}
