import React, { useState } from "react";

const FALLBACK_SVG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjY2NjIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzIj48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjYiLz48cGF0aCBkPSJtMTYgNTggMTYtMTggMzIgMzIiLz48Y2lyY2xlIGN4PSI1MyIgY3k9IjM1IiByPSI3Ii8+PC9zdmc+";    

export function ImageWithFallback({
  src,
  alt = "image",
  className = "",
  style,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? FALLBACK_SVG : src}
      alt={error ? "Failed to load" : alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`transition-opacity duration-500 opacity-100 ${className}`}
      style={{ objectFit: "cover", ...style }}
      {...rest}
    />
  );
}
