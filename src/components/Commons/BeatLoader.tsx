import React from "react";

type BeatLoaderProps = {
  size?: number; // diameter of each dot in px
  speedSeconds?: number; // duration of one animation cycle
  dotCount?: number; // number of dots
  className?: string; // use text-* classes to control color (uses currentColor)
};

const BeatLoader: React.FC<BeatLoaderProps> = ({
  size = 10,
  speedSeconds = 0.6,
  dotCount = 3,
  className = "",
}) => {
  const animationName = "beatLoaderScale";
  const gap = Math.max(4, Math.round(size * 0.6));

  return (
    <div
      className={`inline-flex items-center ${className}`}
      role="status"
      aria-label="loading"
      style={{
        columnGap: `${gap}px`,
      }}
    >
      {/* Inline keyframes to keep component self-contained */}
      <style>{`
        @keyframes ${animationName} {
          0%, 80%, 100% { transform: scale(0.4); opacity: 0.6; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      {Array.from({ length: Math.max(1, dotCount) }).map((_, index) => (
        <span
          key={index}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            display: "inline-block",
            backgroundColor: "currentColor",
            animation: `${animationName} ${speedSeconds}s ease-in-out ${
              (index * speedSeconds) / Math.max(1, dotCount)
            }s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default BeatLoader;


