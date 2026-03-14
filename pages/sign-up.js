/* eslint-disable */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { addNewUser } from "../firebase/firestore";
import Head from "next/head";
import {
  convertDateInputToMillisecondsFormat,
  convertMillisecondsToDateStringFormat,
  dateInFourtyOneWeeksTime,
} from "../lib/helper-functions";
import JustForNonLoggedInUsers from "../components/JustForNonLoggedInUsers";

const AKOKO = "/akoko-nan-medium.png";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [firebaseAuthErrorMsg, setFirebaseAuthErrorMsg] = useState();
  const [errorIsVisible, setErrorIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let ms = convertDateInputToMillisecondsFormat(data.dueDate);
      await signUp(data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        addNewUser(user.uid, data.name, ms);
        router.push(`/home-page?trimester=1`);
      });
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setFirebaseAuthErrorMsg("Please enter a valid email address");
      } else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setFirebaseAuthErrorMsg("This email is already registered — please log in instead");
      } else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
        setFirebaseAuthErrorMsg("Password must be at least 6 characters");
      } else {
        setFirebaseAuthErrorMsg(error.message);
      }
      setErrorIsVisible(true);
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", border: "1.5px solid #EDD8C8", borderRadius: "10px",
    padding: "14px 16px", fontSize: "15px", fontFamily: "'DM Sans', sans-serif",
    fontWeight: "500", outline: "none", background: "#FDF6F0", color: "#1a0800",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontSize: "13px", fontWeight: "700", color: "#1a0800", marginBottom: "6px", display: "block",
  };

  const errorStyle = {
    fontSize: "12px", color: "#C4622D", fontWeight: "600", marginTop: "6px",
  };

  return (
    <JustForNonLoggedInUsers>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#FDF6F0", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}>

        {/* Top bar */}
        <div style={{ background: "#5C1200", padding: "8px 40px", fontSize: "13px", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>Welcome to <strong style={{ color: "#F5A623" }}>Amai-Mtoto</strong></span>
          <a href="/log-in" style={{ color: "#F5C87A", fontWeight: "600", textDecoration: "none", fontSize: "13px" }}>Already have an account? Sign in →</a>
        </div>

        {/* Nav */}
        <div style={{ background: "#C4622D", padding: "0 40px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: "700", color: "white", textDecoration: "none" }}>
            Amai-<span style={{ color: "#F5C87A" }}>Mtoto</span>
          </a>
          <a href="/log-in" style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "24px", padding: "8px 22px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
            Sign In
          </a>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", alignItems: "stretch", minHeight: "calc(100vh - 104px)" }}>

          {/* Left panel */}
          <div style={{ flex: 1, background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #C4622D 100%)", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "280px", height: "280px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "24px", padding: "6px 16px", color: "#B7E4C7", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "24px", width: "fit-content" }}>
              <span style={{ width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", display: "inline-block" }}></span>
              JOIN OUR COMMUNITY
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,3.5vw,52px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "20px" }}>
              Your pregnancy.<br />Your culture.<br /><em style={{ fontStyle: "italic", color: "#B7E4C7" }}>Your community.</em>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: "1.75", maxWidth: "380px", fontWeight: "400", marginBottom: "36px" }}>
              Join thousands of Black and mixed heritage mothers getting culturally-rooted support through every stage of pregnancy and beyond.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Evidence-based, culturally rooted guidance", "Trimester-by-trimester support", "Mental health check-ins built for you", "A community that gets it"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "8px", height: "8px", background: "#52B788", borderRadius: "50%", flexShrink: 0 }}></span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: "400" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel — form */}
          <div style={{ flex: 1, padding: "64px 60px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#FDF6F0" }}>
            <div style={{ maxWidth: "420px", width: "100%" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: "700", color: "#1a0800", marginBottom: "8px" }}>
                Create your <em style={{ fontStyle: "italic", color: "#C4622D" }}>account</em>
              </h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "32px", lineHeight: "1.6" }}>
                It takes less than 2 minutes. Already have an account? <a href="/log-in" style={{ color: "#C4622D", fontWeight: "700", textDecoration: "none" }}>Sign in</a>
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input type="text" placeholder="e.g. Amara" style={inputStyle}
                      {...register("name", { required: "Name is required" })} />
                    {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                  </div>

                  <div>
                    <label style={labelStyle}>Due date</label>
                    <input type="date" style={inputStyle}
                      {...register("dueDate", {
                        required: "Due date is required",
                        min: `${convertMillisecondsToDateStringFormat(new Date().getTime())}`,
                        max: `${dateInFourtyOneWeeksTime()}`,
                      })} />
                    {errors.dueDate?.type === "min" && <p style={errorStyle}>Due date cannot be in the past</p>}
                    {errors.dueDate?.type === "max" && <p style={errorStyle}>Due date is too far in the future</p>}
                    {errors.dueDate?.type === "required" && <p style={errorStyle}>Due date is required</p>}
                  </div>

                  <div>
                    <label style={labelStyle}>Email address</label>
                    <input type="email" placeholder="your@email.com" style={inputStyle}
                      {...register("email", { required: "Email is required" })} />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>

                  <div>
                    <label style={labelStyle}>Password</label>
                    <input type="password" placeholder="At least 6 characters" style={inputStyle}
                      {...register("password", { required: "Password is required" })} />
                    {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
                  </div>

                  {errorIsVisible && (
                    <div style={{ background: "#FEF3E8", border: "1.5px solid #C4622D", borderRadius: "10px", padding: "14px 16px", fontSize: "13px", color: "#8B2500", fontWeight: "600" }}>
                      {firebaseAuthErrorMsg}
                    </div>
                  )}

                  <button type="submit" disabled={loading} style={{ width: "100%", background: loading ? "#EDD8C8" : "#C4622D", color: loading ? "#aaa" : "white", border: "none", borderRadius: "12px", padding: "16px", fontSize: "15px", fontWeight: "700", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                    {loading ? "Creating your account..." : "Join Our Community →"}
                  </button>

                  <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center", lineHeight: "1.6" }}>
                    By signing up you agree to our <a href="/disclaimer" style={{ color: "#C4622D" }}>terms</a>. Your data is private and secure.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .signup-layout { flex-direction: column !important; }
          .signup-left { padding: 40px 24px !important; min-height: auto !important; }
          .signup-right { padding: 40px 24px !important; }
        }
      `}</style>
    </JustForNonLoggedInUsers>
  );
};

export default Signup;
