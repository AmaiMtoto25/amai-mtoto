/* eslint-disable */
import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function createTrimesterItems() {
  const TRIMESTERS = 3;
  const TOPICS = [
    { label: "Summary", subLabel: "What to expect this trimester", href_key: "summary" },
    { label: "Exercise", subLabel: "Exercises tailored for you", href_key: "exercise" },
    { label: "Wellbeing", subLabel: "Advice on how to feel good", href_key: "wellbeing" },
    { label: "Nutrition", subLabel: "Sort the facts from the fads", href_key: "nutrition" },
    { label: "Wellbeing Check-in", subLabel: "Your weekly mood & mental health check-in", href: "/wellbeing-checkin" },
  ];
  return Array.from({ length: TRIMESTERS }, (_, i) => ({
    label: `Trimester ${i + 1}`,
    children: TOPICS.map((t) => t.href ? t : { ...t, href: `/trimester-${i + 1}/${t.href_key}` }),
  }));
}

function createTrimester4() {
  const TOPICS = [
    { label: "Summary", subLabel: "What to expect after birth", href_key: "summary" },
    { label: "Exercise & Recovery", subLabel: "Safe postnatal movement", href_key: "exercise" },
    { label: "Nutrition & Feeding", subLabel: "Nourishing you and baby", href_key: "nutrition" },
    { label: "Mental Health", subLabel: "Postnatal wellbeing", href_key: "wellbeing" },
    { label: "Baby Care", subLabel: "Essentials for new parents", href_key: "baby-care" },
    { label: "Relationships", subLabel: "Support and connection", href_key: "relationships" },
    { label: "Wellbeing Check-in", subLabel: "Your weekly mood & mental health check-in", href: "/wellbeing-checkin" },
  ];
  return {
    label: "After Birth",
    children: TOPICS.map(t => t.href ? t : { ...t, href: `/trimester-4/${t.href_key}` }),
  };
}

const trimesterItems = createTrimesterItems();

