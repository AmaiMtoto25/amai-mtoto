/* eslint-disable */
import React, { useState } from "react";
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

const trimesterConfig = {
  "1": { from: "#3D1200", to: "#C4622D", label: "First Trimester", weeks: "Weeks 1–12" },
  "2": { from: "#1B4332", to: "#2D6A4F", label: "Second Trimester", weeks: "Weeks 13–26" },
  "3": { from: "#1a0800", to: "#5C1200", label: "Third Trimester", weeks: "Weeks 27–40" },
};

const topicIcons = { summary: "◉", exercise: "❋", nutrition: "✦", wellbeing: "◈" };

const keyTips = {
  summary: ["Book your midwife appointment early", "Take folic acid daily", "Rest when you need to", "Stay hydrated", "Avoid alcohol & smoking"],
  exercise: ["Aim for 150 mins activity per week", "Always warm up and cool down", "Stop if you feel pain or dizzy", "Talk whilst exercising — if you can't, slow down", "Get midwife sign-off if high-risk"],
  nutrition: ["Eat little and often if nauseous", "Include iron-rich foods daily", "Take folic acid & vitamin D", "Stay well hydrated", "Avoid raw fish, soft cheeses & liver"],
  wellbeing: ["Take time for yourself every day", "Talk to someone you trust", "Try breathing or meditation", "Write in a journal", "Reach out to your midwife if struggling"],
};

const sectionIntros = {
  summary: "Your body goes through incredible changes each trimester. Here's everything you need to know — from symptoms to self-care.",
  exercise: "Staying active during pregnancy is one of the best things you can do for you and your baby. Here's how to do it safely.",
  nutrition: "Eating well during pregnancy doesn't mean eating for two — it means eating smart. Here's your guide to nourishing yourself and your baby.",
  wellbeing: "Your mental and emotional health matters just as much as your physical health. Here's how to look after yourself.",
};

