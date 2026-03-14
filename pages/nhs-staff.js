/* eslint-disable */
import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  return { props: {} };
}

// ── Data ──────────────────────────────────────────────────────────────

const SIGNPOSTING_CARDS = [
  {
    appointment: "Booking appointment",
    topic: "Parent Education",
    icon: "◉",
    color: "#C4622D",
    desc: "Antenatal modules and cultural intro",
    link: "/trimester-1/summary",
    message: "I'd like to share a resource with you about what to expect in your first trimester.",
  },
  {
    appointment: "Nutrition conversation",
    topic: "Cultural Nutrition",
    icon: "✦",
    color: "#2D6A4F",
    desc: "Heritage recipe library and cultural foods guide",
    link: "/trimester-1/nutrition",
    message: "Here's a nutrition guide made specifically for African and Caribbean food traditions.",
  },
  {
    appointment: "Mental health screening",
    topic: "Wellbeing & Mindfulness",
    icon: "◈",
    color: "#1B4332",
    desc: "Mood journal and mindfulness sessions",
    link: "/wellbeing-checkin",
    message: "This is a gentle weekly check-in designed specifically for Black and mixed heritage mothers.",
  },
  {
    appointment: "GD diagnosis",
    topic: "GD Meal Planner",
    icon: "❋",
    color: "#8B2500",
    desc: "Cultural gestational diabetes meal planning",
    link: "/gd-meal-planner",
    message: "Here's a culturally relevant meal planner for gestational diabetes — it uses foods from African and Caribbean traditions.",
  },
  {
    appointment: "Any activity conversation",
    topic: "Movement Library",
    icon: "◆",
    color: "#2D6A4F",
    desc: "Pregnancy pilates and yoga with Black instructors",
    link: "/trimester-1/exercise",
    message: "Here's a pregnancy movement library with exercises shown on diverse body types.",
  },
  {
    appointment: "36-week appointment",
    topic: "Newborn Care",
    icon: "❖",
    color: "#C4622D",
    desc: "Feeding, sleep safety, skin care for Black babies",
    link: "/trimester-4/baby-care",
    message: "This guide covers newborn care including skin care guidance specific to Black and mixed heritage babies.",
  },
  {
    appointment: "Postnatal discharge",
    topic: "Fourth Trimester",
    icon: "◉",
    color: "#1B4332",
    desc: "Postnatal plan and recovery guidance",
    link: "/trimester-4/summary",
    message: "Here's a postnatal guide covering the first 12 weeks after birth — written specifically for our community.",
  },
  {
    appointment: "6-week check",
    topic: "Postnatal Recovery",
    icon: "◈",
    color: "#2D6A4F",
    desc: "Postnatal strength and mood journal",
    link: "/trimester-4/exercise",
    message: "This postnatal recovery programme acknowledges that Black women receive fewer physio referrals and fills that gap.",
  },
  {
    appointment: "Difficult birth / NICU",
    topic: "Mental Health Support",
    icon: "✦",
    color: "#8B2500",
    desc: "Birth trauma support and peer circles",
    link: "/trimester-4/wellbeing",
    message: "Here's a resource for processing difficult birth experiences — with peer support and a clear pathway to professional help.",
  },
];

