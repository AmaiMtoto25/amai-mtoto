/* eslint-disable */
import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export async function getServerSideProps() {
  return { props: {} };
}

const SERVICE_TYPES = [
  { id: "all", label: "All Services" },
  { id: "midwifery", label: "Midwives & Health Visitors" },
  { id: "antenatal", label: "Antenatal & Postnatal Classes" },
  { id: "mentalhealth", label: "Mental Health Support" },
  { id: "community", label: "Black Community Groups" },
  { id: "breastfeeding", label: "Breastfeeding Support" },
  { id: "food", label: "Food & Community Kitchens" },
];

const NATIONAL_SERVICES = [
  {
    name: "Five X More",
    type: "community",
    typeLabel: "Black Community Group",
    desc: "Campaigning to improve maternity outcomes for Black women in the UK.",
    href: "https://www.fivexmore.com/",
    phone: null,
    color: "#C4622D",
  },
  {
    name: "Black Minds Matter UK",
    type: "mentalhealth",
    typeLabel: "Mental Health Support",
    desc: "Connecting Black individuals and families with free mental health services.",
    href: "https://www.blackmindsmatteruk.com/",
    phone: null,
    color: "#2D6A4F",
  },
  {
    name: "PANDAS Foundation",
    type: "mentalhealth",
    typeLabel: "Mental Health Support",
    desc: "Postnatal and antenatal depression support for mothers and families.",
    href: "https://pandasfoundation.org.uk/",
    phone: "0808 1961 776",
    color: "#2D6A4F",
  },
  {
    name: "La Leche League GB",
    type: "breastfeeding",
    typeLabel: "Breastfeeding Support",
    desc: "Mother-to-mother breastfeeding support groups across the UK.",
    href: "https://www.laleche.org.uk/",
    phone: "0345 120 2918",
    color: "#8B2500",
  },
  {
    name: "NCT Breastfeeding Helpline",
    type: "breastfeeding",
    typeLabel: "Breastfeeding Support",
    desc: "Free breastfeeding support from trained NCT volunteers.",
    href: "https://www.nct.org.uk/baby-toddler/feeding/early-days/breastfeeding-helpline",
    phone: "0300 330 0700",
    color: "#8B2500",
  },
  {
    name: "BAATN",
    type: "mentalhealth",
    typeLabel: "Mental Health Support",
    desc: "The Black, African and Asian Therapy Network — culturally appropriate therapy.",
    href: "https://www.baatn.org.uk/",
    phone: null,
    color: "#2D6A4F",
  },
  {
    name: "Motherhood Group",
    type: "community",
    typeLabel: "Black Community Group",
    desc: "A community for Black mothers to connect, share and support each other.",
    href: "https://themotherhoodgroup.com/",
    phone: null,
    color: "#C4622D",
  },
  {
    name: "Trussell Trust Food Banks",
    type: "food",
    typeLabel: "Food & Community",
    desc: "Find your nearest food bank for emergency food support.",
    href: "https://www.trusselltrust.org/get-help/find-a-foodbank/",
    phone: null,
    color: "#1B4332",
  },
  {
    name: "Family Lives",
    type: "antenatal",
    typeLabel: "Antenatal & Postnatal",
    desc: "Support for parents at all stages — helpline, online chat and local groups.",
    href: "https://www.familylives.org.uk/",
    phone: "0808 800 2222",
    color: "#5C1200",
  },
  {
    name: "Lullaby Trust",
    type: "midwifery",
    typeLabel: "Midwives & Health Visitors",
    desc: "Safer sleep advice and bereavement support for families.",
    href: "https://www.lullabytrust.org.uk/",
    phone: "0808 802 6869",
    color: "#3D1200",
  },
  {
    name: "Association of Breastfeeding Mothers",
    type: "breastfeeding",
    typeLabel: "Breastfeeding Support",
    desc: "24-hour breastfeeding helpline and local support groups.",
    href: "https://abm.me.uk/",
    phone: "0300 011 2772",
    color: "#8B2500",
  },
  {
    name: "Maternal Mental Health Alliance",
    type: "mentalhealth",
    typeLabel: "Mental Health Support",
    desc: "Campaigning for better perinatal mental health services across the UK.",
    href: "https://maternalmentalhealthalliance.org/",
    phone: null,
    color: "#2D6A4F",
  },
];

