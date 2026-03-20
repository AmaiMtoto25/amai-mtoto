/* eslint-disable */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getUserById } from "../firebase/firestore";

export async function getServerSideProps() {
  return { props: {} };
}

const AKOKO = "/akoko-nan-medium.png";

const TRIMESTER_CONTENT = {
  1: {
    label: "First Trimester", weeks: "Weeks 1–12", color: "#C4622D",
    babySize: "a poppy seed growing into a lime",
    summary: "Your body is working incredibly hard right now — even if you can't see it yet. Hormones are surging, your baby's major organs are forming, and you may be feeling the full force of early pregnancy symptoms.",
    symptoms: ["Nausea", "Tiredness", "Tender breasts", "Heightened smell", "Frequent urination", "Mood changes"],
    tip: { tag: "PARENT EDUCATION", headline: "Book your midwife appointment as early as possible", fact: "Your first midwife booking appointment should happen before 10 weeks. This is where your care plan begins — ask every question you have.", gap: "Many Black women report feeling rushed at this appointment. You are entitled to take your time.", sayThis: "\"I'd like to make sure we cover my cultural background and any specific risks relevant to my community today.\"", source: "NICE Antenatal Care Guidelines NG201" },
    links: [
      { label: "What to expect", href: "/trimester-1/summary", icon: "◉", color: "#C4622D" },
      { label: "Nutrition", href: "/trimester-1/nutrition", icon: "✦", color: "#2D6A4F" },
      { label: "Wellbeing", href: "/trimester-1/wellbeing", icon: "◈", color: "#1B4332" },
      { label: "Exercise", href: "/trimester-1/exercise", icon: "❋", color: "#8B2500" },
    ],
  },
  2: {
    label: "Second Trimester", weeks: "Weeks 13–26", color: "#2D6A4F",
    babySize: "a corn on the cob — and can now hear your voice",
    summary: "Many women start to feel more like themselves in the second trimester. Your bump is growing, early symptoms often ease, and you may feel your baby's first movements from around 16–20 weeks.",
    symptoms: ["Mild swelling", "Leg cramps", "Congestion", "Weight gain", "Ligament pain", "Varicose veins"],
    tip: { tag: "NUTRITION", headline: "Check your iron levels at your next appointment", fact: "Iron deficiency anaemia is more common in Black and mixed heritage women during pregnancy. Ask your midwife to check your levels — don't wait to be offered it.", gap: "Standard NHS guidance doesn't always flag this proactively for Black and mixed heritage women.", sayThis: "\"Can we check my iron levels today? I want to make sure I'm not becoming anaemic.\"", source: "NICE Anaemia in Pregnancy Guidelines" },
    links: [
      { label: "What to expect", href: "/trimester-2/summary", icon: "◉", color: "#2D6A4F" },
      { label: "Nutrition", href: "/trimester-2/nutrition", icon: "✦", color: "#C4622D" },
      { label: "Wellbeing", href: "/trimester-2/wellbeing", icon: "◈", color: "#1B4332" },
      { label: "Exercise", href: "/trimester-2/exercise", icon: "❋", color: "#8B2500" },
    ],
  },
  3: {
    label: "Third Trimester", weeks: "Weeks 27–40", color: "#8B2500",
    babySize: "a butternut squash and putting on weight every day",
    summary: "You're in the home stretch. Your baby is growing rapidly and getting ready for birth. Aches and pains are common as your body adjusts. Rest when you can and prepare your birth plan.",
    symptoms: ["Back pain", "Pelvic pressure", "Shortness of breath", "Heartburn", "Frequent urination", "Swollen feet"],
    tip: { tag: "SAFETY", headline: "Know the signs of pre-eclampsia — they can be subtle", fact: "Pre-eclampsia is the leading cause of Black maternal death in the UK. Symptoms include persistent headaches, vision changes, sudden swelling, or pain under your ribs.", gap: "Black women's concerns about these symptoms are more likely to be dismissed. Trust your body and persist.", sayThis: "\"I have a persistent headache and I want to rule out pre-eclampsia. Can you check my blood pressure and urine today?\"", source: "MBRRACE-UK 2024, NICE Hypertension in Pregnancy NG133" },
    links: [
      { label: "What to expect", href: "/trimester-3/summary", icon: "◉", color: "#8B2500" },
      { label: "Nutrition", href: "/trimester-3/nutrition", icon: "✦", color: "#2D6A4F" },
      { label: "Wellbeing", href: "/trimester-3/wellbeing", icon: "◈", color: "#1B4332" },
      { label: "Exercise", href: "/trimester-3/exercise", icon: "❋", color: "#C4622D" },
    ],
  },
  4: {
    label: "After Birth", weeks: "The Fourth Trimester", color: "#2D6A4F",
    babySize: "here and in your arms",
    summary: "You've done something extraordinary. The fourth trimester covers the first 12 weeks after birth — a time of recovery, adjustment and learning. Your needs matter just as much as your baby's.",
    symptoms: ["Postnatal bleeding", "Night sweats", "Exhaustion", "Emotional changes", "Breast changes", "Pelvic floor recovery"],
    tip: { tag: "MENTAL WELLBEING", headline: "Your 6-week check should cover YOUR mental health too", fact: "Your 6-week postnatal check should include questions about your emotional wellbeing, not just your physical recovery. If your GP doesn't ask, bring it up yourself.", gap: "Black mothers are significantly less likely to be screened for postnatal depression at this appointment.", sayThis: "\"I'd like to talk about how I'm feeling emotionally today, not just my physical recovery.\"", source: "NICE Postnatal Care Guidelines NG194" },
    links: [
      { label: "After birth", href: "/trimester-4/summary", icon: "◉", color: "#2D6A4F" },
      { label: "Recovery", href: "/trimester-4/exercise", icon: "❋", color: "#C4622D" },
      { label: "Mental health", href: "/trimester-4/wellbeing", icon: "◈", color: "#8B2500" },
      { label: "Baby care", href: "/trimester-4/baby-care", icon: "◆", color: "#1B4332" },
    ],
  },
};

