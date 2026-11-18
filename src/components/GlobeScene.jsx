const globeNodes = [
  { left: 18, top: 24, size: 4, opacity: 0.8 },
  { left: 27, top: 18, size: 3, opacity: 0.9 },
  { left: 32, top: 34, size: 5, opacity: 0.95 },
  { left: 42, top: 20, size: 4, opacity: 0.8 },
  { left: 52, top: 32, size: 5, opacity: 1 },
  { left: 61, top: 24, size: 4, opacity: 0.9 },
  { left: 68, top: 38, size: 3, opacity: 0.8 },
  { left: 72, top: 54, size: 5, opacity: 1 },
  { left: 59, top: 64, size: 4, opacity: 0.9 },
  { left: 47, top: 58, size: 3, opacity: 0.8 },
  { left: 34, top: 62, size: 5, opacity: 1 },
  { left: 26, top: 52, size: 3, opacity: 0.8 },
  { left: 20, top: 72, size: 4, opacity: 0.9 },
  { left: 76, top: 18, size: 4, opacity: 0.85 },
  { left: 80, top: 28, size: 3, opacity: 0.9 },
  { left: 83, top: 44, size: 5, opacity: 1 },
  { left: 78, top: 68, size: 4, opacity: 0.7 },
  { left: 14, top: 76, size: 3, opacity: 0.8 },
  { left: 57, top: 48, size: 3, opacity: 0.8 },
  { left: 50, top: 74, size: 4, opacity: 0.9 },
  { left: 66, top: 72, size: 3, opacity: 0.8 },
  { left: 44, top: 44, size: 3, opacity: 0.85 },
  { left: 38, top: 78, size: 4, opacity: 0.9 },
  { left: 88, top: 62, size: 3, opacity: 0.75 },
  { left: 10, top: 48, size: 4, opacity: 0.87 },
];

function GlobeScene({ pointerX = 0, pointerY = 0, ariaLabel }) {
  const globeTiltX = pointerY * 18;
  const globeTiltY = pointerX * 22;

  return (
    <div className="globe-scene" aria-label={ariaLabel}>
      <div className="globe-orbit orbit-one" />
      <div className="globe-orbit orbit-two" />
      <div className="globe-shell" style={{ transform: `rotateX(${globeTiltX}deg) rotateY(${globeTiltY}deg)` }}>
        <div className="globe-sphere">
          <div className="globe-surface" />
          <div className="globe-continents" />
          <div className="globe-ring ring-latitude ring-one" />
          <div className="globe-ring ring-latitude ring-two" />
          <div className="globe-ring ring-latitude ring-three" />
          <div className="globe-ring ring-longitude ring-four" />
          <div className="globe-ring ring-longitude ring-five" />
          <div className="globe-node-glow" />
          {globeNodes.map((node, index) => (
            <span
              key={`${node.left}-${node.top}-${index}`}
              className="globe-node"
              style={{
                left: `${node.left}%`,
                top: `${node.top}%`,
                width: `${node.size}px`,
                height: `${node.size}px`,
                opacity: node.opacity,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="globe-atmosphere" />
      </div>
    </div>
  );
}

export default GlobeScene;
