import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer";

export default function FrontendLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
