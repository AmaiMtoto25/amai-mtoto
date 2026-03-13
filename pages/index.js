/* eslint-disable */
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Head from "next/head";

export async function getServerSideProps() {
  return { props: {} };
}

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'DM Sans', sans-serif; }
          .page { min-height: 100vh; background: #1a0800; }
          .topBar { background: #5C1200; display: flex; align-items: center; justify-content: space-between; padding: 8px 40px; font-size: 13px; color: rgba(255,255,255,0.85); }
          .topBarWelcome strong { color: #F5A623; }
          .topBarLinks { display: flex; gap: 4px; }
          .topBarActive { background: #C4622D; color: white; border: none; border-radius: 20px; padding: 5px 16px; font-size: 12px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
          .topBarBtn { background: transparent; color: rgba(255,255,255,0.75); border: none; padding: 5px 14px; font-size: 12px; cursor: pointer; font-family: 'DM Sans', sans-serif; border-radius: 20px; }
          .mainNav { background: #C4622D; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; height: 64px; }
          .navLogo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: white; }
          .navLogo span { color: #F5C87A; }
          .navLinks { display: flex; gap: 24px; }
          .navLinks a { color: white; text-decoration: none; font-size: 14px; font-weight: 500; opacity: 0.9; }
          .signInBtn { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.6); border-radius: 24px; padding: 8px 22px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
          .hero { display: flex; min-height: calc(100vh - 104px); }
          .heroLeft { flex: 1; position: relative; overflow: hidden; }
          .ankaraImg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }
          .overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(5,18,12,0.82) 0%, rgba(5,18,12,0.55) 60%, rgba(5,18,12,0.15) 100%); }
          .heroText { position: relative; z-index: 2; padding: 80px 56px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
          .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.25); border-radius: 24px; padding: 6px 16px; color: white; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 28px; width: fit-content; }
          .dot { width: 8px; height: 8px; background: #F5A623; border-radius: 50%; display: inline-block; }
          .h1 { font-family: 'Playfair Display', serif; font-size: clamp(38px, 4.5vw, 64px); font-weight: 700; color: white; line-height: 1.1; margin-bottom: 20px; }
          .h1 em { font-style: italic; color: #F5C87A; }
          .sub { font-size: 15px; color: rgba(255,255,255,0.88); line-height: 1.7; max-width: 420px; margin-bottom: 40px; font-weight: 300; }
          .btns { display: flex; gap: 14px; flex-wrap: wrap; }
          .btnP { background: #F5A623; color: #3D1200; border: none; border-radius: 32px; padding: 15px 34px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif; box-shadow: 0 6px 24px rgba(0,0,0,0.3); }
          .btnS { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5); border-radius: 32px; padding: 15px 34px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; }
          .heroRight { flex: 1; position: relative; background: #111; min-height: 500px; }
          .heroImg { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
          .stat { position: absolute; top: 40px; right: 40px; background: white; border-radius: 16px; padding: 16px 20px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.3); z-index: 10; }
          .statN { display: block; font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #3D1200; line-height: 1; }
          .statL { display: block; font-size: 10px; color: #888; font-weight: 600; letter-spacing: 0.8px; margin-top: 4px; line-height: 1.4; }
          .strip { background: #8B2500; display: flex; justify-content: center; gap: 16px; padding: 20px 40px; flex-wrap: wrap; }
          .trimBtn { background: rgba(255,255,255,0.12); color: white; border: 1px solid rgba(255,255,255,0.25); border-radius: 32px; padding: 12px 32px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; }
          @media (max-width: 900px) {
            .hero { flex-direction: column; }
            .heroLeft { min-height: 480px; }
            .heroRight { min-height: 360px; }
            .heroText { padding: 50px 32px; }
            .topBar { flex-direction: column; gap: 8px; padding: 10px 20px; text-align: center; }
            .mainNav { padding: 0 20px; }
            .navLinks { display: none; }
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
          <div className="navLogo">Amai-<span>Mtoto</span></div>
          <div className="navLinks">
            <a href="/trimester-1/nutrition">Nutrition</a>
            <a href="/trimester-1/exercise">Exercise</a>
            <a href="/trimester-1/wellbeing">Wellbeing</a>
            <a href="/faq">FAQ</a>
            <a href="/about-us">About Us</a>
          </div>
          <button className="signInBtn" onClick={() => router.push(user ? "/dashboard" : "/log-in")}>
            {user ? "My Dashboard" : "Sign In"}
          </button>
        </nav>

        <div className="hero">
          <div className="heroLeft">
            <img src="/landingPageImages/ChatGPT_Image_Mar_13__2026__03_40_32_PM.png"
            <div className="overlay"></div>
            <div className="heroText">
              <div className="badge"><span className="dot"></span>FOR BLACK AND MIXED-RACE MOTHERS</div>
              <h1 className="h1">Your Pregnancy.<br />Your Culture.<br /><em>Your Community.</em></h1>
              <p className="sub">A safe, culturally-rooted space for Black and mixed-race women navigating pregnancy, birth and the postnatal journey — midwifery-led, community-powered.</p>
              <div className="btns">
                <button className="btnP" onClick={() => router.push(user ? "/dashboard" : "/sign-up")}>
                  {user ? "Go to My Dashboard" : "Join Our Community"}
                </button>
                <button className="btnS" onClick={() => router.push("/trimester-1/summary")}>
                  Explore Resources
                </button>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="stat">
              <span className="statN">2,400+</span>
              <span className="statL">MOTHERS IN<br/>OUR COMMUNITY</span>
            </div>
            <img src="/landingPageImages/Meditating.jpeg" alt="A Black pregnant woman sitting calmly" className="heroImg" />
          </div>
        </div>

        <div className="strip">
          {[1, 2, 3].map((t) => (
            <button key={t} className="trimBtn" onClick={() => router.push(`/trimester-${t}/summary`)}>
              Explore Trimester {t}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
