"use client";

import React, { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    console.log("Hello world");
  }, []);

  return (
    <div>
      <h1>Hello template</h1>
      {children}
    </div>
  );
}