const getTrimester = (dueDateMs) => {
  if (!dueDateMs) return 1;
  const now = Date.now();
  const dueDate = Number(dueDateMs);
  const conceptionMs = dueDate - (40 * 7 * 24 * 60 * 60 * 1000);
  const weeks = Math.floor((now - conceptionMs) / (7 * 24 * 60 * 60 * 1000));
  if (weeks > 40) return 4;
  if (weeks >= 27) return 3;
  if (weeks >= 13) return 2;
  return 1;
};

const getWeeks = (dueDateMs) => {
  if (!dueDateMs) return null;
  const now = Date.now();
  const dueDate = Number(dueDateMs);
  const conceptionMs = dueDate - (40 * 7 * 24 * 60 * 60 * 1000);
  const totalDays = Math.floor((now - conceptionMs) / (24 * 60 * 60 * 1000));
  const weeks = Math.min(Math.max(Math.floor(totalDays / 7), 1), 42);
  return weeks;
};

const getExtraDays = (dueDateMs) => {
  if (!dueDateMs) return 0;
  const now = Date.now();
  const dueDate = Number(dueDateMs);
  const conceptionMs = dueDate - (40 * 7 * 24 * 60 * 60 * 1000);
  const totalDays = Math.floor((now - conceptionMs) / (24 * 60 * 60 * 1000));
  return totalDays % 7;
};

