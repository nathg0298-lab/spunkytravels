export default function WaveDivider({
  fill = "var(--navy)",
  flip = false,
  variant = 1,
}: {
  fill?: string;
  flip?: boolean;
  variant?: 1 | 2;
}) {
  const path =
    variant === 1
      ? "M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z"
      : "M0,20 C240,55 480,0 720,30 C960,60 1200,10 1440,35 L1440,60 L0,60Z";

  return (
    <div className={`wave-divider${flip ? " flip" : ""}`}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
