"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function HomeComonent() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  function updateSorting2(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("abc", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <div>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => updateSorting("asc")}
        >
          Sort Ascending
        </button>
        <button
          className="btn btn-primary"
          onClick={() => updateSorting("desc")}
        >
          Sort Descending
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => updateSorting2("120")}
        >
          vehicles
        </button>
      </div>
    </div>
  );
}
