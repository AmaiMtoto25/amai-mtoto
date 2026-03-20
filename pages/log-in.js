/* eslint-disable */
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";
import JustForNonLoggedInUsers from "../components/JustForNonLoggedInUsers";
import { userIdOfRos } from "../components/AdminWrapper";

const AKOKO = "/akoko-nan-medium.png";

const Login = () => {
  const { logIn } = useAuth();
  const router = useRouter();
  const methods = useForm({ mode: "onBlur" });
  const [firebaseAuthErrorMsg, setFirebaseAuthErrorMsg] = useState();
  const [errorIsVisible, setErrorIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await logIn(data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        if (user.uid === userIdOfRos) {
          router.push(`/admin/dashboard`);
        } else {
          router.push('/dashboard');
        }
      });
    } catch (error) {
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        setFirebaseAuthErrorMsg("Incorrect password — please try again");
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        setFirebaseAuthErrorMsg("No account found with this email — please sign up");
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
          <span>Welcome back to <strong style={{ color: "#F5A623" }}>Amai-Mtoto</strong></span>
          <a href="/sign-up" style={{ color: "#F5C87A", fontWeight: "600", textDecoration: "none", fontSize: "13px" }}>New here? Create an account →</a>
        </div>

        {/* Nav */}
        <div style={{ background: "#C4622D", padding: "0 40px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: "700", color: "white", textDecoration: "none" }}>
            Amai-<span style={{ color: "#F5C87A" }}>Mtoto</span>
          </a>
          <a href="/sign-up" style={{ background: "#F5A623", color: "#3D1200", border: "none", borderRadius: "24px", padding: "8px 22px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Sign Up
          </a>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", alignItems: "stretch", minHeight: "calc(100vh - 104px)" }}>

          {/* Left panel */}
          <div style={{ flex: 1, background: "linear-gradient(135deg, #3D1200 0%, #8B2500 50%, #C4622D 100%)", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "280px", height: "280px", backgroundImage: `url('${AKOKO}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.08, pointerEvents: "none" }}></div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "24px", padding: "6px 16px", color: "#F5C87A", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "24px", width: "fit-content" }}>
              <span style={{ width: "8px", height: "8px", background: "#F5A623", borderRadius: "50%", display: "inline-block" }}></span>
              WELCOME BACK
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,3.5vw,52px)", fontWeight: "700", color: "white", lineHeight: "1.1", marginBottom: "20px" }}>
              Good to have<br />you <em style={{ fontStyle: "italic", color: "#F5C87A" }}>back.</em>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: "1.75", maxWidth: "380px", fontWeight: "400", marginBottom: "36px" }}>
              Your community, your resources and your wellbeing journey are waiting for you.
            </p>
            <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "16px", padding: "24px 28px", border: "1px solid rgba(255,255,255,0.15)" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontStyle: "italic", color: "#F5C87A", lineHeight: "1.6", marginBottom: "12px" }}>
                "Amai Mtoto gave me the confidence to advocate for myself at every appointment."
              </p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: "500" }}>— Community member, London</p>
            </div>
          </div>

          {/* Right panel — form */}
          <div style={{ flex: 1, padding: "64px 60px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#FDF6F0" }}>
            <div style={{ maxWidth: "420px", width: "100%" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: "700", color: "#1a0800", marginBottom: "8px" }}>
                Sign <em style={{ fontStyle: "italic", color: "#C4622D" }}>in</em>
              </h2>
              <p style={{ fontSize: "14px", color: "#6b4030", marginBottom: "32px", lineHeight: "1.6" }}>
                Don't have an account? <a href="/sign-up" style={{ color: "#C4622D", fontWeight: "700", textDecoration: "none" }}>Sign up free</a>
              </p>

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    <div>
                      <label style={labelStyle}>Email address</label>
                      <input type="email" placeholder="your@email.com" style={inputStyle}
                        {...register("email", { required: "Email is required" })} />
                      {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                    </div>

                    <div>
                      <label style={labelStyle}>Password</label>
                      <input type="password" placeholder="Your password" style={inputStyle}
                        {...register("password", { required: "Password is required" })} />
                      {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
                    </div>

                    {errorIsVisible && (
                      <div style={{ background: "#FEF3E8", border: "1.5px solid #C4622D", borderRadius: "10px", padding: "14px 16px", fontSize: "13px", color: "#8B2500", fontWeight: "600" }}>
                        {firebaseAuthErrorMsg}
                      </div>
                    )}

                    <button type="submit" disabled={loading} style={{ width: "100%", background: loading ? "#EDD8C8" : "#C4622D", color: loading ? "#aaa" : "white", border: "none", borderRadius: "12px", padding: "16px", fontSize: "15px", fontWeight: "700", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                      {loading ? "Signing you in..." : "Sign In →"}
                    </button>

                    <div style={{ textAlign: "center" }}>
                      <a href="/sign-up" style={{ fontSize: "13px", color: "#C4622D", fontWeight: "600", textDecoration: "none" }}>
                        Don't have an account? Sign up free →
                      </a>
                    </div>

                    <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center", lineHeight: "1.6" }}>
                      Your data is private and secure. We never share your information.
                    </p>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .login-layout { flex-direction: column !important; }
          .login-left { padding: 40px 24px !important; min-height: auto !important; }
          .login-right { padding: 40px 24px !important; }
        }
      `}</style>
    </JustForNonLoggedInUsers>
  );
};

export default Login;
