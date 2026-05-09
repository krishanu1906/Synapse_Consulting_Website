import React from "react";

interface Props {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  /** When true, only render the icon mark without the wordmark text */
  iconOnly?: boolean;
}

/**
 * SynapseLogo — uses the tightly-cropped Synapse Consulting logo with transparent background.
 *
 * The PNG (`/synapse-logo.png`) has whitespace removed and a transparent background, so the mark
 * sits cleanly on any color surface — white navbar, dark footer/hero, anywhere.
 * Aspect ratio is ~3.05 (full logo).
 */
const SynapseLogo: React.FC<Props> = ({ variant = "dark", size = "md", iconOnly = false }) => {
  const heightPx = { sm: 32, md: 40, lg: 56 }[size];

  if (iconOnly) {
    // Icon-only mode: show just the hexagonal "S" mark portion of the logo.
    return (
      <div
        className="inline-flex items-center overflow-hidden"
        style={{ height: heightPx, width: heightPx }}
        aria-label="Synapse Consulting"
      >
        <img
          src="/synapse-logo.png"
          alt="Synapse Consulting"
          style={{
            height: heightPx,
            width: "auto",
            objectFit: "contain",
            objectPosition: "left center",
          }}
          draggable={false}
        />
      </div>
    );
  }

  // Full logo (icon + wordmark). Transparent PNG renders cleanly on any background — no pill needed.
  return (
    <div
      className="inline-flex items-center"
      style={{ height: heightPx }}
      aria-label="Synapse Consulting"
    >
      <img
        src="/synapse-logo.png"
        alt="Synapse Consulting"
        style={{
          height: heightPx,
          width: "auto",
          display: "block",
          filter: variant === "light" ? "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" : "none",
        }}
        draggable={false}
      />
    </div>
  );
};

export default SynapseLogo;
