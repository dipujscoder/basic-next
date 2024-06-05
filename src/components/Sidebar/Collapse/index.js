"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Collapse({ list, title }) {
  const [show, setShow] = useState(false);

  const _handleCollapse = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    console.log("Hello sidebar");
  }, []);

  return (
    <li>
      {/* <Link href={e.route}>{e.title}</Link> */}
      <a href="#" onClick={_handleCollapse}>
        {title}
      </a>
      <div
        className={classNames("collapse", {
          show: show,
        })}
      >
        <ul className="sub-menu list-unstyled">
          {list.map((f) => {
            return (
              <li key={f.title}>
                <Link href={f.route}>{f.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
