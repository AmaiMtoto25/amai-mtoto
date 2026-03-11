import styles from "../styles/landing.module.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export async function getServerSideProps() {
  return { props: {} };
}

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Layout>
      <div className={styles.page}>
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
        <div className={styles.hero}>
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
              A safe, culturally-rooted space for Black and mixed-race women
              navigating pregnancy, birth and the postnatal journey.
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
    </Layout>
  );
}
