/* eslint-disable */
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Head from "next/head";

export async function getServerSideProps() {
  return { props: {} };
}

export default function AboutUs() {
  const router = useRouter();
  const { user } = useAuth();

  const team = [
    { name: "Dr. Amara Osei", role: "Lead Midwife & Co-Founder", bio: "A consultant midwife with 18 years of NHS experience, Amara has dedicated her career to closing the racial gap in maternal outcomes.", initial: "AO", color: "#C4622D" },
    { name: "Yemi Adebayo", role: "Community Lead & Co-Founder", bio: "Yemi brings lived experience as a Black mother and a decade of community organising in South London to the heart of Amai Mtoto.", initial: "YA", color: "#2D6A4F" },
    { name: "Dr. Priya Nair", role: "Mental Health Advisor", bio: "A perinatal psychologist specialising in the unique mental health challenges faced by women of colour during pregnancy and postpartum.", initial: "PN", color: "#C4622D" },
    { name: "Fatima Al-Hassan", role: "Nutrition & Wellness Coach", bio: "Fatima weaves traditional African and Caribbean food wisdom with evidence-based nutrition guidance for expectant and new mothers.", initial: "FA", color: "#2D6A4F" },
  ];

  const stats = [
    { number: "2,400+", label: "Mothers supported" },
    { number: "4×", label: "Higher risk faced by Black women" },
    { number: "18", label: "NHS partner trusts" },
    { number: "100%", label: "Culturally-led care" },
  ];

  const values = [
    { icon: "✦", title: "Cultural Rootedness", desc: "We honour the wisdom, traditions and lived experiences of African and Caribbean communities — weaving them into every resource we create.", accent: "#2D6A4F" },
    { icon: "◈", title: "Midwifery-Led", desc: "Every piece of guidance on Amai Mtoto is developed with and reviewed by qualified NHS midwives and perinatal specialists.", accent: "#C4622D" },
    { icon: "❋", title: "Community Power", desc: "We are built by mothers, for mothers. The women who use this platform shape it, grow it, and lead it.", accent: "#2D6A4F" },
    { icon: "◉", title: "Radical Honesty", desc: "We name the systemic failures that cause harm and give women the information and agency to advocate for themselves.", accent: "#C4622D" },
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'DM Sans', sans-serif; }
          .page { min-height: 100vh; background: #FDF6F0; }

          /* Akoko Nan single symbol per section */
          .akoko-section { position: relative; overflow: hidden; }
          .akoko-symbol {
            position: absolute;
            background-image: url('/akoko-nan-medium.png');
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0.07;
            pointer-events: none;
            z-index: 0;
          }
          /* Mission — large symbol right side, upright */
          .akoko-mission {
            width: 320px; height: 320px;
            right: -40px; top: 50%;
            transform: translateY(-50%);
          }
          /* For Who — large symbol left side, rotated */
          .akoko-forwho {
            width: 280px; height: 280px;
            left: -30px; top: 50%;
            transform: translateY(-50%) rotate(90deg);
          }
          /* Values — large symbol centre-right, tilted */
          .akoko-values {
            width: 300px; height: 300px;
            right: 60px; bottom: -40px;
            transform: rotate(-15deg);
          }
          /* Team — large symbol centre-left, upright */
          .akoko-team {
            width: 260px; height: 260px;
            left: 40px; top: 50%;
            transform: translateY(-50%) rotate(180deg);
          }
          .akoko-section > * { position: relative; z-index: 1; }

          /* Top bar */
          .topBar { background: #5C1200; display: flex; align-items: center; justify-content: space-between; padding: 8px 40px; font-size: 13px; color: rgba(255,255,255,0.85); }
          .topBarWelcome strong { color: #F5A623; }
          .topBarLinks { display: flex; gap: 4px; }
          .topBarActive { background: #2D6A4F; color: white; border: none; border-radius: 20px; padding: 5px 16px; font-size: 12px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
          .topBarBtn { background: transparent; color: rgba(255,255,255,0.75); border: none; padding: 5px 14px; font-size: 12px; cursor: pointer; font-family: 'DM Sans', sans-serif; border-radius: 20px; }

          /* Nav */
          .mainNav { background: #C4622D; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; height: 64px; }
          .navLogo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: white; cursor: pointer; }
          .navLogo span { color: #F5C87A; }
          .navLinks { display: flex; gap: 24px; }
          .navLinks a { color: white; text-decoration: none; font-size: 14px; font-weight: 500; opacity: 0.9; }
          .navLinks a:hover { opacity: 1; }
          .navLinks a.active { text-decoration: underline; text-underline-offset: 4px; opacity: 1; }
          .signInBtn { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.6); border-radius: 24px; padding: 8px 22px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }

          /* Hero */
          .aboutHero { position: relative; overflow: hidden; min-height: 520px; display: flex; align-items: center; }
          .heroImgBg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
          .heroImgOverlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(10,2,0,0.88) 0%, rgba(61,18,0,0.72) 50%, rgba(61,18,0,0.15) 100%); }
          .heroContent { position: relative; z-index: 2; padding: 80px; max-width: 640px; }
          .heroBadge { display: inline-flex; align-items: center; gap: 8px; background: rgba(45,106,79,0.35); border: 1px solid rgba(82,183,136,0.45); border-radius: 24px; padding: 6px 16px; color: #74C69D; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 24px; width: fit-content; }
          .dot { width: 8px; height: 8px; background: #52B788; border-radius: 50%; display: inline-block; }
          .heroTitle { font-family: 'Playfair Display', serif; font-size: clamp(38px, 4.5vw, 62px); font-weight: 700; color: white; line-height: 1.08; margin-bottom: 20px; }
          .heroTitle em { font-style: italic; color: #F5C87A; }
          .heroSub { font-size: 16px; color: rgba(255,255,255,0.85); line-height: 1.75; max-width: 460px; font-weight: 300; }

          /* Stats bar */
          .statsBar { background: #1B4332; display: grid; grid-template-columns: repeat(4, 1fr); }
          .statItem { padding: 28px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.1); }
          .statItem:last-child { border-right: none; }
          .statNum { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700; color: #74C69D; display: block; }
          .statLabel { font-size: 11px; color: rgba(255,255,255,0.65); font-weight: 500; letter-spacing: 0.5px; margin-top: 4px; display: block; }

          /* Sections */
          .section { padding: 72px 80px; }
          .sectionLabel { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #2D6A4F; text-transform: uppercase; margin-bottom: 12px; }
          .sectionTitle { font-family: 'Playfair Display', serif; font-size: clamp(28px, 3vw, 42px); font-weight: 700; color: #1a0800; line-height: 1.15; margin-bottom: 24px; }
          .sectionTitle em { font-style: italic; color: #C4622D; }

          /* Mission */
          .missionSection { background: #FDF6F0; }
          .missionGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
          .missionText p { font-size: 15px; color: #4a2010; line-height: 1.8; font-weight: 300; margin-bottom: 18px; }
          .missionText p:last-child { margin-bottom: 0; }
          .quoteCard { background: linear-gradient(135deg, #1B4332, #2D6A4F); border: 1px solid rgba(82,183,136,0.2); border-radius: 20px; padding: 40px; position: relative; overflow: hidden; }
          .quoteCard::before { content: '"'; position: absolute; top: -10px; left: 20px; font-family: 'Playfair Display', serif; font-size: 120px; color: rgba(116,198,157,0.12); line-height: 1; }
          .quoteText { font-family: 'Playfair Display', serif; font-size: 20px; font-style: italic; color: #B7E4C7; line-height: 1.6; position: relative; z-index: 2; }
          .quoteAuthor { font-size: 13px; color: rgba(255,255,255,0.5); margin-top: 20px; font-weight: 500; }

          /* Values */
          .valuesSection { background: #FFF8F3; border-top: 1px solid #EDD8C8; }
          .valuesGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 40px; }
          .valueCard { background: white; padding: 32px; border-radius: 16px; border: 1px solid #EDD8C8; }
          .valueIcon { font-size: 22px; margin-bottom: 14px; display: block; }
          .valueTitle { font-family: 'Playfair Display', serif; font-size: 19px; color: #1a0800; margin-bottom: 10px; }
          .valueDesc { font-size: 14px; color: #6b4030; line-height: 1.7; font-weight: 300; }

          /* Team */
          .teamSection { background: #FDF6F0; border-top: 1px solid #EDD8C8; }
          .teamGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px; }
          .teamCard { background: white; border: 1px solid #EDD8C8; border-radius: 16px; padding: 28px 20px; text-align: center; }
          .teamAvatar { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: white; margin: 0 auto 18px; }
          .teamName { font-family: 'Playfair Display', serif; font-size: 16px; color: #1a0800; margin-bottom: 4px; }
          .teamRole { font-size: 11px; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 14px; }
          .teamBio { font-size: 13px; color: #6b4030; line-height: 1.65; font-weight: 300; }

          /* CTA */
          .ctaSection { background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #C4622D 100%); padding: 80px; text-align: center; }
          .ctaTitle { font-family: 'Playfair Display', serif; font-size: clamp(28px, 3vw, 44px); color: white; margin-bottom: 18px; }
          .ctaTitle em { font-style: italic; color: #F5C87A; }
          .ctaSub { font-size: 16px; color: rgba(255,255,255,0.85); max-width: 480px; margin: 0 auto 40px; line-height: 1.75; font-weight: 300; }
          .ctaBtns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
          .btnP { background: #F5A623; color: #3D1200; border: none; border-radius: 32px; padding: 15px 34px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif; }
          .btnS { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.55); border-radius: 32px; padding: 15px 34px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; }

          /* For Who section */
          .forWhoSection { background: #FDF6F0; border-top: 1px solid #EDD8C8; }
          .forWhoGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 40px; }
          .forWhoCard { padding: 40px; border-radius: 20px; }
          .forWhoCardGreen { background: linear-gradient(135deg, #1B4332, #2D6A4F); }
          .forWhoCardOrange { background: linear-gradient(135deg, #5C1200, #C4622D); }
          .forWhoIcon { font-size: 28px; margin-bottom: 16px; color: rgba(255,255,255,0.7); }
          .forWhoTitle { font-family: 'Playfair Display', serif; font-size: 22px; color: white; margin-bottom: 14px; }
          .forWhoDesc { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.8; font-weight: 300; }

          /* Responsive */
          @media (max-width: 900px) {
            .heroContent { padding: 56px 32px; }
            .aboutHero { min-height: 420px; }
            .section { padding: 56px 24px; }
            .statsBar { grid-template-columns: repeat(2, 1fr); }
            .statItem:nth-child(2) { border-right: none; }
            .statItem:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.1); }
            .missionGrid { grid-template-columns: 1fr; gap: 36px; }
            .valuesGrid { grid-template-columns: 1fr; }
            .forWhoGrid { grid-template-columns: 1fr; }
            .teamGrid { grid-template-columns: repeat(2, 1fr); }
            .topBar { flex-direction: column; gap: 8px; padding: 10px 20px; text-align: center; }
            .mainNav { padding: 0 20px; }
            .navLinks { display: none; }
            .ctaSection { padding: 56px 24px; }
          }
          @media (max-width: 540px) {
            .teamGrid { grid-template-columns: 1fr; }
          }
        `}</style>
      </Head>

      <div className="page">

        <div className="topBar">
          <span className="topBarWelcome">Welcome to <strong>Amai-Mtoto</strong> — choose your space</span>
          <div className="topBarLinks">
            <button className="topBarActive">For Mothers</button>
            <button className="topBarBtn">NHS Staff</button>
            <button className="topBarBtn">Lambeth</button>
          </div>
        </div>

        <nav className="mainNav">
          <div className="navLogo" onClick={() => router.push("/")}>Amai-<span>Mtoto</span></div>
          <div className="navLinks">
            <a href="/trimester-1/nutrition">Nutrition</a>
            <a href="/trimester-1/exercise">Exercise</a>
            <a href="/trimester-1/wellbeing">Wellbeing</a>
            <a href="/faq">FAQ</a>
            <a href="/about-us" className="active">About Us</a>
          </div>
          <button className="signInBtn" onClick={() => router.push(user ? "/dashboard" : "/log-in")}>
            {user ? "My Dashboard" : "Sign In"}
          </button>
        </nav>

        <div className="aboutHero">
          <img src="/womensmiling.png" alt="Four Black and mixed heritage women laughing together in ankara print" className="heroImgBg" />
          <div className="heroImgOverlay"></div>
          <div className="heroContent">
            <div className="heroBadge"><span className="dot"></span>OUR STORY</div>
            <h1 className="heroTitle">Born from <em>community.</em><br />Built for change.</h1>
            <p className="heroSub">Amai Mtoto was created because Black and mixed heritage women in the UK are four times more likely to die in childbirth than white women. We refuse to accept that statistic as inevitable.</p>
          </div>
        </div>

        <div className="statsBar">
          {stats.map((s) => (
            <div className="statItem" key={s.label}>
              <span className="statNum">{s.number}</span>
              <span className="statLabel">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="section missionSection akoko-section">
          <div className="akoko-symbol akoko-mission"></div>
          <div className="missionGrid">
            <div className="missionText">
              <p className="sectionLabel">Our Mission</p>
              <h2 className="sectionTitle">Why <em>Amai Mtoto</em> exists</h2>
              <p><em style={{color:"#2D6A4F"}}>Amai</em> means Mother in Shona. <em style={{color:"#2D6A4F"}}>Mtoto</em> means Child in Swahili. Together they represent the heart of everything this platform stands for — empowering mothers, supporting families, and building a community that carries each other through the pregnancy journey and beyond.</p>
              <p>I created Amai Mtoto because I wanted Black and mixed heritage women and their families to have a space where they could take ownership of their own health. A place built on evidence-based practice that speaks directly to our community — covering nutrition and cultural foods, exercise, parent education, mental wellbeing, and the medical topics that disproportionately affect us.</p>
              <p>But it's more than information. It's about building a village. A community where mothers continue to support each other long after the birth — because that network is just as vital as any clinical resource.</p>
            </div>
            <div className="quoteCard">
              <p className="quoteText">"I wanted to create a space where Black and mixed heritage women could take ownership of their health — with the knowledge, tools and community to do it confidently."</p>
              <p className="quoteAuthor">— Founder, Amai Mtoto</p>
            </div>
          </div>
        </div>

        <div className="section forWhoSection akoko-section">
          <div className="akoko-symbol akoko-forwho"></div>
          <p className="sectionLabel">Who we serve</p>
          <h2 className="sectionTitle">Built for <em>mothers</em> and <em>staff</em></h2>
          <div className="forWhoGrid">
            <div className="forWhoCard forWhoCardGreen">
              <div className="forWhoIcon">◉</div>
              <h3 className="forWhoTitle">For Mothers & Families</h3>
              <p className="forWhoDesc">A holistic pregnancy wellbeing hub covering nutrition and cultural foods, exercise, parent education, mental wellbeing, and medical topics that affect our community — all with evidence-based information and local signposting to services and health professionals near you.</p>
            </div>
            <div className="forWhoCard forWhoCardOrange">
              <div className="forWhoIcon">✦</div>
              <h3 className="forWhoTitle">For NHS & Healthcare Staff</h3>
              <p className="forWhoDesc">Additional signposting and cultural guidance to support your patients — including advice on cultural foods for high BP, gestational diabetes and high BMI, mental health groups for the Black community, and healthy recipe swaps tailored to your patients' backgrounds.</p>
            </div>
          </div>
        </div>

        <div className="section valuesSection akoko-section">
          <div className="akoko-symbol akoko-values"></div>
          <p className="sectionLabel">What drives us</p>
          <h2 className="sectionTitle">Our <em>values</em></h2>
          <div className="valuesGrid">
            {values.map((v) => (
              <div className="valueCard" key={v.title} style={{borderTop: `3px solid ${v.accent}`}}>
                <span className="valueIcon" style={{color: v.accent}}>{v.icon}</span>
                <h3 className="valueTitle">{v.title}</h3>
                <p className="valueDesc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section teamSection akoko-section">
          <div className="akoko-symbol akoko-team"></div>
          <p className="sectionLabel">The people behind the platform</p>
          <h2 className="sectionTitle">Meet the <em>team</em></h2>
          <div className="teamGrid">
            {team.map((m) => (
              <div className="teamCard" key={m.name} style={{borderTop: `3px solid ${m.color}`}}>
                <div className="teamAvatar" style={{background: m.color}}>{m.initial}</div>
                <h3 className="teamName">{m.name}</h3>
                <p className="teamRole" style={{color: m.color}}>{m.role}</p>
                <p className="teamBio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ctaSection">
          <h2 className="ctaTitle">Ready to join our <em>community?</em></h2>
          <p className="ctaSub">Thousands of mothers are already finding support, knowledge and connection on Amai Mtoto.</p>
          <div className="ctaBtns">
            <button className="btnP" onClick={() => router.push(user ? "/dashboard" : "/sign-up")}>
              {user ? "Go to My Dashboard" : "Join Our Community"}
            </button>
            <button className="btnS" onClick={() => router.push("/trimester-1/summary")}>
              Explore Resources
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
