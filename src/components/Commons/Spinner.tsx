import React from "react";

type SpinnerProps = {
  size?: number; // diameter in pixels
  strokeWidth?: number; // stroke width in pixels
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ size = 48, strokeWidth = 4, className = "" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg
      className={`animate-spin text-gray-900 ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="status"
      aria-label="loading"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference * 0.75}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Spinner;


