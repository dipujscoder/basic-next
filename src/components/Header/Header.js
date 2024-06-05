import Link from "next/link";
import React from "react";
import { defaultdHeaderData } from "./data";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Mdndevs
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {defaultdHeaderData.map((e) => {
                return (
                  <li className="nav-item" key={e.id}>
                    <Link className="nav-link" href={e.route}>
                      {e.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
