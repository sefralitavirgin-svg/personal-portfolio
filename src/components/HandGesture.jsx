
import { useEffect, useRef, useState } from "react";
import {
  FilesetResolver,
  GestureRecognizer,
} from "@mediapipe/tasks-vision";

import resume from "../assets/resume/Virgin_Kaporoh_Updated_CV.pdf";

export default function HandGesture({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const recognizerRef = useRef(null);
  const streamRef = useRef(null);
  const animationRef = useRef(null);

  const lastDetectionRef = useRef(0);
  const lastActionRef = useRef(0);
  const lastGestureRef = useRef("");
  const candidateRef = useRef("");
  const stableCountRef = useRef(0);

  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gesture, setGesture] = useState("Waiting...");
  const [error, setError] = useState("");

  // ==============================
  // DETECT FINGER GESTURES
  // ==============================

  function detectFingerGesture(landmarks) {
    if (!landmarks || landmarks.length < 21) return "";

    const wrist = landmarks[0];
    const thumbTip = landmarks[4];
    const indexMCP = landmarks[5];
    const indexTip = landmarks[8];

    const palmSize = Math.hypot(
      landmarks[9].x - wrist.x,
      landmarks[9].y - wrist.y
    );

    if (palmSize === 0) return "";

    // Finger detection
    const indexOpen = landmarks[8].y < landmarks[6].y;
    const middleOpen = landmarks[12].y < landmarks[10].y;
    const ringOpen = landmarks[16].y < landmarks[14].y;
    const pinkyOpen = landmarks[20].y < landmarks[18].y;

    const extendedCount = [
      indexOpen,
      middleOpen,
      ringOpen,
      pinkyOpen,
    ].filter(Boolean).length;

    // Thumb detection
    const thumbDistance = Math.hypot(
      thumbTip.x - indexMCP.x,
      thumbTip.y - indexMCP.y
    );

    const thumbOpen = thumbDistance > palmSize * 0.45;

    // OK sign detection
    const okDistance = Math.hypot(
      thumbTip.x - indexTip.x,
      thumbTip.y - indexTip.y
    );

    const isOK =
      okDistance < palmSize * 0.22 &&
      middleOpen &&
      ringOpen &&
      pinkyOpen;

    if (isOK) return "OK_SIGN";

    const totalFingers =
      extendedCount + (thumbOpen ? 1 : 0);

    if (totalFingers === 1 && indexOpen) {
      return "ABOUT";
    }

    if (
      totalFingers === 2 &&
      indexOpen &&
      middleOpen
    ) {
      return "PROJECTS";
    }

    if (
      totalFingers === 3 &&
      indexOpen &&
      middleOpen &&
      ringOpen
    ) {
      return "SKILLS";
    }

    if (totalFingers === 4 && extendedCount === 4) {
      return "EXPERIENCE";
    }

    if (totalFingers === 5 && extendedCount === 4) {
      return "CONTACT";
    }

    return "";
  }

  // ==============================
  // EXECUTE GESTURE
  // ==============================

  function executeGesture(action) {
    const sections = {
      ABOUT: "#about",
      PROJECTS: "#projects",
      SKILLS: "#skills",
      EXPERIENCE: "#experience",
      CONTACT: "#contact",
    };

    // Download CV
    if (action === "OK_SIGN") {
      const link = document.createElement("a");

      link.href = resume;
      link.download = "Virgin_R_S_Kaporoh_CV.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      return;
    }

    // Navigate to section
    const target = document.querySelector(sections[action]);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(
        `Section ${sections[action]} tidak ditemukan.`
      );
    }
  }

  // ==============================
  // START CAMERA
  // ==============================

  async function startControl() {
    try {
      setLoading(true);
      setError("");

      if (!recognizerRef.current) {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        recognizerRef.current =
          await GestureRecognizer.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
              delegate: "GPU",
            },
            runningMode: "VIDEO",
            numHands: 1,
          });
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 320 },
          height: { ideal: 240 },
          frameRate: { ideal: 24, max: 30 },
        },
      });

      streamRef.current = stream;
      videoRef.current.srcObject = stream;

      await videoRef.current.play();

      setEnabled(true);
      setLoading(false);

      lastDetectionRef.current = 0;
      lastGestureRef.current = "";
      candidateRef.current = "";
      stableCountRef.current = 0;

      animationRef.current = requestAnimationFrame(detect);
    } catch (err) {
      console.error("Hand Gesture Error:", err);

      setError(err.message || "Camera gagal diaktifkan.");
      setLoading(false);
    }
  }

  // ==============================
  // DETECTION LOOP
  // ==============================

  function detect(now) {
    if (!videoRef.current || !recognizerRef.current) return;

    if (
      videoRef.current.readyState >= 2 &&
      now - lastDetectionRef.current >= 100
    ) {
      lastDetectionRef.current = now;

      try {
        const results = recognizerRef.current.recognizeForVideo(
          videoRef.current,
          now
        );

        const landmarks = results.landmarks?.[0];
        const detected = detectFingerGesture(landmarks);

        // Stabilize gesture
        if (detected === candidateRef.current) {
          stableCountRef.current++;
        } else {
          candidateRef.current = detected;
          stableCountRef.current = 1;
        }

        // Require 3 consecutive detections
        if (stableCountRef.current >= 3) {
          if (detected !== lastGestureRef.current) {
            lastGestureRef.current = detected;

            setGesture(detected || "No gesture detected");

            if (
              detected &&
              now - lastActionRef.current > 1500
            ) {
              executeGesture(detected);
              lastActionRef.current = now;
            }
          }
        }
      } catch (err) {
        console.error("Detection Error:", err);
      }
    }

    animationRef.current = requestAnimationFrame(detect);
  }

  // ==============================
  // STOP CAMERA
  // ==============================

  function stopControl() {
    cancelAnimationFrame(animationRef.current);

    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    lastGestureRef.current = "";
    candidateRef.current = "";
    stableCountRef.current = 0;

    setEnabled(false);
    setGesture("Waiting...");
  }

  // ==============================
  // CLEANUP
  // ==============================

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRef.current);

      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });

      recognizerRef.current?.close();
      recognizerRef.current = null;
    };
  }, []);

  if (!isOpen) return null;

  // ==============================
  // UI
  // ==============================

  const gestureNames = {
    ABOUT: "☝️ About",
    PROJECTS: "✌️ Projects",
    SKILLS: "🤟 Skills",
    EXPERIENCE: "🖖 Experience",
    CONTACT: "🖐️ Contact",
    OK_SIGN: "👌 Download CV",
  };

  return (
    <aside className="hand-nav-panel" role="dialog" aria-modal="false" aria-labelledby="hand-nav-title">
      <div className="hand-nav-heading">
        <h3 id="hand-nav-title">✋ Hand Navigation</h3>
        <button type="button" className="hand-nav-close" onClick={onClose} aria-label="Close hand navigation">
          ×
        </button>
      </div>

      <button
        onClick={enabled ? stopControl : startControl}
        disabled={loading}
        className={`hand-nav-toggle ${enabled ? "active" : ""}`}
      >
        {loading
          ? "Loading..."
          : enabled
          ? "Disable Hand Control"
          : "Enable Hand Control"}
      </button>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`hand-nav-video ${enabled ? "visible" : ""}`}
      />

      <p className="hand-nav-status">
        Status: {enabled ? "🟢 Active" : "⚪ Inactive"}
      </p>

      <p className="hand-nav-gesture">
        Gesture: {gestureNames[gesture] || gesture}
      </p>

      <div className="hand-nav-shortcuts">
        <span>☝️ About</span>
        <span>✌️ Projects</span>
        <span>🤟 Skills</span>
        <span>🖖 Experience</span>
        <span>🖐️ Contact</span>
        <span>👌 Download CV</span>
      </div>

      {error && (
        <p className="hand-nav-error" role="alert">{error}</p>
      )}
    </aside>
  );
}
