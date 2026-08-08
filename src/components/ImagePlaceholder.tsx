import React from "react";

interface ImagePlaceholderProps {
  type: "phone" | "wide" | "thumb";
  tag?: string;
  what: string;
  size?: string;
  caption?: string;
  className?: string;
}

export function ImagePlaceholder({
  type,
  tag = "Image placeholder",
  what,
  size,
  caption,
  className = "",
}: ImagePlaceholderProps) {
  const typeClass =
    type === "phone" ? "ph--phone" : type === "thumb" ? "ph--thumb" : "ph--wide";

  return (
    <figure className={`shot ${className}`}>
      <div className={`ph ${typeClass}`}>
        <span className="ph__tag">{tag}</span>
        <p className="ph__what">{what}</p>
        {size && <span className="ph__size">{size}</span>}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