const Topic = ({ trimesterArticlesDb, topicId, resolvedUrl }) => {
  const [postcode, setPostcode] = useState("");
  const [postcodeSubmitted, setPostcodeSubmitted] = useState(false);

  const topicContent = topicSummaryArr.find((topic) => topic.id === resolvedUrl);
  if (!topicContent) return null;

  const localTopicArticles = topicContent.resources;
  const topicArticles = getArticleByTopic(
    [...localTopicArticles, ...trimesterArticlesDb],
    topicId
  );

  const trimesterNum = resolvedUrl.match(/trimester-(\d)/)?.[1] || "1";
  const config = trimesterConfig[trimesterNum];
  const icon = topicIcons[topicId] || "◉";
  const tips = keyTips[topicId] || keyTips.summary;
  const intro = sectionIntros[topicId] || "";
  const otherTopics = ["summary", "exercise", "nutrition", "wellbeing"].filter(t => t !== topicId);

  const AKOKO = "/akoko-nan-medium.png";

  const s = {
    page: { background: "#FDF6F0", fontFamily: "'DM Sans', sans-serif" },
    hero: {
      background: `linear-gradient(135deg, ${config.from} 0%, ${config.to} 100%)`,
      padding: "56px 80px", position: "relative", overflow: "hidden",
    },
    heroSymbol: {
      position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
      width: "260px", height: "260px",
      backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain",
      backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none",
    },
    badge: {
      display: "inline-flex", alignItems: "center", gap: "8px",
      background: "rgba(45,106,79,0.35)", border: "1px solid rgba(82,183,136,0.45)",
      borderRadius: "24px", padding: "6px 16px", color: "#74C69D",
      fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px",
      marginBottom: "20px", fontFamily: "'DM Sans', sans-serif",
    },
    badgeDot: { width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", display: "inline-block", flexShrink: 0 },
    heroTitle: {
      fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,54px)",
      fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "14px",
    },
    heroSub: { fontSize: "15px", color: "rgba(255,255,255,0.88)", lineHeight: "1.7", maxWidth: "500px", fontWeight: "400", marginBottom: "24px" },
    pill: { background: "rgba(255,255,255,0.25)", color: "white", borderRadius: "20px", padding: "6px 16px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" },
    pillOther: { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.82)", borderRadius: "20px", padding: "6px 16px", fontSize: "12px", fontWeight: "500", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" },
    body: { padding: "48px 80px", background: "#FDF6F0" },
    sectionLabel: { fontSize: "11px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#52B788", marginBottom: "8px" },
    divider: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" },
    dividerLine: { flex: 1, height: "1px", background: "#EDD8C8" },
    sectionTitle: { fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1a0800", marginBottom: "12px" },
    card: { background: "white", borderRadius: "16px", border: "1px solid #EDD8C8", padding: "28px", position: "relative", overflow: "hidden" },
    greenCard: { background: "linear-gradient(135deg, #1B4332, #2D6A4F)", borderRadius: "16px", padding: "28px", position: "relative", overflow: "hidden" },
    articleRow: { background: "white", borderRadius: "10px", border: "1px solid #EDD8C8", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "10px", textDecoration: "none" },
    arrow: { fontSize: "18px", color: "#C4622D", fontWeight: "700", flexShrink: 0 },
    greenArrow: { fontSize: "18px", color: "#2D6A4F", fontWeight: "700", flexShrink: 0 },
  };

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={s.page}>

        {/* ── Hero ── */}
        <div style={s.hero}>
          <div style={s.heroSymbol}></div>
          <div style={s.badge}>
            <span style={s.badgeDot}></span>
            {config.label.toUpperCase()} · {config.weeks.toUpperCase()}
          </div>
          <h1 style={s.heroTitle}>{topicContent.title}</h1>
          <p style={s.heroSub}>{intro}</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <span style={s.pill}>{icon} {topicId.charAt(0).toUpperCase() + topicId.slice(1)}</span>
            {otherTopics.map(t => (
              <a key={t} href={`/trimester-${trimesterNum}/${t}`} style={s.pillOther}>
                {topicIcons[t]} {t.charAt(0).toUpperCase() + t.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        <div style={s.body}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

            {/* Overview + Key Tips */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "20px", marginBottom: "40px" }}>
              <div style={s.card}>
                <div style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "130px", height: "130px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.05, transform: "rotate(90deg)", pointerEvents: "none" }}></div>
                <div style={s.sectionLabel}>Overview</div>
                <h2 style={s.sectionTitle}>{topicContent.title}</h2>
                <div style={{ fontSize: "14px", color: "#3a1808", lineHeight: "1.8", fontWeight: "400" }}>
                  {topicContent.content}
                </div>
              </div>
              <div style={s.greenCard}>
                <div style={{ position: "absolute", right: "-16px", top: "-16px", width: "100px", height: "100px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
                <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#74C69D", textTransform: "uppercase", marginBottom: "16px" }}>Key tips</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {tips.map((tip, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ width: "7px", height: "7px", background: "#52B788", borderRadius: "50%", flexShrink: 0, marginTop: "6px", display: "inline-block" }}></span>
                      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.95)", fontWeight: "500", lineHeight: "1.5" }}>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Videos */}
            <div style={{ marginBottom: "40px" }}>
              <div style={s.divider}>
                <div style={s.sectionLabel}>Videos</div>
                <div style={s.dividerLine}></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
                {topicContent.content?.props?.children && React.Children.toArray(topicContent.content.props.children)
                  .filter(child => child?.props?.src?.includes("youtube"))
                  .slice(0, 3)
                  .map((video, i) => (
                    <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #EDD8C8", overflow: "hidden" }}>
                      <div style={{ position: "relative", paddingBottom: "56.25%", background: i === 0 ? config.from : i === 1 ? "#1B4332" : "#5C1200" }}>
                        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${AKOKO}')`, backgroundSize: "80px", backgroundRepeat: "no-repeat", backgroundPosition: "center", opacity: 0.07 }}></div>
                        <iframe
                          src={video.props.src}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div style={{ padding: "12px 14px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#1a0800" }}>
                          {["Abdominal exercises", "Yoga & movement", "Breathing techniques"][i]}
                        </div>
                      </div>
                    </div>
                  ))}
                {/* If no videos in content, show placeholder */}
                {(!topicContent.content?.props?.children || !React.Children.toArray(topicContent.content.props.children).some(c => c?.props?.src?.includes("youtube"))) && (
                  <div style={{ gridColumn: "1/-1", background: "white", borderRadius: "12px", border: "1px solid #EDD8C8", padding: "32px", textAlign: "center" }}>
                    <div style={{ fontSize: "14px", color: "#888", fontWeight: "500" }}>Video content coming soon for this section.</div>
                  </div>
                )}
              </div>
            </div>

            {/* Articles + Recipes */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>

              {/* Articles */}
              <div>
                <div style={s.divider}>
                  <div style={s.sectionLabel}>Articles & Resources</div>
                  <div style={s.dividerLine}></div>
                </div>
                {topicArticles.length > 0 ? topicArticles.map((article, i) => (
                  <a key={i} href={article.src} target="_blank" rel="noreferrer" style={s.articleRow}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "600", color: "#1a0800", marginBottom: "3px" }}>{article.title}</div>
                      <div style={{ fontSize: "11px", color: "#888", fontWeight: "500" }}>{article.author}</div>
                    </div>
                    <span style={s.arrow}>→</span>
                  </a>
                )) : (
                  <div style={{ ...s.card, padding: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "13px", color: "#888" }}>Resources coming soon.</div>
                  </div>
                )}
              </div>

              {/* Recipes */}
              <div>
                <div style={s.divider}>
                  <div style={s.sectionLabel}>Recipe ideas</div>
                  <div style={s.dividerLine}></div>
                </div>
                {[
                  { title: "Jollof rice with spinach", tag: "Iron-rich", tagBg: "#E8F5EE", tagColor: "#1B4332", img: "https://images.unsplash.com/photo-1694671688249-a63c29a3b364?w=80&h=80&fit=crop", bg: "#8B2500", href: "https://www.bbc.co.uk/food/recipes/jollof_rice_16203" },
                  { title: "Plantain & bean stew", tag: "High protein", tagBg: "#E8F5EE", tagColor: "#1B4332", img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=80&h=80&fit=crop", bg: "#1B4332", href: "https://www.bbc.co.uk/food/recipes" },
                  { title: "Ginger & lemon tea", tag: "Nausea relief", tagBg: "#FEF3E8", tagColor: "#854F0B", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=80&h=80&fit=crop", bg: "#5C1200", href: "https://www.bbcgoodfood.com/recipes/ginger-tea" },
                  { title: "African Eatwell plate", tag: "Balanced diet", tagBg: "#E8F5EE", tagColor: "#1B4332", img: "https://www.fountainmedical.co.uk/wp-content/uploads/sites/290/2021/10/AfricanCaribbeanEatwell-e1635149697112-1024x716.png", bg: "#3D1200", href: "https://www.fountainmedical.co.uk" },
                ].map((r, i) => (
                  <a key={i} href={r.href} target="_blank" rel="noreferrer" style={{ ...s.articleRow, padding: 0, overflow: "hidden", alignItems: "stretch", display: "flex", marginBottom: "10px", textDecoration: "none" }}>
                    <div style={{ width: "72px", flexShrink: 0, background: r.bg, position: "relative", overflow: "hidden", minHeight: "64px" }}>
                      <img src={r.img} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={e => e.target.style.display = "none"} />
                    </div>
                    <div style={{ padding: "12px 14px", flex: 1 }}>
                      <div style={{ fontSize: "13px", fontWeight: "600", color: "#1a0800", marginBottom: "5px" }}>{r.title}</div>
                      <span style={{ fontSize: "10px", background: r.tagBg, color: r.tagColor, borderRadius: "20px", padding: "2px 8px", fontWeight: "700" }}>{r.tag}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", paddingRight: "14px" }}>
                      <span style={s.greenArrow}>→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Local Services */}
            <div style={{ marginBottom: "40px" }}>
              <div style={s.divider}>
                <div style={s.sectionLabel}>Local Services</div>
                <div style={s.dividerLine}></div>
              </div>
              <div style={{ ...s.card, padding: "32px" }}>
                <div style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "140px", height: "140px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.05, transform: "rotate(-15deg)", pointerEvents: "none" }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#1a0800", marginBottom: "8px" }}>Find services near you</h3>
                    <p style={{ fontSize: "14px", color: "#6b4030", fontWeight: "400", lineHeight: "1.6" }}>Midwives, antenatal classes, mental health support and community groups in your area.</p>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <input
                      type="text"
                      placeholder="Enter postcode..."
                      value={postcode}
                      onChange={e => setPostcode(e.target.value)}
                      style={{ border: "1.5px solid #EDD8C8", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#1a0800", width: "180px", outline: "none", background: "#FDF6F0", fontFamily: "'DM Sans', sans-serif", fontWeight: "500" }}
                    />
                    <button
                      onClick={() => postcode && setPostcodeSubmitted(true)}
                      style={{ background: "#C4622D", color: "white", border: "none", borderRadius: "10px", padding: "12px 20px", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                {postcodeSubmitted && (
                  <div style={{ marginTop: "24px", padding: "20px", background: "#FDF6F0", borderRadius: "10px", border: "1px solid #EDD8C8" }}>
                    <p style={{ fontSize: "14px", color: "#3a1808", fontWeight: "500", marginBottom: "12px" }}>Services near <strong>{postcode.toUpperCase()}</strong>:</p>
                    {[
                      { name: "NHS Antenatal Services", type: "Midwifery" },
                      { name: "Black Mums Upfront", type: "Community support" },
                      { name: "Perinatal Mental Health Team", type: "Mental health" },
                    ].map((svc, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 2 ? "1px solid #EDD8C8" : "none" }}>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: "600", color: "#1a0800" }}>{svc.name}</div>
                          <div style={{ fontSize: "11px", color: "#888", fontWeight: "500" }}>{svc.type}</div>
                        </div>
                        <span style={{ fontSize: "13px", color: "#2D6A4F", fontWeight: "700" }}>→</span>
                      </div>
                    ))}
                    <p style={{ fontSize: "11px", color: "#aaa", marginTop: "12px" }}>* Postcode search integration coming soon. Showing sample services.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Community Q&A */}
            <div>
              <div style={s.divider}>
                <div style={s.sectionLabel}>Community Q&A</div>
                <div style={s.dividerLine}></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                {[
                  { q: "Is it safe to exercise in the first trimester?", a: "Yes — gentle exercise like walking and swimming is encouraged throughout pregnancy as long as you feel well." },
                  { q: "When should I book my midwife appointment?", a: "Book as soon as possible, ideally before 10 weeks. Contact your GP or self-refer to your local maternity unit." },
                  { q: "What cultural foods are safe during pregnancy?", a: "Many traditional African and Caribbean foods are excellent — jollof rice, plantain, egusi soup and more. Avoid soft cheeses and raw fish." },
                  { q: "How do I manage morning sickness?", a: "Eat little and often, try ginger tea, keep crackers nearby for the morning and stay hydrated throughout the day." },
                ].map((qa, i) => (
                  <div key={i} style={{ ...s.card, padding: "20px" }}>
                    <div style={{ position: "absolute", right: "-10px", bottom: "-10px", width: "70px", height: "70px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.06, transform: i % 2 === 0 ? "none" : "rotate(90deg)", pointerEvents: "none" }}></div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#C4622D", marginBottom: "10px" }}>Q: {qa.q}</div>
                    <div style={{ fontSize: "13px", color: "#3a1808", lineHeight: "1.7", fontWeight: "400" }}>{qa.a}</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                <a href="https://amai-mtoto.forumotion.com/" target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#1B4332", color: "white", borderRadius: "32px", padding: "14px 32px", fontSize: "14px", fontWeight: "700", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                  Join the forum for more →
                </a>
              </div>
            </div>

            {/* Bottom trimester nav */}
            <div style={{ marginTop: "56px", background: `linear-gradient(135deg, ${config.from}, ${config.to})`, borderRadius: "20px", padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "160px", height: "160px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" }}></div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "white", marginBottom: "6px", fontWeight: "700" }}>Explore more</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: "400" }}>Continue your pregnancy journey</p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {otherTopics.map(t => (
                  <a key={t} href={`/trimester-${trimesterNum}/${t}`} style={{ background: "rgba(255,255,255,0.15)", color: "white", borderRadius: "24px", padding: "10px 20px", fontSize: "14px", fontWeight: "600", fontFamily: "'DM Sans', sans-serif", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none" }}>
                    {topicIcons[t]} {t.charAt(0).toUpperCase() + t.slice(1)}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .topic-grid-2 { grid-template-columns: 1fr !important; }
          .topic-grid-3 { grid-template-columns: 1fr !important; }
          .topic-hero { padding: 40px 24px !important; }
          .topic-body { padding: 32px 24px !important; }
        }
      `}</style>
    </Layout>
  );
};

export default Topic;
