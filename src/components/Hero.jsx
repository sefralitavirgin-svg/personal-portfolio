import { useEffect, useRef, useState } from "react";
import useLanguage from "../hooks/useLanguage";

import profileImage from "../assets/images/profile-porto.png";
import globeImageOne from "../assets/images/file_00000000c37881fab14d1dae394e0408.png";
import globeImageTwo from "../assets/images/file_0000000083f081faa81be7561b28ae80.png";
import globeImageThree from "../assets/images/73bffd6e4c5df98fe47eaf15a9389dd9_0.webp";
import GlobeScene from "./GlobeScene";

const profileName = "VIRGIN KAPOROH";

const orbitalItems = [
  { number: "01.", key: "about", href: "#about", x: 6, y: 20 },
  { number: "02.", key: "projects", href: "#projects", x: 66, y: 10 },
  { number: "03.", key: "skills", href: "#skills", x: 72, y: 54 },
  { number: "04.", key: "experience", href: "#experience", x: 24, y: 75 },
  { number: "05.", key: "resume", href: "#resume", x: 8, y: 58 },
  { number: "06.", key: "contact", href: "#contact", x: 83, y: 32 },
];

const globePhotos = [
  { id: 1, src: globeImageOne, labelKey: "me", left: 28, top: 18, size: 68 },
  { id: 2, src: globeImageTwo, labelKey: "life", left: 70, top: 58, size: 72 },
  { id: 3, src: globeImageThree, labelKey: "studio", left: 54, top: 30, size: 62 },
  { id: 4, src: profileImage, labelKey: "work", left: 42, top: 68, size: 60 },
];

function Hero() {
  const { t } = useLanguage();
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
            {t.hero.title} <span className="accent">{t.hero.titleAccent}</span>
            </h1>

            <p className="hero-role">{t.hero.role}</p>

            <p className="hero-description">
            {t.hero.description}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button">
                {t.hero.explore}
              </a>
              <a href="#contact" className="hero-button-secondary">
                {t.hero.connect}
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
              <GlobeScene
                pointerX={cursor.x}
                pointerY={cursor.y}
                ariaLabel={t.hero.globe}
              />

              <div className="globe-photo-layer" aria-label={t.hero.floatingPhotos}>
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
                      <img src={photo.src} alt={t.hero.photos[photo.labelKey]} />
                      <span>{t.hero.photos[photo.labelKey]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <nav className="orbital-nav" aria-label={t.hero.portfolioSections}>
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
                  <span>{t.hero.sections[item.key]}</span>
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