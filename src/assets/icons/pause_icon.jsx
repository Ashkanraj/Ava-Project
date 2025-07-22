
const PauseIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="4" width="5" height="16" rx="2" fill={color} />
      <rect x="14" y="4" width="5" height="16" rx="2" fill={color} />
    </svg>
  );
  export default PauseIcon;