function getNavItems(user) {
  return [
  { label: user ? "Dashboard" : "Home", href: user ? "/dashboard" : "/" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about-us" },
  { label: "Local Services", href: "/local-services" },
  { label: "NHS Staff", href: "/nhs-staff" },
  ...trimesterItems,
  createTrimester4(),
];}

export default function Nav() {
  const { user, logOut, setUser } = useAuth();
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = getNavItems(user);

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .am-topbar { background: #5C1200; display: flex; align-items: center; justify-content: space-between; padding: 8px 40px; font-size: 13px; color: rgba(255,255,255,0.85); font-family: 'DM Sans', sans-serif; }
        .am-topbar strong { color: #F5A623; }
        .am-topbar-btns { display: flex; gap: 4px; }
        .am-tbactive { background: #2D6A4F; color: white; border: none; border-radius: 20px; padding: 5px 16px; font-size: 12px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .am-tbbtn { background: transparent; color: rgba(255,255,255,0.75); border: none; padding: 5px 14px; font-size: 12px; cursor: pointer; font-family: 'DM Sans', sans-serif; border-radius: 20px; }
        .am-nav { background: #C4622D; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; height: 64px; position: relative; font-family: 'DM Sans', sans-serif; }
        .am-nav-logo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: white; cursor: pointer; text-decoration: none; }
        .am-nav-logo span { color: #F5C87A; }
        .am-nav-links { display: flex; gap: 4px; align-items: center; }
        .am-nav-item { position: relative; }
        .am-nav-link { color: white; text-decoration: none; font-size: 14px; font-weight: 500; opacity: 0.9; padding: 8px 12px; border-radius: 8px; display: block; background: transparent; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; white-space: nowrap; }
        .am-nav-link:hover { opacity: 1; background: rgba(255,255,255,0.12); }
        .am-nav-link.active { opacity: 1; text-decoration: underline; text-underline-offset: 4px; }
        .am-dropdown { position: absolute; top: calc(100% + 8px); left: 0; background: white; border-radius: 12px; padding: 8px; min-width: 260px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); z-index: 100; }
        .am-dropdown-item { display: block; padding: 10px 14px; border-radius: 8px; text-decoration: none; color: #1a0800; transition: background 0.15s; }
        .am-dropdown-item:hover { background: #FFF0E8; }
        .am-dropdown-item.checkin { border-top: 1px solid #EDD8C8; margin-top: 4px; padding-top: 12px; }
        .am-dropdown-item.checkin .am-dropdown-label { color: #2D6A4F; }
        .am-dropdown-label { font-size: 14px; font-weight: 500; color: #1a0800; }
        .am-dropdown-sub { font-size: 12px; color: #888; margin-top: 2px; }
        .am-nav-right { display: flex; gap: 10px; align-items: center; }
        .am-signin { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.6); border-radius: 24px; padding: 8px 20px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .am-signup { background: #F5A623; color: #3D1200; border: none; border-radius: 24px; padding: 8px 20px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .am-hamburger { display: none; background: transparent; border: none; cursor: pointer; padding: 8px; }
        .am-hamburger span { display: block; width: 22px; height: 2px; background: white; margin: 5px 0; border-radius: 2px; transition: all 0.3s; }
        .am-mobile-menu { display: none; background: #3D1200; padding: 16px 24px; }
        .am-mobile-link { display: block; color: white; text-decoration: none; padding: 10px 0; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'DM Sans', sans-serif; }
        .am-mobile-link.checkin { color: #74C69D; }
        .am-mobile-group { font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #F5A623; text-transform: uppercase; padding: 14px 0 6px; }
        @media (max-width: 900px) {
          .am-topbar { padding: 6px 20px; flex-direction: column; gap: 6px; text-align: center; }
          .am-nav { padding: 0 20px; }
          .am-nav-links { display: none; }
          .am-hamburger { display: block; }
          .am-mobile-menu { display: block; }
          .am-mobile-menu.hidden { display: none; }
        }
      `}</style>

      <div className="am-topbar">
        <span>Welcome to <strong>Amai-Mtoto</strong> — choose your space</span>
        <div className="am-topbar-btns">
          <button className="am-tbactive">For Mothers</button>
          <button className="am-tbbtn" onClick={() => router.push("/nhs-staff")}>NHS Staff</button>
          <button className="am-tbbtn">Lambeth</button>
        </div>
      </div>

      <nav className="am-nav">
        <a className="am-nav-logo" onClick={() => router.push(user ? "/dashboard" : "/")}>Amai-<span>Mtoto</span></a>

        <div className="am-nav-links">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="am-nav-item"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                className={`am-nav-link ${router.pathname === item.href ? "active" : ""}`}
                href={item.href || "#"}
              >
                {item.label} {item.children && "▾"}
              </a>
              {item.children && openDropdown === item.label && (
                <div className="am-dropdown">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      className={`am-dropdown-item ${child.href === "/wellbeing-checkin" ? "checkin" : ""}`}
                      href={child.href}
                    >
                      <div className="am-dropdown-label">
                        {child.href === "/wellbeing-checkin" ? "💚 " : ""}{child.label}
                      </div>
                      <div className="am-dropdown-sub">{child.subLabel}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="am-nav-right">
          {user ? (
            <button className="am-signin" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button className="am-signin" onClick={() => router.push("/log-in")}>Sign In</button>
              <button className="am-signup" onClick={() => router.push("/sign-up")}>Sign Up</button>
            </>
          )}
          <button className="am-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`am-mobile-menu ${mobileOpen ? "" : "hidden"}`}>
        {navItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <div className="am-mobile-group">{item.label}</div>
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    className={`am-mobile-link ${child.href === "/wellbeing-checkin" ? "checkin" : ""}`}
                    href={child.href}
                    style={{ paddingLeft: "12px", fontSize: "14px" }}
                  >
                    {child.href === "/wellbeing-checkin" ? "💚 " : ""}{child.label}
                  </a>
                ))}
              </>
            ) : (
              <a className="am-mobile-link" href={item.href}>{item.label}</a>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