const getDaysLeft = (dueDateMs) => {
  if (!dueDateMs) return null;
  const now = Date.now();
  const dueDate = Number(dueDateMs);
  const daysLeft = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));
  return Math.max(daysLeft, 0);
};

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
};

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [tipExpanded, setTipExpanded] = useState(false);
  const [userName, setUserName] = useState("");
  const [dueDateMs, setDueDateMs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { router.push("/log-in"); return; }
    const loadUser = async () => {
      try {
        const data = await getUserById(user.uid);
        if (data?.username) setUserName(data.username.split(" ")[0]);
        if (data?.dueDate) setDueDateMs(data.dueDate);
      } catch (e) {
        if (user.displayName) setUserName(user.displayName.split(" ")[0]);
      }
      setLoading(false);
    };
    loadUser();
  }, [user]);

  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#FDF6F0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#C4622D", marginBottom: "8px" }}>Amai-Mtoto</div>
        <div style={{ fontSize: "14px", color: "#888" }}>Loading your dashboard...</div>
      </div>
    </div>
  );

  const trimester = getTrimester(dueDateMs);
  const weeks = getWeeks(dueDateMs);
  const extraDays = getExtraDays(dueDateMs);
  const daysLeft = getDaysLeft(dueDateMs);
  const weeksLeft = daysLeft ? Math.floor(daysLeft / 7) : null;
  const content = TRIMESTER_CONTENT[trimester];
  const progressPct = weeks ? Math.min((weeks / 40) * 100, 100) : 0;

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Nav />

      <div style={{ background: "#FDF6F0", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

        {/* Safety strip */}
        <div style={{ background: "#1a0800", padding: "10px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>
            Need urgent help? <strong style={{ color: "#F5A623" }}>Call 999</strong> for emergencies · <strong style={{ color: "#F5A623" }}>Call 111</strong> for urgent pregnancy advice
          </span>
          <a href="/local-services" style={{ fontSize: "12px", color: "#74C69D", fontWeight: "600", textDecoration: "none" }}>Find local support →</a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Greeting */}
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: "700", color: "#1a0800", lineHeight: "1.2", marginBottom: "8px" }}>
              {getGreeting()}{userName ? `, ${userName}` : ""}. 👋
            </h1>
            <p style={{ fontSize: "15px", color: "#6b4030", lineHeight: "1.7", maxWidth: "500px", fontWeight: "400" }}>
              {weeks ? `You're ${weeks} weeks pregnant. Your baby is ${content.babySize}.` : trimester === 4 ? "Your baby is here and in your arms." : "Welcome to your dashboard."}
            </p>
          </div>

          {/* Journey progress bar */}
          <div style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)", borderRadius: "16px", padding: "24px 28px", marginBottom: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-16px", bottom: "-16px", width: "120px", height: "120px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>

            {/* Stats row */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              {[
                { n: weeks ? `${weeks}w ${extraDays}d` : "–", l: "PREGNANT" },
                { n: trimester === 4 ? "4th" : `T${trimester}`, l: "TRIMESTER" },
                { n: daysLeft !== null ? `${Math.floor(daysLeft/7)}w ${daysLeft%7}d` : "–", l: "UNTIL DUE DATE" },
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,36px)", color: "#F5A623", fontWeight: "700", display: "block", lineHeight: 1, marginBottom: "6px" }}>
                      {item.n}
                    </span>
                    <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", fontWeight: "700", letterSpacing: "1px" }}>{item.l}</span>
                  </div>
                  {i < arr.length - 1 && <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }}></div>}
                </React.Fragment>
              ))}
            </div>

            {/* Progress track */}
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "8px", height: "8px", position: "relative", overflow: "hidden", marginBottom: "8px" }}>
              <div style={{ background: "linear-gradient(90deg, #F5A623, #74C69D)", height: "100%", width: `${progressPct}%`, borderRadius: "8px" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "rgba(255,255,255,0.45)", fontWeight: "600" }}>
              <span>Week 1</span>
              {weeks && <span style={{ color: "#F5A623", fontWeight: "700" }}>Week {weeks} ✦</span>}
              <span>Week 40</span>
            </div>
          </div>

          {/* Trimester summary */}
          <div style={{ background: `linear-gradient(135deg, ${content.color}ee, ${content.color}aa)`, borderRadius: "16px", padding: "24px 28px", marginBottom: "20px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-16px", bottom: "-16px", width: "120px", height: "120px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
            <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.5px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", marginBottom: "8px" }}>{content.label} · {content.weeks}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "white", fontWeight: "700", marginBottom: "10px" }}>What's happening right now</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.75", marginBottom: "16px", fontWeight: "400" }}>{content.summary}</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
              {content.symptoms.map((s, i) => (
                <span key={i} style={{ background: "rgba(255,255,255,0.18)", color: "white", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "500" }}>{s}</span>
              ))}
            </div>
            <a href={content.links[0].href} style={{ display: "inline-block", background: "white", color: content.color, borderRadius: "20px", padding: "9px 20px", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>
              Full {content.label.toLowerCase()} guide →
            </a>
          </div>

          {/* Today's tip */}
          <div style={{ background: "white", borderRadius: "16px", border: "1px solid #EDD8C8", borderTop: `3px solid ${content.color}`, padding: "22px 26px", marginBottom: "20px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-10px", bottom: "-10px", width: "80px", height: "80px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.05, pointerEvents: "none" }}></div>
            <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.5px", color: content.color, textTransform: "uppercase", marginBottom: "6px" }}>Today's tip · {content.tip.tag}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: "700", color: "#1a0800", marginBottom: "10px", lineHeight: "1.3" }}>{content.tip.headline}</h3>
            <p style={{ fontSize: "14px", color: "#4a2010", lineHeight: "1.8", fontWeight: "400" }}>{content.tip.fact}</p>
            {tipExpanded && (
              <>
                <p style={{ fontSize: "13px", color: "#6b4030", lineHeight: "1.7", fontStyle: "italic", margin: "14px 0", paddingLeft: "12px", borderLeft: `3px solid ${content.color}` }}>{content.tip.gap}</p>
                <div style={{ background: "#FDF6F0", borderRadius: "10px", border: "1px solid #EDD8C8", padding: "14px 18px", marginBottom: "12px" }}>
                  <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.5px", color: content.color, textTransform: "uppercase", marginBottom: "6px" }}>Say this at your appointment</div>
                  <p style={{ fontSize: "14px", color: "#1a0800", fontWeight: "500", lineHeight: "1.7" }}>{content.tip.sayThis}</p>
                </div>
                <p style={{ fontSize: "11px", color: "#aaa" }}>Source: {content.tip.source}</p>
              </>
            )}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px", flexWrap: "wrap" }}>
              <button onClick={() => setTipExpanded(!tipExpanded)} style={{ background: content.color, color: "white", border: "none", borderRadius: "20px", padding: "9px 18px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                {tipExpanded ? "Show less" : "Read more →"}
              </button>
              <button style={{ background: "transparent", color: content.color, border: `1.5px solid ${content.color}`, borderRadius: "20px", padding: "9px 18px", fontSize: "13px", fontWeight: "600", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                Save tip
              </button>
            </div>
          </div>

          {/* Nutrition, Exercise, Wellbeing */}
          <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "12px" }}>Your wellbeing</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {content.links.slice(1).map((link, i) => (
              <a key={i} href={link.href} style={{ background: "white", borderRadius: "12px", border: "1px solid #EDD8C8", borderTop: `3px solid ${link.color}`, padding: "18px 16px", textDecoration: "none" }}>
                <span style={{ fontSize: "22px", color: link.color, display: "block", marginBottom: "8px" }}>{link.icon}</span>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#1a0800", marginBottom: "4px" }}>{link.label}</div>
                <div style={{ fontSize: "12px", color: "#6b4030", lineHeight: "1.5" }}>
                  {link.label === "Nutrition" || link.label === "Nutrition & Feeding" ? "Cultural foods & trimester guides" :
                   link.label === "Exercise" || link.label === "Recovery" ? "Safe movement for this stage" :
                   link.label === "Wellbeing" || link.label === "Mental health" ? "Mental health & self-care" :
                   "Essentials for new parents"}
                </div>
              </a>
            ))}
          </div>

          {/* Wellbeing check-in */}
          <div style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)", borderRadius: "14px", padding: "20px 24px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-16px", top: "50%", transform: "translateY(-50%)", width: "90px", height: "90px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.5px", color: "#74C69D", textTransform: "uppercase", marginBottom: "4px" }}>Weekly check-in</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "white", fontWeight: "700", marginBottom: "3px" }}>How are you feeling today?</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.72)" }}>2 minutes · private · just for you</div>
            </div>
            <a href="/wellbeing-checkin" style={{ background: "#F5A623", color: "#3D1200", borderRadius: "24px", padding: "12px 24px", fontSize: "14px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", fontFamily: "'DM Sans', sans-serif" }}>
              Check in →
            </a>
          </div>

          {/* Services */}
          <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "12px" }}>Support & services</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
            {[
              { label: "Local services", sub: "Find support near you", href: "/local-services", icon: "◉", color: "#C4622D" },
              { label: "Community forum", sub: "Connect with other mothers", href: "https://amai-mtoto.forumotion.com/", icon: "◈", color: "#2D6A4F", external: true },
              { label: "NHS staff portal", sub: "For midwives & health visitors", href: "/nhs-staff", icon: "✦", color: "#1B4332" },
              { label: "FAQ", sub: "Common pregnancy questions", href: "/faq", icon: "❋", color: "#8B2500" },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.external ? "_blank" : "_self"} rel="noreferrer" style={{ background: "white", borderRadius: "12px", border: "1px solid #EDD8C8", borderLeft: `3px solid ${s.color}`, padding: "16px 18px", textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "20px", color: s.color, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#1a0800" }}>{s.label}</div>
                  <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>{s.sub}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .db-pillars { grid-template-columns: 1fr 1fr !important; }
          .db-services { grid-template-columns: 1fr !important; }
          .db-safety { padding: 10px 20px !important; }
          .db-body { padding: 32px 16px !important; }
          .db-checkin { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
