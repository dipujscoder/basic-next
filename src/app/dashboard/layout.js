"use client";

import DashboardHeader from "@/components/Header/DashboardHeader";
import Sidebar from "@/components/Sidebar";
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