const CULTURAL_GUIDES = [
  {
    community: "West African",
    flag: "🇳🇬",
    color: "#2D6A4F",
    practices: [
      { title: "Birth attendants", desc: "It is common for mothers, mothers-in-law and elder women to be present during labour. Ask who the patient would like in the room — do not assume." },
      { title: "Postpartum confinement", desc: "Many West African traditions involve a 40-day postnatal confinement period. Mothers may decline early discharge — discuss this respectfully." },
      { title: "Herbal remedies", desc: "Fenugreek, moringa and bitter leaf are commonly used. Ask about traditional remedies in a non-judgemental way at the booking appointment." },
      { title: "Naming ceremonies", desc: "The Outdooring (Ghana) or naming ceremony on day 8 is significant. Be aware this affects postnatal visiting patterns." },
    ],
  },
  {
    community: "Caribbean",
    flag: "🇯🇲",
    color: "#C4622D",
    practices: [
      { title: "Bush teas and remedies", desc: "Soursop leaf, cerasee and other bush teas are traditional during pregnancy. Ask gently — do not dismiss. Advise on any clinically significant interactions." },
      { title: "Spiritual and religious practice", desc: "Prayer and faith community are central for many Caribbean mothers. Acknowledge this as a strength, not a barrier." },
      { title: "Food in labour", desc: "Some Caribbean families bring specific foods for the postnatal period. Be flexible where clinically safe." },
      { title: "Extended family involvement", desc: "Grandmothers and aunts often take a lead role postnatally. Include them in discharge conversations where the patient wishes." },
    ],
  },
  {
    community: "East African",
    flag: "🇰🇪",
    color: "#1B4332",
    practices: [
      { title: "Female circumcision (FGM)", desc: "Sensitive, trauma-informed care is essential. Ask about FGM status at booking using approved clinical language. Refer to specialist services as needed." },
      { title: "Language and interpretation", desc: "Many East African mothers may have limited English. Always offer a professional interpreter — never use family members for clinical conversations." },
      { title: "Postnatal food traditions", desc: "Bone broth, spiced porridges and specific vegetables are traditional postnatal recovery foods. Support rather than replace with generic NHS dietary advice." },
      { title: "Mistrust of healthcare systems", desc: "Many East African women have experienced healthcare in systems with very different standards. Build trust through consistency and transparency." },
    ],
  },
  {
    community: "Mixed heritage",
    flag: "🌍",
    color: "#854F0B",
    practices: [
      { title: "Identity and belonging", desc: "Mixed heritage mothers may feel they do not fully belong to one community. Do not assume cultural practices — ask what traditions matter to her specifically." },
      { title: "Varied family structures", desc: "Mixed heritage families may navigate different expectations from different sides of the family. Acknowledge complexity without making assumptions." },
      { title: "Skin tone assessment", desc: "Jaundice, anaemia and other conditions can be harder to assess visually on mixed skin tones. Use clinical tools rather than visual assessment alone." },
      { title: "Cultural nutrition", desc: "Diet may blend multiple traditions. Ask what she eats rather than making assumptions based on appearance." },
    ],
  },
];

const CPD_MODULES = [
  {
    title: "Understanding Black maternal health inequalities",
    duration: "20 min",
    color: "#C4622D",
    icon: "◉",
    level: "Foundation",
    summary: "The evidence on racial disparities in UK maternity care. What the data tells us, why the gap exists, and what every clinician needs to know.",
    outcomes: ["Understand the key statistics on Black maternal mortality", "Recognise systemic vs individual factors", "Know current NHS commitments and your responsibilities"],
  },
  {
    title: "Cultural humility in maternity care",
    duration: "20 min",
    color: "#2D6A4F",
    icon: "◈",
    level: "Foundation",
    summary: "Moving beyond cultural competence to cultural humility — an ongoing practice of self-reflection and learning that centres the patient's expertise in their own experience.",
    outcomes: ["Distinguish cultural competence from cultural humility", "Apply a cultural humility framework to clinical interactions", "Respond to cultural practices without dismissal or over-accommodation"],
  },
  {
    title: "Using Amai-Mtoto at the point of care",
    duration: "15 min",
    color: "#1B4332",
    icon: "✦",
    level: "Practical",
    summary: "How to use Amai-Mtoto signposting cards, the cultural guides, and the GD meal planner at every stage of the maternity pathway.",
    outcomes: ["Use signposting cards at the right appointment", "Navigate the cultural practice guides confidently", "Share the GD meal planner at diagnosis"],
  },
  {
    title: "Anti-racist practice in the birth room",
    duration: "25 min",
    color: "#8B2500",
    icon: "❋",
    level: "Advanced",
    summary: "Practical, evidence-based guidance on recognising and interrupting racial bias in real-time clinical decision-making — including triage, pain management and informed consent.",
    outcomes: ["Identify implicit bias in clinical decision-making", "Apply SBAR and escalation tools equitably", "Respond when a colleague acts in a discriminatory way"],
  },
];

