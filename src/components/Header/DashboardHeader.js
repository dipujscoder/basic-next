import Link from "next/link";
import React from "react";
import { dashboardHeaderData } from "./data";

export default function DashboardHeader() {
  return (
    <header>
      <nav>
        <ul className="list-unstyled d-flex">
          {dashboardHeaderData.map((e) => (
            <li key={e.id}>
              <Link href={e.route}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
