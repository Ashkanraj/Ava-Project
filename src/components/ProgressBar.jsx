import React, { useRef } from "react";

const CustomProgressBar = ({
  value,
  max,
  onChange,
  disabled = false,
  barHeight = 4,
  barRadius = 3,
  color,
  barBg = "#e5e7eb",
  thumbSize = 9,
}) => {
  const percent = max ? Math.min(100, (value / max) * 100) : 0;
  const barRef = useRef(null);

  // Handle click or drag on the bar
  const handleBarClick = (e) => {
    if (disabled || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const x = e.type === "touchstart"
      ? e.touches[0].clientX - rect.left
      : e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, x / rect.width));
    onChange({ target: { value: newPercent * max } });
  };

  // Handle thumb drag
  const handleThumbDrag = (e) => {
    if (disabled || !barRef.current) return;
    const move = (event) => {
      const rect = barRef.current.getBoundingClientRect();
      const x = event.type === "touchmove"
        ? event.touches[0].clientX - rect.left
        : event.clientX - rect.left;
      const newPercent = Math.max(0, Math.min(1, x / rect.width));
      onChange({ target: { value: newPercent * max } });
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
  };

  return (
    <div
      ref={barRef}
      className="relative w-full flex items-center select-none"
      style={{ height: `${thumbSize}px`, cursor: disabled ? "not-allowed" : "pointer" }}
      onClick={handleBarClick}
      onTouchStart={handleBarClick}
    >
      {/* Unfilled bar */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          width: "100%",
          height: `${barHeight}px`,
          background: barBg,
          borderRadius: `${barRadius}px`,
        }}
      />
      {/* Filled bar */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          width: `${percent}%`,
          height: `${barHeight}px`,
          background: color,
          borderRadius: `${barRadius}px`,
          zIndex: 1,
        }}
      />
      {/* Thumb */}
      <div
        className="absolute"
        style={{
          left: `calc(${percent}% - ${thumbSize / 2}px)`,
          top: `calc(50% - ${thumbSize / 2}px)`,
          width: `${thumbSize}px`,
          height: `${thumbSize}px`,
          background: color,
          borderRadius: "50%",
          boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
          cursor: disabled ? "not-allowed" : "grab",
          zIndex: 2,
          transition: "background 0.2s",
        }}
        onMouseDown={handleThumbDrag}
        onTouchStart={handleThumbDrag}
        tabIndex={0}
        role="slider"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-disabled={disabled}
      />
    </div>
  );
};

export default CustomProgressBar;