/* eslint-disable */
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import layoutStyle from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.layout_container}>
      <Nav />
      <main className={layoutStyle.layout_children}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
