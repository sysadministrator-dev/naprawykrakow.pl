"use client";

import { useState } from "react";
import type { reviews } from "@/lib/reviews";

const LONG_TEXT_THRESHOLD = 140;

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.48a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.56-5.17 3.56-8.82Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.96-2.91l-3.88-3c-1.08.72-2.45 1.15-4.08 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.61H1.26a12 12 0 0 0 0 10.78l4.01-3.11Z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.61l4.01 3.11C6.22 6.86 8.87 4.75 12 4.75Z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-primary">
      <path fillRule="evenodd" d="M10 1.5 12.24 3l2.7-.53 1.2 2.48 2.36 1.34-.63 2.66.63 2.66-2.36 1.34-1.2 2.48-2.7-.53L10 16.5l-2.24-1.5-2.7.53-1.2-2.48-2.36-1.34.63-2.66-.63-2.66 2.36-1.34 1.2-2.48 2.7.53L10 1.5Zm3.6 6.4-1.06-1.08-3.04 3-1.14-1.13-1.06 1.07 2.2 2.2 4.1-4.06Z" clipRule="evenodd" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-amber-400" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L10 1.5Z" />
          </svg>
        ))}
      </div>
      <VerifiedIcon />
    </div>
  );
}

export default function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const initial = review.author.trim().charAt(0).toUpperCase();
  const isLong = review.text.length > LONG_TEXT_THRESHOLD;

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {initial}
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-900">{review.author}</p>
            <p className="text-xs text-zinc-500">{review.date}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      <div className="mt-4">
        <StarRow />
      </div>

      <blockquote className={`mt-3 flex-1 text-sm text-zinc-700 ${expanded ? "" : "line-clamp-4"}`}>
        {review.text}
      </blockquote>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 w-fit text-xs font-semibold text-primary hover:underline"
        >
          {expanded ? "Zwiń" : "Czytaj więcej"}
        </button>
      )}
    </figure>
  );
}