const GD_FOODS = {
  westAfrican: {
    swaps: [
      { original: "White rice", swap: "Brown rice or cauliflower rice", gi: "Low GI", note: "Reduce portion to fist-sized" },
      { original: "Eba / garri", swap: "Smaller portion of eba with extra vegetable soup", gi: "Moderate", note: "Add more egusi or spinach to balance" },
      { original: "Fufu (pounded yam)", swap: "Unripe plantain fufu", gi: "Lower GI", note: "Unripe plantain has significantly lower GI than ripe" },
      { original: "Ripe plantain (fried)", swap: "Unripe boiled plantain or small portion", gi: "Lower GI", note: "Ripe plantain is high sugar — unripe is much better" },
      { original: "Fizzy drinks / malta", swap: "Water with lime, zobo without sugar", gi: "Zero GI", note: "Unsweetened zobo (hibiscus) is excellent" },
    ],
    enjoy: ["Egusi soup (without excess palm oil)", "Okra soup", "Edikaikong", "Bitter leaf soup", "Grilled fish", "Beans and lentils", "Garden eggs", "Spinach and leafy greens", "Unripe plantain", "Boiled chicken"],
    limit: ["White rice in large portions", "Ripe fried plantain", "Puff puff", "Sugary drinks", "Chin chin", "Large portions of fufu or eba"],
    meals: {
      breakfast: "2 boiled eggs + sliced garden egg + small piece of unripe boiled plantain",
      lunch: "Egusi soup with a fist-sized portion of brown rice or small eba + grilled fish",
      dinner: "Pepper soup (goat or fish) with vegetables + small portion of beans",
    },
  },
  caribbean: {
    swaps: [
      { original: "White rice and peas", swap: "Brown rice with kidney beans", gi: "Lower GI", note: "Beans add protein and lower the overall GI" },
      { original: "White bread / hard dough bread", swap: "Seeded wholegrain bread", gi: "Lower GI", note: "Hard dough bread is very high GI — swap where possible" },
      { original: "Ripe banana", swap: "Half a green banana or small portion", gi: "Lower GI", note: "Green bananas are significantly lower GI" },
      { original: "Sweet potato (large)", swap: "Small portion sweet potato + leafy greens", gi: "Moderate", note: "Portion size is key — paired with protein it is fine" },
      { original: "Sugary rum cake / sweet bread", swap: "Small portion with protein alongside", gi: "Moderate", note: "Avoid on an empty stomach" },
    ],
    enjoy: ["Callaloo", "Ackee (without too much saltfish salt)", "Steamed fish", "Grilled jerk chicken", "Lentil soup", "Green banana", "Okra", "Breadfruit (small portion)", "Cucumber and tomato salad", "Avocado"],
    limit: ["Large portions of white rice", "Ripe fried plantain", "Sweet potato pudding", "Sugary juices", "Rum cake", "White hard dough bread in large amounts"],
    meals: {
      breakfast: "Ackee with scrambled egg + half slice wholegrain toast + cucumber slices",
      lunch: "Grilled jerk chicken + steamed callaloo + small portion brown rice and peas",
      dinner: "Fish stew with green banana + large salad with avocado",
    },
  },
};

// ── Component ─────────────────────────────────────────────────────────

