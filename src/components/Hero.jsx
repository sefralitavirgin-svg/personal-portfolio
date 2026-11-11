import { useEffect, useRef, useState } from "react";

import profileImage from "../assets/images/profile-porto.png";
import globeImageOne from "../assets/images/file_00000000c37881fab14d1dae394e0408.png";
import globeImageTwo from "../assets/images/file_0000000083f081faa81be7561b28ae80.png";
import globeImageThree from "../assets/images/73bffd6e4c5df98fe47eaf15a9389dd9_0.webp";
import GlobeScene from "./GlobeScene";

const profileName = "VIRGIN KAPOROH";

const orbitalItems = [
  { number: "01.", label: "ABOUT", href: "#about", x: 6, y: 20 },
  { number: "02.", label: "PROJECTS", href: "#projects", x: 66, y: 10 },
  { number: "03.", label: "SKILLS", href: "#skills", x: 72, y: 54 },
  { number: "04.", label: "EXPERIENCE", href: "#experience", x: 24, y: 75 },
  { number: "05.", label: "RESUME", href: "#resume", x: 8, y: 58 },
  { number: "06.", label: "CONTACT", href: "#contact", x: 83, y: 32 },
];

const globePhotos = [
  { id: 1, src: globeImageOne, label: "ME", left: 28, top: 18, size: 68 },
  { id: 2, src: globeImageTwo, label: "LIFE", left: 70, top: 58, size: 72 },
  { id: 3, src: globeImageThree, label: "STUDIO", left: 54, top: 30, size: 62 },
  { id: 4, src: profileImage, label: "WORK", left: 42, top: 68, size: 60 },
];

function Hero() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [draggedId, setDraggedId] = useState(null);
  const [photoPositions, setPhotoPositions] = useState(() =>
    globePhotos.map((photo) => ({ id: photo.id, left: photo.left, top: photo.top }))
  );
  const dragStateRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!dragStateRef.current) return;

      const stage = document.querySelector(".globe-stage");
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const nextLeft = ((event.clientX - rect.left) / rect.width) * 100 - dragStateRef.current.offsetX;
      const nextTop = ((event.clientY - rect.top) / rect.height) * 100 - dragStateRef.current.offsetY;

      setPhotoPositions((current) =>
        current.map((photo) =>
          photo.id === dragStateRef.current.id
            ? {
                ...photo,
                left: Math.min(Math.max(nextLeft, 10), 90),
                top: Math.min(Math.max(nextTop, 10), 90),
              }
            : photo
        )
      );
    };

    const handlePointerEnd = () => {
      dragStateRef.current = null;
      setDraggedId(null);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerEnd);
    window.addEventListener("pointercancel", handlePointerEnd);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", handlePointerEnd);
    };
  }, []);

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse" || dragStateRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    setCursor({ x, y });
  };

  const handlePhotoPointerDown = (event, photoId) => {
    const stage = event.currentTarget.closest(".globe-stage");
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const activePhoto = photoPositions.find((photo) => photo.id === photoId);
    if (!activePhoto) return;

    const xInPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yInPercent = ((event.clientY - rect.top) / rect.height) * 100;

    dragStateRef.current = {
      id: photoId,
      offsetX: xInPercent - activePhoto.left,
      offsetY: yInPercent - activePhoto.top,
    };
    setDraggedId(photoId);
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  return (
    <section id="home" className="hero-section" onPointerMove={handlePointerMove} onPointerLeave={() => setCursor({ x: 0, y: 0 })}>
      <div className="max-w-7xl mx-auto w-full h-full">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">● {profileName}</span>

            <h1 className="hero-title">
              Building <span className="accent">Digital Experiences.</span>
            </h1>

            <p className="hero-role">Aspiring Software Developer</p>

            <p className="hero-description">
              Exploring technology, creating solutions, and turning ideas into functional digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button">
                EXPLORE MY DIGITAL UNIVERSE
              </a>
              <a href="#contact" className="hero-button-secondary">
                CONNECT
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="globe-stage"
              style={{
                transform: `perspective(1200px) rotateX(${cursor.y * -10}deg) rotateY(${cursor.x * 18}deg)`,
              }}
            >
              <GlobeScene pointerX={cursor.x} pointerY={cursor.y} />

              <div className="globe-photo-layer" aria-label="Floating portfolio photos">
                {globePhotos.map((photo) => {
                  const position = photoPositions.find((item) => item.id === photo.id) ?? { left: photo.left, top: photo.top };

                  return (
                    <div
                      key={photo.id}
                      className={`globe-photo-node ${draggedId === photo.id ? "is-dragging" : ""}`}
                      style={{
                        left: `${position.left}%`,
                        top: `${position.top}%`,
                        width: `${photo.size}px`,
                        height: `${photo.size}px`,
                      }}
                      onPointerDown={(event) => handlePhotoPointerDown(event, photo.id)}
                    >
                      <img src={photo.src} alt={photo.label} />
                      <span>{photo.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <nav className="orbital-nav" aria-label="Portfolio sections">
              {orbitalItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="orbital-button"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: `translate(${cursor.x * 16}px, ${cursor.y * 18}px)`,
                  }}
                >
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;