export default function LocalServices() {
  const [postcode, setPostcode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nhsResults, setNhsResults] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!postcode.trim()) return;
    setLoading(true);
    setError("");
    setNhsResults([]);

    try {
      const res = await fetch(
        `https://api.nhs.uk/service-search/search?api-version=1&search=${encodeURIComponent(postcode.trim())}&top=5`,
        { headers: { "subscription-key": "YOUR_NHS_API_KEY" } }
      );
      if (res.ok) {
        const data = await res.json();
        setNhsResults(data.value || []);
      }
    } catch (e) {
      // NHS API not available — show curated results only
    }

    setSubmitted(true);
    setLoading(false);
  };

  const filteredNational = NATIONAL_SERVICES.filter(
    s => activeFilter === "all" || s.type === activeFilter
  );

  const AKOKO = "/akoko-nan-medium.png";

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #C4622D 100%)", padding: "64px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "240px", height: "240px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" }}></div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(45,106,79,0.35)", border: "1px solid rgba(82,183,136,0.45)", borderRadius: "24px", padding: "6px 16px", color: "#74C69D", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "20px", fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", display: "inline-block" }}></span>
          FIND SUPPORT NEAR YOU
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,56px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "16px" }}>
          Local <em style={{ fontStyle: "italic", color: "#F5C87A" }}>services</em> & support
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.75", maxWidth: "520px", fontWeight: "400", marginBottom: "32px", fontFamily: "'DM Sans', sans-serif" }}>
          Find NHS services, Black community groups, mental health support, breastfeeding help and more — tailored for mothers in your area.
        </p>

        {/* Postcode search */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Enter your postcode..."
            value={postcode}
            onChange={e => setPostcode(e.target.value.toUpperCase())}
            onKeyDown={e => e.key === "Enter" && handleSearch()}
            style={{ border: "none", borderRadius: "12px", padding: "14px 20px", fontSize: "15px", fontFamily: "'DM Sans', sans-serif", fontWeight: "500", width: "220px", outline: "none", background: "white", color: "#1a0800" }}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            style={{ background: "#F5A623", color: "#3D1200", border: "none", borderRadius: "12px", padding: "14px 28px", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
          >
            {loading ? "Searching..." : "Find Services"}
          </button>
        </div>
      </div>

      <div style={{ background: "#FDF6F0", padding: "48px 80px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          {/* NHS Local Results */}
          {submitted && (
            <div style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#52B788", textTransform: "uppercase" }}>
                  NHS Services near {postcode}
                </div>
                <div style={{ flex: 1, height: "1px", background: "#EDD8C8" }}></div>
              </div>

              {nhsResults.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }}>
                  {nhsResults.map((r, i) => (
                    <div key={i} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", padding: "20px", borderTop: "3px solid #C4622D" }}>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a0800", marginBottom: "6px" }}>{r.OrganisationName}</div>
                      <div style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>{r.Address1}, {r.City}, {r.Postcode}</div>
                      {r.Phone && <div style={{ fontSize: "13px", color: "#C4622D", fontWeight: "600" }}>📞 {r.Phone}</div>}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", padding: "28px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#FDF6F0", border: "1px solid #EDD8C8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>◎</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "600", color: "#1a0800", marginBottom: "4px" }}>NHS service search</div>
                    <div style={{ fontSize: "13px", color: "#6b4030" }}>For your local NHS maternity services, visit <a href="https://www.nhs.uk/service-search/maternity" target="_blank" rel="noreferrer" style={{ color: "#C4622D", fontWeight: "600" }}>NHS Service Search</a> or call <strong>111</strong> for guidance.</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Filter tabs */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2px", color: "#52B788", textTransform: "uppercase", whiteSpace: "nowrap" }}>National Services</div>
            <div style={{ flex: 1, height: "1px", background: "#EDD8C8" }}></div>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
            {SERVICE_TYPES.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveFilter(t.id)}
                style={{ background: activeFilter === t.id ? "#C4622D" : "white", color: activeFilter === t.id ? "white" : "#6b4030", border: `1.5px solid ${activeFilter === t.id ? "#C4622D" : "#EDD8C8"}`, borderRadius: "24px", padding: "8px 16px", fontSize: "13px", fontWeight: "600", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s" }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* National services grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px", marginBottom: "48px" }}>
            {filteredNational.map((svc, i) => (
              <div key={i} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDD8C8", padding: "24px", borderTop: `3px solid ${svc.color}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: "-12px", bottom: "-12px", width: "70px", height: "70px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.05, pointerEvents: "none" }}></div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a0800", marginBottom: "4px" }}>{svc.name}</div>
                    <span style={{ fontSize: "10px", background: "#FDF6F0", color: svc.color, borderRadius: "20px", padding: "3px 10px", fontWeight: "700", border: `1px solid ${svc.color}30` }}>{svc.typeLabel}</span>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "#6b4030", lineHeight: "1.65", fontWeight: "400", marginBottom: "14px" }}>{svc.desc}</p>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                  <a href={svc.href} target="_blank" rel="noreferrer" style={{ background: svc.color, color: "white", borderRadius: "20px", padding: "7px 16px", fontSize: "12px", fontWeight: "700", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                    Visit website →
                  </a>
                  {svc.phone && (
                    <a href={`tel:${svc.phone}`} style={{ fontSize: "13px", color: svc.color, fontWeight: "600", textDecoration: "none" }}>
                      📞 {svc.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency banner */}
          <div style={{ background: "linear-gradient(135deg, #3D1200, #8B2500)", borderRadius: "16px", padding: "32px 40px", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "140px", height: "140px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.07, pointerEvents: "none" }}></div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "white", fontWeight: "700", marginBottom: "8px" }}>In an emergency</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: "1.7", fontWeight: "400" }}>If you or your baby are in immediate danger, call <strong style={{ color: "#F5A623" }}>999</strong>. For urgent medical advice during pregnancy, call <strong style={{ color: "#F5A623" }}>111</strong> or contact your maternity unit directly.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="tel:999" style={{ background: "#F5A623", color: "#3D1200", borderRadius: "24px", padding: "12px 24px", fontSize: "15px", fontWeight: "700", textDecoration: "none", textAlign: "center", fontFamily: "'DM Sans', sans-serif" }}>Call 999</a>
              <a href="tel:111" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderRadius: "24px", padding: "12px 24px", fontSize: "15px", fontWeight: "600", textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>Call 111</a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ls-hero { padding: 40px 20px !important; }
          .ls-body { padding: 32px 16px !important; }
          .ls-grid { grid-template-columns: 1fr !important; }
          .ls-filters { gap: 6px !important; }
          .ls-emergency { flex-direction: column !important; }
          input[type="text"] { width: 100% !important; }
        }
      `}</style>
    </Layout>
  );
}
