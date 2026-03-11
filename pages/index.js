import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Head from "next/head";
import styles from "../styles/landing.module.css";

export async function getServerSideProps() {
  return { props: {} };
}

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.page}>

        {/* ── Top bar ── */}
        <div className={styles.topBar}>
          <span className={styles.topBarWelcome}>
            Welcome to <strong>Amai-Mtoto</strong> — choose your space
          </span>
          <div className={styles.topBarLinks}>
            <button className={styles.topBarActive}>👤 For Mothers</button>
            <button className={styles.topBarBtn}>NHS Staff</button>
            <button className={styles.topBarBtn}>Lambeth</button>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav className={styles.mainNav}>
          <div className={styles.navLogo}>Amai-<span>Mtoto</span></div>
          <div className={styles.navLinks}>
            <a href="/trimester-1/nutrition">Nutrition</a>
            <a href="/trimester-1/exercise">Exercise</a>
            <a href="/trimester-1/wellbeing">Wellbeing</a>
            <a href="/community">Community</a>
            <a href="/podcast">Podcast</a>
            <a href="/find-a-service">Find a Service</a>
          </div>
          <div className={styles.navActions}>
            {user ? (
              <button
                className={styles.signInBtn}
                onClick={() => router.push("/dashboard")}
              >
                My Dashboard
              </button>
            ) : (
              <button
                className={styles.signInBtn}
                onClick={() => router.push("/log-in")}
              >
                Sign In
              </button>
            )}
          </div>
        </nav>

        {/* ── Hero ── */}
        <div className={styles.hero}>
          {/* Left: pattern + text */}
          <div className={styles.heroLeft}>
            <div className={styles.africanPattern}>
              {/* SVG African-inspired geometric pattern */}
              <svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" className={styles.patternSvg}>
                <rect width="600" height="700" fill="#C4622D"/>
                {/* Repeating geometric pattern */}
                {[0,1,2,3,4,5].map(row =>
                  [0,1,2,3,4].map(col => {
                    const x = col * 120 + (row % 2 === 0 ? 0 : 60);
                    const y = row * 120 - 30;
                    return (
                      <g key={`${row}-${col}`} transform={`translate(${x},${y})`}>
                        <polygon points="60,10 110,40 110,80 60,110 10,80 10,40" fill="none" stroke="#E8823A" strokeWidth="1.5" opacity="0.6"/>
                        <polygon points="60,25 95,45 95,75 60,95 25,75 25,45" fill="none" stroke="#F0A050" strokeWidth="1" opacity="0.4"/>
                        <circle cx="60" cy="60" r="8" fill="#E8823A" opacity="0.5"/>
                        <circle cx="60" cy="60" r="3" fill="#F5C070" opacity="0.7"/>
                        <line x1="60" y1="10" x2="60" y2="25" stroke="#F0A050" strokeWidth="1" opacity="0.5"/>
                        <line x1="110" y1="40" x2="95" y2="45" stroke="#F0A050" strokeWidth="1" opacity="0.5"/>
                        <line x1="110" y1="80" x2="95" y2="75" stroke="#F0A050" strokeWidth="1" opacity="0.5"/>
                        <line x1="60" y1="110" x2="60" y2="95" stroke="#F0A050" strokeWidth="1" opacity="0.5"/>
                        <line x1="10" y1="80" x2="25" y2="75" stroke="#F0A050" strokeWidth="1" opacity="0.5"/>
                        <line x1="10" y1="40" x2="25" y2="45" stroke="#F0A050" strokeWidth="1" opacity="0.5"/>
                      </g>
                    );
                  })
                )}
                {/* Overlay gradient for depth */}
                <rect width="600" height="700" fill="url(#heroGrad)" opacity="0.3"/>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8B2500"/>
                    <stop offset="100%" stopColor="#C4622D" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Text overlay on pattern */}
              <div className={styles.heroTextOverlay}>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot}></span>
                  FOR BLACK &amp; MIXED-RACE MOTHERS
                </div>
                <h1 className={styles.heroHeading}>
                  Your Pregnancy.<br />
                  Your Culture.<br />
                  <em>Your Community.</em>
                </h1>
                <p className={styles.heroSubtext}>
                  A safe, culturally-rooted space for Black and mixed-race
                  women navigating pregnancy, birth and the postnatal
                  journey — midwifery-led, community-powered.
                </p>
                <div className={styles.heroCtas}>
                  <button
                    className={styles.ctaPrimary}
                    onClick={() => router.push(user ? "/dashboard" : "/sign-up")}
                  >
                    {user ? "Go to My Dashboard" : "Join Our Community"}
                  </button>
                  <button
                    className={styles.ctaSecondary}
                    onClick={() => router.push("/trimester-1/summary")}
                  >
                    Explore Resources
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: pregnancy photo */}
          <div className={styles.heroRight}>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>2,400+</span>
              <span className={styles.statLabel}>MOTHERS IN<br/>OUR COMMUNITY</span>
            </div>
            <img
              src="/landingPageImages/Meditating.jpeg"
              alt="A Black pregnant woman holding her bump with both hands forming a heart"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* ── Trimester nav strip ── */}
        <div className={styles.trimesterStrip}>
          {[1, 2, 3].map((t) => (
            <button
              key={t}
              className={styles.trimesterBtn}
              onClick={() => router.push(`/trimester-${t}/summary`)}
            >
              Explore Trimester {t}
            </button>
          ))}
        </div>

      </div>
    </>
  );
}




