
const SpeakerIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 5V4l-5 5H4z" fill={color} />
      <path d="M16.5 8.5a5 5 0 010 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M19 6a9 9 0 010 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  export default SpeakerIcon;