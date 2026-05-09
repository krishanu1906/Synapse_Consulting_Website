import React from "react";

interface Props {
  /**
   * "dark"  → logo is being placed on a LIGHT surface (e.g. white scrolled navbar).
   *           Renders the JPG inline with no wrapper.
   * "light" → logo is being placed on a DARK surface (e.g. hero / footer / mobile drawer).
   *           Wraps the JPG in a clean white rounded card so the wordmark stays legible
   *           and the brand colors keep their intended contrast.
   */
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  /** When true, only render the icon mark without the wordmark text */
  iconOnly?: boolean;
}

/**
 * SynapseLogo — uses the official Synapse Consulting logo (JPG, light-mode artwork).
 *
 * The JPG is the canonical brand asset. Because it is light-mode artwork (white background,
 * blue + orange marks), placing it directly on a dark surface would look out of place. We
 * solve this by wrapping it in a soft white rounded card (`variant="light"`) so the logo
 * always sits on its native white surface — consistent with how the brand was designed.
 *
 * Aspect ratio of the cropped JPG is ~3.05 (full logo).
 */
const SynapseLogo: React.FC<Props> = ({ variant = "dark", size = "md", iconOnly = false }) => {
  // Inner image height — we keep the image itself the same across variants for visual consistency
  const imgHeightPx = { sm: 28, md: 36, lg: 52 }[size];

  // ICON-ONLY MODE — show just the hexagonal "S" mark portion
  if (iconOnly) {
    const iconBox = imgHeightPx + 8;
    return (
      <div
        className="inline-flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm"
        style={{ height: iconBox, width: iconBox, padding: 4 }}
        aria-label="Synapse Consulting"
      >
        <img
          src="/synapse-logo.jpg"
          alt="Synapse Consulting"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
            objectPosition: "left center",
            // The mark sits at the left ~30% of the full logo image
            transform: "scale(3.2)",
            transformOrigin: "left center",
          }}
          draggable={false}
        />
      </div>
    );
  }

  // DARK VARIANT — logo placed on a LIGHT (white) surface → render the JPG inline
  if (variant === "dark") {
    return (
      <div
        className="inline-flex items-center"
        style={{ height: imgHeightPx }}
        aria-label="Synapse Consulting"
      >
        <img
          src="/synapse-logo.jpg"
          alt="Synapse Consulting"
          style={{ height: imgHeightPx, width: "auto", display: "block" }}
          draggable={false}
        />
      </div>
    );
  }

  // LIGHT VARIANT — logo placed on a DARK surface → wrap in a clean white card
  // The card padding + soft shadow makes it look intentional rather than pasted-on.
  const padX = { sm: 10, md: 14, lg: 18 }[size];
  const padY = { sm: 6, md: 8, lg: 10 }[size];

  return (
    <div
      className="inline-flex items-center bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
      style={{ paddingLeft: padX, paddingRight: padX, paddingTop: padY, paddingBottom: padY }}
      aria-label="Synapse Consulting"
    >
      <img
        src="/synapse-logo.jpg"
        alt="Synapse Consulting"
        style={{ height: imgHeightPx, width: "auto", display: "block" }}
        draggable={false}
      />
    </div>
  );
};

export default SynapseLogo;