export default function NHSStaff() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("signposting");
  const [nhsEmail, setNhsEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [copiedCard, setCopiedCard] = useState(null);
  const [openGuide, setOpenGuide] = useState(null);
  const [openCPD, setOpenCPD] = useState(null);
  const [gdHeritage, setGdHeritage] = useState("westAfrican");
  const [gdTab, setGdTab] = useState("swaps");

  const AKOKO = "/akoko-nan-medium.png";

  const handleVerify = () => {
    if (!nhsEmail.includes("@") || nhsEmail.length < 5) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setVerified(true);
  };

  const handleCopyCard = (card) => {
    setCopiedCard(card.topic);
    setTimeout(() => setCopiedCard(null), 2000);
  };

  const s = {
    page: { background: "#FDF6F0", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" },
    hero: { background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #C4622D 100%)", padding: "56px 80px", position: "relative", overflow: "hidden" },
    heroSymbol: { position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "240px", height: "240px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" },
    badge: { display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "24px", padding: "6px 16px", color: "#B7E4C7", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "20px" },
    badgeDot: { width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", display: "inline-block", flexShrink: 0 },
    heroTitle: { fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "14px" },
    heroSub: { fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: "1.75", maxWidth: "520px", fontWeight: "400" },
    body: { padding: "48px 80px" },
    card: { background: "white", borderRadius: "16px", border: "1px solid #EDD8C8", padding: "28px", marginBottom: "16px" },
    secLbl: { fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "8px" },
    secTitle: { fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: "700", color: "#1a0800", marginBottom: "24px" },
    tab: (active) => ({ background: active ? "#1B4332" : "white", color: active ? "white" : "#6b4030", border: `1.5px solid ${active ? "#1B4332" : "#EDD8C8"}`, borderRadius: "24px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }),
  };

  // ── Login gate ──
  if (!verified) {
    return (
      <Layout>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <div style={s.page}>
          <div className="nhs-hero" style={s.hero}>
            <div style={s.heroSymbol}></div>
            <div style={s.badge}><span style={s.badgeDot}></span>NHS STAFF PORTAL</div>
            <h1 style={s.heroTitle}>For NHS midwives, <em style={{ fontStyle: "italic", color: "#B7E4C7" }}>health visitors</em> & GPs</h1>
            <p style={s.heroSub}>Fast, simple cultural signposting tools — designed to fit into your 15-minute appointment.</p>
          </div>
          <div className="nhs-body" style={{ ...s.body, maxWidth: "560px", margin: "0 auto" }}>
            <div className="nhs-login-card" style={{ ...s.card, padding: "40px" }}>
              <div style={s.secLbl}>Access the portal</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1a0800", marginBottom: "8px" }}>Verify your NHS email</h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "24px", lineHeight: "1.7" }}>Enter your email address to access the NHS staff portal and resources.</p>
              <input type="email" placeholder="your@email.com" value={nhsEmail} onChange={e => { setNhsEmail(e.target.value); setEmailError(""); }}
                style={{ width: "100%", border: `1.5px solid ${emailError ? "#C4622D" : "#EDD8C8"}`, borderRadius: "10px", padding: "14px 16px", fontSize: "14px", fontFamily: "'DM Sans', sans-serif", outline: "none", background: "#FDF6F0", marginBottom: "8px" }} />
              {emailError && <p style={{ fontSize: "12px", color: "#C4622D", marginBottom: "12px", fontWeight: "600" }}>{emailError}</p>}
              <button onClick={handleVerify} style={{ width: "100%", background: "#1B4332", color: "white", border: "none", borderRadius: "10px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginBottom: "16px" }}>
                Access NHS Staff Portal →
              </button>
              <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center" }}>No patient data is stored.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "8px" }}>
              {[{ n: "Fast", d: "15-min appointment friendly" }, { n: "Safe", d: "No patient data stored" }, { n: "Trusted", d: "Midwife reviewed content" }].map((item, i) => (
                <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #EDD8C8", padding: "16px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#1B4332", fontWeight: "700", marginBottom: "4px" }}>{item.n}</div>
                  <div style={{ fontSize: "11px", color: "#888" }}>{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // ── Main portal ──
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={s.page}>

        {/* Hero */}
        <div className="nhs-hero" style={s.hero}>
          <div style={s.heroSymbol}></div>
          <div style={s.badge}><span style={s.badgeDot}></span>NHS STAFF PORTAL</div>
          <h1 style={s.heroTitle}>Welcome back — <em style={{ fontStyle: "italic", color: "#B7E4C7" }}>signpost in seconds</em></h1>
          <p style={s.heroSub}>Choose a tool below. Every card, guide and module is designed to fit into your appointment without extra admin.</p>
        </div>

        {/* Tab nav */}
        <div className="nhs-tabs" style={{ background: "#FFF8F3", borderBottom: "1px solid #EDD8C8", padding: "16px 80px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { id: "signposting", label: "📋 Signposting cards" },
            { id: "cultural", label: "🌍 Cultural guides" },
            { id: "cpd", label: "📚 CPD modules" },
            { id: "gd", label: "🥗 GD meal planner" },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={s.tab(activeTab === tab.id)}>{tab.label}</button>
          ))}
        </div>

        <div className="nhs-body" style={{ ...s.body, maxWidth: "1100px", margin: "0 auto" }}>

          {/* ── Signposting cards ── */}
          {activeTab === "signposting" && (
            <>
              <div style={s.secLbl}>Quick send</div>
              <h2 style={s.secTitle}>Signposting <em style={{ fontStyle: "italic", color: "#C4622D" }}>cards</em></h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "32px", lineHeight: "1.7", maxWidth: "640px" }}>One tap to copy a message and link to send to your patient. Each card is matched to the right appointment stage.</p>
              <div className="nhs-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
                {SIGNPOSTING_CARDS.map((card, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderTop: `3px solid ${card.color}`, padding: "22px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", right: "-10px", bottom: "-10px", width: "60px", height: "60px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.05, pointerEvents: "none" }}></div>
                    <div style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "1.5px", color: card.color, textTransform: "uppercase", marginBottom: "6px" }}>{card.appointment}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: "700", color: "#1a0800", marginBottom: "8px" }}>{card.topic}</div>
                    <div style={{ fontSize: "12px", color: "#6b4030", lineHeight: "1.6", marginBottom: "16px" }}>{card.desc}</div>
                    <div style={{ background: "#FDF6F0", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", color: "#4a2010", lineHeight: "1.6", marginBottom: "14px", fontStyle: "italic" }}>
                      "{card.message}"
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={() => handleCopyCard(card)} style={{ flex: 1, background: copiedCard === card.topic ? "#2D6A4F" : card.color, color: "white", border: "none", borderRadius: "8px", padding: "9px", fontSize: "12px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                        {copiedCard === card.topic ? "✓ Copied!" : "Copy message"}
                      </button>
                      <a href={card.link} style={{ flex: 1, background: "transparent", color: card.color, border: `1.5px solid ${card.color}`, borderRadius: "8px", padding: "9px", fontSize: "12px", fontWeight: "700", cursor: "pointer", textDecoration: "none", textAlign: "center", fontFamily: "'DM Sans', sans-serif" }}>
                        View page
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Cultural guides ── */}
          {activeTab === "cultural" && (
            <>
              <div style={s.secLbl}>Quick reference</div>
              <h2 style={s.secTitle}>Cultural practice <em style={{ fontStyle: "italic", color: "#C4622D" }}>guides</em></h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "32px", lineHeight: "1.7", maxWidth: "640px" }}>Written by community members — not consultants. Use these to inform your approach, not to make assumptions.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {CULTURAL_GUIDES.map((guide, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderLeft: `4px solid ${guide.color}`, overflow: "hidden" }}>
                    <div onClick={() => setOpenGuide(openGuide === i ? null : i)} style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <span style={{ fontSize: "24px" }}>{guide.flag}</span>
                        <div>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: "700", color: "#1a0800" }}>{guide.community} communities</div>
                          <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>{guide.practices.length} cultural practice guides</div>
                        </div>
                      </div>
                      <span style={{ fontSize: "20px", color: guide.color, fontWeight: "700", transform: openGuide === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </div>
                    {openGuide === i && (
                      <div className="nhs-guide-grid" style={{ padding: "0 24px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                        {guide.practices.map((p, j) => (
                          <div key={j} style={{ background: "#FDF6F0", borderRadius: "10px", padding: "16px", borderTop: `2px solid ${guide.color}` }}>
                            <div style={{ fontSize: "13px", fontWeight: "700", color: "#1a0800", marginBottom: "6px" }}>{p.title}</div>
                            <div style={{ fontSize: "12px", color: "#6b4030", lineHeight: "1.65" }}>{p.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="nhs-banner" style={{ background: "linear-gradient(135deg,#1B4332,#2D6A4F)", borderRadius: "16px", padding: "28px 32px", marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "white", marginBottom: "6px", fontWeight: "700" }}>Important reminder</div>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)", lineHeight: "1.7", maxWidth: "560px" }}>These guides are starting points — not stereotypes. Always ask your patient what matters to her. Cultural practices vary enormously within communities.</p>
                </div>
              </div>
            </>
          )}

          {/* ── CPD Modules ── */}
          {activeTab === "cpd" && (
            <>
              <div style={s.secLbl}>Continuing professional development</div>
              <h2 style={s.secTitle}>CPD <em style={{ fontStyle: "italic", color: "#C4622D" }}>modules</em></h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "32px", lineHeight: "1.7", maxWidth: "640px" }}>Each module takes 15–25 minutes and can be submitted as CPD evidence. All are accreditable and reviewed by NHS midwives.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {CPD_MODULES.map((mod, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderLeft: `4px solid ${mod.color}`, overflow: "hidden" }}>
                    <div onClick={() => setOpenCPD(openCPD === i ? null : i)} style={{ padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span style={{ fontSize: "24px", color: mod.color }}>{mod.icon}</span>
                        <div>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                            <span style={{ fontSize: "10px", background: mod.color + "20", color: mod.color, borderRadius: "20px", padding: "2px 10px", fontWeight: "700" }}>{mod.level}</span>
                            <span style={{ fontSize: "10px", color: "#888", fontWeight: "600" }}>{mod.duration}</span>
                          </div>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: "700", color: "#1a0800" }}>{mod.title}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: "20px", color: mod.color, fontWeight: "700", flexShrink: 0, transform: openCPD === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </div>
                    {openCPD === i && (
                      <div style={{ padding: "0 28px 24px" }}>
                        <p style={{ fontSize: "14px", color: "#4a2010", lineHeight: "1.75", marginBottom: "20px" }}>{mod.summary}</p>
                        <div style={{ marginBottom: "20px" }}>
                          <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "10px" }}>Learning outcomes</div>
                          {mod.outcomes.map((o, j) => (
                            <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                              <span style={{ width: "6px", height: "6px", background: mod.color, borderRadius: "50%", flexShrink: 0, marginTop: "6px" }}></span>
                              <span style={{ fontSize: "13px", color: "#4a2010", lineHeight: "1.6" }}>{o}</span>
                            </div>
                          ))}
                        </div>
                        <button style={{ background: mod.color, color: "white", border: "none", borderRadius: "10px", padding: "12px 28px", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                          Start module → {mod.duration}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── GD Meal Planner ── */}
          {activeTab === "gd" && (
            <>
              <div style={s.secLbl}>Gestational diabetes</div>
              <h2 style={s.secTitle}>Cultural <em style={{ fontStyle: "italic", color: "#C4622D" }}>GD meal planner</em></h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "24px", lineHeight: "1.7", maxWidth: "640px" }}>Culturally relevant meal planning for gestational diabetes. Share this with your patient at diagnosis — it uses the foods she actually eats.</p>

              {/* Heritage selector */}
              <div className="nhs-gd-btns" style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
                {[{ id: "westAfrican", label: "🇳🇬 West African" }, { id: "caribbean", label: "🇯🇲 Caribbean" }].map(h => (
                  <button key={h.id} onClick={() => setGdHeritage(h.id)} style={{ background: gdHeritage === h.id ? "#1B4332" : "white", color: gdHeritage === h.id ? "white" : "#6b4030", border: `1.5px solid ${gdHeritage === h.id ? "#1B4332" : "#EDD8C8"}`, borderRadius: "24px", padding: "10px 20px", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                    {h.label}
                  </button>
                ))}
              </div>

              {/* GD content tabs */}
              <div className="nhs-gd-btns" style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
                {[{ id: "swaps", label: "Low GI swaps" }, { id: "enjoy", label: "Enjoy freely" }, { id: "limit", label: "Limit or avoid" }, { id: "meals", label: "Sample meals" }].map(t => (
                  <button key={t.id} onClick={() => setGdTab(t.id)} style={{ background: gdTab === t.id ? "#C4622D" : "white", color: gdTab === t.id ? "white" : "#6b4030", border: `1.5px solid ${gdTab === t.id ? "#C4622D" : "#EDD8C8"}`, borderRadius: "20px", padding: "8px 18px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Swaps */}
              {gdTab === "swaps" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {GD_FOODS[gdHeritage].swaps.map((swap, i) => (
                    <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #EDD8C8", padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700", color: "#C4622D", textDecoration: "line-through" }}>{swap.original}</span>
                          <span style={{ fontSize: "14px", color: "#aaa" }}>→</span>
                          <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B4332" }}>{swap.swap}</span>
                          <span style={{ fontSize: "10px", background: "#E8F5EE", color: "#1B4332", borderRadius: "20px", padding: "2px 10px", fontWeight: "700" }}>{swap.gi}</span>
                        </div>
                        <p style={{ fontSize: "12px", color: "#6b4030", lineHeight: "1.6" }}>{swap.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Enjoy */}
              {gdTab === "enjoy" && (
                <div style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderTop: "3px solid #2D6A4F", padding: "24px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#2D6A4F", textTransform: "uppercase", marginBottom: "16px" }}>Eat freely — these are excellent choices</div>
                  <div className="nhs-food-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
                    {GD_FOODS[gdHeritage].enjoy.map((food, i) => (
                      <div key={i} style={{ background: "#E8F5EE", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", fontWeight: "600", color: "#1B4332", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "6px", height: "6px", background: "#2D6A4F", borderRadius: "50%", flexShrink: 0 }}></span>
                        {food}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Limit */}
              {gdTab === "limit" && (
                <div style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderTop: "3px solid #C4622D", padding: "24px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#C4622D", textTransform: "uppercase", marginBottom: "16px" }}>Limit or avoid — or eat with protein to reduce impact</div>
                  <div className="nhs-food-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
                    {GD_FOODS[gdHeritage].limit.map((food, i) => (
                      <div key={i} style={{ background: "#FEF3E8", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", fontWeight: "600", color: "#8B2500", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "6px", height: "6px", background: "#C4622D", borderRadius: "50%", flexShrink: 0 }}></span>
                        {food}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: "#aaa", marginTop: "16px" }}>* Always advise patients to check blood glucose after eating — individual responses vary.</p>
                </div>
              )}

              {/* Sample meals */}
              {gdTab === "meals" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[{ label: "Breakfast", meal: GD_FOODS[gdHeritage].meals.breakfast, color: "#C4622D", icon: "🌅" },
                    { label: "Lunch", meal: GD_FOODS[gdHeritage].meals.lunch, color: "#2D6A4F", icon: "☀️" },
                    { label: "Dinner", meal: GD_FOODS[gdHeritage].meals.dinner, color: "#1B4332", icon: "🌙" }].map((m, i) => (
                    <div key={i} className="nhs-meal-card" style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", borderLeft: `4px solid ${m.color}`, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <span style={{ fontSize: "28px", flexShrink: 0 }}>{m.icon}</span>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", color: m.color, textTransform: "uppercase", marginBottom: "6px" }}>{m.label}</div>
                        <div style={{ fontSize: "14px", color: "#1a0800", fontWeight: "500", lineHeight: "1.65" }}>{m.meal}</div>
                      </div>
                    </div>
                  ))}
                  <div style={{ background: "linear-gradient(135deg,#1B4332,#2D6A4F)", borderRadius: "14px", padding: "20px 24px" }}>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: "1.7" }}>
                      <strong style={{ color: "#B7E4C7" }}>Clinical note:</strong> These are sample meals to illustrate culturally appropriate low-GI eating. Always refer to an NHS dietitian for individual meal planning. Advise patients to monitor blood glucose 1–2 hours after meals.
                    </p>
                  </div>
                </div>
              )}

              {/* Share button */}
              <div className="nhs-share-card" style={{ marginTop: "28px", background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", padding: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: "700", color: "#1a0800", marginBottom: "4px" }}>Share with your patient</div>
                  <p style={{ fontSize: "13px", color: "#6b4030" }}>Send her directly to the GD meal planner page — available to mothers too.</p>
                </div>
                <div className="nhs-share-btns" style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => {}} style={{ background: "#C4622D", color: "white", border: "none", borderRadius: "10px", padding: "12px 24px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Copy patient link</button>
                  <a href="/gd-meal-planner" style={{ background: "transparent", color: "#C4622D", border: "1.5px solid #C4622D", borderRadius: "10px", padding: "12px 24px", fontSize: "13px", fontWeight: "700", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>View patient page</a>
                </div>
              </div>
            </>
          )}

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          /* Hero */
          .nhs-hero { padding: 36px 20px !important; }
          .nhs-hero h1 { font-size: 26px !important; }
          .nhs-hero p { font-size: 13px !important; }

          /* Body */
          .nhs-body { padding: 24px 16px !important; }

          /* Tabs */
          .nhs-tabs { padding: 12px 16px !important; overflow-x: auto !important; flex-wrap: nowrap !important; }

          /* Signposting cards — single column */
          .nhs-cards-grid { grid-template-columns: 1fr !important; }

          /* Cultural guide grid — single column */
          .nhs-guide-grid { grid-template-columns: 1fr !important; }

          /* CPD modules */
          .nhs-cpd-header { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }

          /* GD food grid — single column */
          .nhs-food-grid { grid-template-columns: 1fr !important; }

          /* GD heritage + tab selectors */
          .nhs-gd-btns { flex-wrap: wrap !important; gap: 8px !important; }

          /* Share card */
          .nhs-share-card { flex-direction: column !important; align-items: flex-start !important; }
          .nhs-share-btns { flex-direction: column !important; width: 100% !important; }
          .nhs-share-btns a, .nhs-share-btns button { width: 100% !important; text-align: center !important; }

          /* Emergency / info banners */
          .nhs-banner { flex-direction: column !important; padding: 20px 16px !important; }

          /* Login card */
          .nhs-login-card { padding: 24px 20px !important; }

          /* Meal cards */
          .nhs-meal-card { flex-direction: column !important; }

          /* Swap cards */
          .nhs-swap-label { flex-wrap: wrap !important; }
        }
      `}</style>
    </Layout>
  );
}
