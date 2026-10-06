import { useState } from "react";

// Shows your photo; if the file is missing, shows a blue placeholder instead.
export default function Photo({ src, alt = "", label, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={`photo placeholder ${className}`} role="img" aria-label={alt || label}>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.8" />
          <path d="M3 17l5-5 4 4 3-3 6 6" />
        </svg>
        <span>{label || "Your photo here"}</span>
      </div>
    );
  }
  return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
