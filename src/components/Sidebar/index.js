"use client";

import Link from "next/link";
import React, { useState } from "react";
import sidebarData from "./data";
import "./sidebar.css";
import Collapse from "./Collapse";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="mb-5 text-white">Logo</div>
      <ul className="list-unstyled">
        {sidebarData.map((e) => {
          if (e.child) {
            return <Collapse title={e.title} key={e.id} list={e.child} />;
          } else {
            return (
              <li key={e.id}>
                <Link href={e.route}>{e.title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
