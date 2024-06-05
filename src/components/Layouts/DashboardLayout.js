import React from "react";
import Sidebar from "../Sidebar";
import DashboardHeader from "../Header/DashboardHeader";
import "./layout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="main-wrapper">
      <Sidebar />

      <main className="main-contenet">
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
}
