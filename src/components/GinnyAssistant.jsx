import { useCallback, useEffect, useRef, useState } from "react";
import useLanguage from "../hooks/useLanguage";
import { getOwnerReply } from "../data/ownerKnowledge";
import {
  FaCommentDots,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPaperPlane,
  FaRobot,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const navigationItemIds = [
  "home",
  "about",
  "projects",
  "skills",
  "experience",
  "education",
  "resume",
  "contact",
];

const sectionKeywords = {
  home: ["home", "beranda", "hero"],
  about: ["about", "tentang", "story"],
  projects: ["project", "proyek", "portfolio"],
  skills: ["skill", "keahlian", "technology", "technologies"],
  experience: ["experience", "pengalaman", "work"],
  education: ["education", "pendidikan"],
  resume: ["resume", "cv"],
  contact: ["contact", "kontak", "email", "hubungi"],
};

function getAssistantReply(message, language, translations) {
  const normalized = message.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ");
  const navigateIntent = /\b(go to|take me to|navigate to|open|show me|buka|pindah ke|ke bagian)\b/.test(normalized);
  const navigationItems = navigationItemIds.map((id, index) => ({
    id,
    label: translations[id],
    number: String(index).padStart(2, "0"),
  }));

  if (navigateIntent) {
    const target = navigationItems.find((item) =>
      sectionKeywords[item.id].some((keyword) => normalized.includes(keyword))
    );

    if (target) {
      return {
        text:
          language === "id"
            ? `${translations.takingYou} ${target.label}${translations.section}`
            : `${translations.takingYou} ${target.label} ${translations.section}`,
        sectionId: target.id,
      };
    }
  }

  if (/\b(hi|hello|hey|halo|hai)\b/.test(normalized)) {
    return {
      text:
        language === "id"
          ? "Hai! Saya Ginny. Tanyakan tentang proyek, keahlian, pengalaman, atau kontak Virgin."
          : "Hey! I’m Ginny. Ask me about Virgin’s projects, skills, experience, or contact details.",
    };
  }

  const ownerKnowledgeReply = getOwnerReply(message, language);
  const isOwnerQuestion = [
    "virgin", "who", "siapa", "education", "pendidikan", "student", "mahasiswa",
    "skill", "keahlian", "technology", "teknologi", "career", "karier",
    "canada", "korea", "kpop", "engene", "enhypen", "cherys", "write",
    "tulis", "story", "cerita", "project", "proyek", "thai", "aesthetic",
    "estetika", "ai", "machine learning", "contact", "kontak", "email",
  ].some((keyword) => normalized.includes(keyword));

  if (isOwnerQuestion) {
    const matchesNavigation = /\b(project|proyek|skill|keahlian|education|pendidikan|contact|kontak)\b/.test(normalized);
    return {
      text: ownerKnowledgeReply,
      sectionId: matchesNavigation
        ? normalized.includes("project") || normalized.includes("proyek")
          ? "projects"
          : normalized.includes("skill") || normalized.includes("keahlian")
            ? "skills"
            : normalized.includes("education") || normalized.includes("pendidikan")
              ? "education"
              : normalized.includes("contact") || normalized.includes("kontak")
                ? "contact"
                : undefined
        : undefined,
    };
  }

  if (/\b(project|proyek|portfolio)\b/.test(normalized)) {
    return {
      text: translations.replyProjects,
      sectionId: "projects",
    };
  }

  if (/\b(skill|keahlian|technology|technologies|tech stack)\b/.test(normalized)) {
    return {
      text: translations.replySkills,
      sectionId: "skills",
    };
  }

  if (/\b(experience|pengalaman|job|work history)\b/.test(normalized)) {
    return {
      text: translations.replyExperience,
      sectionId: "experience",
    };
  }

  if (/\b(education|pendidikan|study|student|kuliah)\b/.test(normalized)) {
    return {
      text: translations.replyEducation,
      sectionId: "education",
    };
  }

  if (/\b(contact|kontak|email|reach|hubungi)\b/.test(normalized)) {
    return {
      text: translations.replyContact,
      sectionId: "contact",
    };
  }

  if (/\b(resume|cv)\b/.test(normalized)) {
    return {
      text: translations.replyResume,
      sectionId: "resume",
    };
  }

  if (/\b(who|about|tentang|virgin|name)\b/.test(normalized)) {
    return {
      text: translations.replyAbout,
      sectionId: "about",
    };
  }

  return {
    text: translations.replyDefault,
  };
}

function GinnyAssistant() {
  const { language, t } = useLanguage();
  const assistantText = t.assistant;
  const navigationItems = navigationItemIds.map((id, index) => ({
    id,
    label: assistantText[id],
    number: String(index).padStart(2, "0"),
  }));
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 0,
      role: "assistant",
      text: assistantText.greeting,
    },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("");
  const [voiceReplies, setVoiceReplies] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const restartTimerRef = useRef(null);
  const isListeningRef = useRef(false);
  const isAwakeRef = useRef(false);
  const voiceRepliesRef = useRef(true);
  const nextMessageIdRef = useRef(1);

  const stopListening = useCallback(() => {
    isListeningRef.current = false;
    isAwakeRef.current = false;
    window.clearTimeout(restartTimerRef.current);
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    setIsListening(false);
    setIsAwake(false);
    setVoiceStatus(assistantText.voiceOff);
  }, [assistantText.voiceOff]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        stopListening();
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, stopListening]);

  useEffect(
    () => () => {
      window.clearTimeout(restartTimerRef.current);
      recognitionRef.current?.stop();
      window.speechSynthesis?.cancel();
    },
    []
  );

  const appendMessage = (role, text) => {
    setMessages((current) => [
      ...current,
      { id: nextMessageIdRef.current++, role, text },
    ]);
  };

  const speak = (text) => {
    if (!voiceRepliesRef.current || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "id" ? "id-ID" : "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleUserMessage = (rawMessage, source = "text") => {
    const message = rawMessage.trim();
    if (!message) return;

    appendMessage("user", message);
    const reply = getAssistantReply(message, language, assistantText);
    appendMessage("assistant", reply.text);

    if (reply.sectionId) {
      window.setTimeout(() => {
        document.getElementById(reply.sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    if (source === "voice") speak(reply.text);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceStatus(assistantText.unsupported);
      return;
    }

    if (!window.isSecureContext) {
      setVoiceStatus(assistantText.secure);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === "id" ? "id-ID" : "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;
    recognitionRef.current = recognition;
    isListeningRef.current = true;
    isAwakeRef.current = false;
    setIsListening(true);
    setIsAwake(false);
    setVoiceStatus(assistantText.listening);

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim();
      const normalized = transcript.toLowerCase();
      const wakePhrase = /ginny.{0,24}(wake\s?up|bangun)|wake\s?up.{0,24}ginny|ginny\s+bangun/i;

      if (!isAwakeRef.current) {
        const wakeMatch = normalized.match(wakePhrase);
        if (!wakeMatch) return;

        isAwakeRef.current = true;
        setIsAwake(true);
        const request = normalized
          .replace(wakePhrase, "")
          .replace(/[^\p{L}\p{N}\s]/gu, " ")
          .trim();
        if (request) {
          handleUserMessage(request, "voice");
          isAwakeRef.current = false;
          setIsAwake(false);
          setVoiceStatus(assistantText.listening);
        } else {
          const greeting = assistantText.awakened;
          appendMessage("assistant", greeting);
          setVoiceStatus(assistantText.awakeStatus);
          speak(greeting);
        }
        return;
      }

      if (/\b(sleep|go to sleep|stop listening|tidur|berhenti mendengarkan)\b/.test(normalized)) {
        isAwakeRef.current = false;
        setIsAwake(false);
        setVoiceStatus(assistantText.listening);
        return;
      }

      handleUserMessage(transcript, "voice");
      isAwakeRef.current = false;
      setIsAwake(false);
      setVoiceStatus(assistantText.listening);
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        isListeningRef.current = false;
        setIsListening(false);
        setVoiceStatus(assistantText.micDenied);
      } else if (event.error !== "no-speech" && event.error !== "aborted") {
        isListeningRef.current = false;
        setIsListening(false);
        setVoiceStatus(
          language === "id"
            ? `Kesalahan pengenalan suara: ${event.error}. Anda tetap bisa mengobrol dengan mengetik.`
            : `Voice recognition error: ${event.error}. You can still chat by typing.`
        );
      }
    };

    recognition.onend = () => {
      if (!isListeningRef.current) return;

      restartTimerRef.current = window.setTimeout(() => {
        if (!isListeningRef.current) return;
        try {
          recognition.start();
        } catch (error) {
          if (error.name !== "InvalidStateError") {
            isListeningRef.current = false;
            setIsListening(false);
            setVoiceStatus(assistantText.tryAgain);
          }
        }
      }, 250);
    };

    try {
      recognition.start();
    } catch (error) {
      isListeningRef.current = false;
      setIsListening(false);
      setVoiceStatus(
        assistantText.voiceStartError.replace("{message}", error.message)
      );
    }
  };

  const closeAssistant = () => {
    if (isListeningRef.current) stopListening();
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserMessage(input);
    setInput("");
  };

  const handleVoiceRepliesChange = (event) => {
    const enabled = event.target.checked;
    voiceRepliesRef.current = enabled;
    setVoiceReplies(enabled);
    if (!enabled) window.speechSynthesis?.cancel();
  };

  return (
    <>
      <button
        type="button"
        className={`ginny-launcher ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label={assistantText.open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes aria-hidden="true" /> : <FaCommentDots aria-hidden="true" />}
        <span>GINNY AI</span>
      </button>

      {isOpen && (
        <div className="ginny-overlay" onMouseDown={closeAssistant}>
          <section
            className="ginny-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ginny-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="ginny-header">
              <div className="ginny-brand">
                <span className="ginny-avatar"><FaRobot aria-hidden="true" /></span>
                <div>
                  <h2 id="ginny-title">GINNY AI</h2>
                  <p><span className="ginny-online-dot" /> {assistantText.guide}</p>
                </div>
              </div>
              <button type="button" className="ginny-close" onClick={closeAssistant} aria-label={assistantText.close}>
                <FaTimes aria-hidden="true" />
              </button>
            </header>

            <aside className="ginny-sidebar" aria-label={assistantText.navigation}>
            <p className="ginny-sidebar-label">{assistantText.explore}</p>
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeAssistant}
                  className="ginny-nav-link"
                >
                  <span>{item.number}</span>
                  {item.label}
                </a>
              ))}
              <div className="ginny-sidebar-hint">
                <FaMicrophone aria-hidden="true" />
                <p>{assistantText.wakeHint} <strong>“Ginny, {language === "id" ? "bangun" : "wake up"}!”</strong> {assistantText.wakeHintEnd}</p>
              </div>
            </aside>

            <div className="ginny-chat">
              <div className="ginny-messages" aria-live="polite" aria-relevant="additions">
                {messages.map((message) => (
                  <div key={message.id} className={`ginny-message ${message.role}`}>
                    {message.role === "assistant" && <span className="ginny-message-avatar"><FaRobot aria-hidden="true" /></span>}
                    <p>{message.id === 0 ? assistantText.greeting : message.text}</p>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="ginny-chat-controls">
                <div className="ginny-quick-prompts">
                  {assistantText.quickPrompts.map((prompt) => (
                    <button key={prompt} type="button" onClick={() => handleUserMessage(prompt)}>
                      {prompt}
                    </button>
                  ))}
                </div>

                <form className="ginny-composer" onSubmit={handleSubmit}>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder={assistantText.placeholder}
                    aria-label={assistantText.message}
                  />
                  <button type="submit" disabled={!input.trim()} aria-label={assistantText.send}>
                    <FaPaperPlane aria-hidden="true" />
                  </button>
                </form>

                <div className="ginny-voice-row">
                  <button
                    type="button"
                    className={`ginny-mic-button ${isListening ? "active" : ""}`}
                    onClick={isListening ? stopListening : startListening}
                    aria-label={isAwake ? assistantText.awake : assistantText.toggleVoice}
                  >
                    {isListening ? <FaMicrophoneSlash aria-hidden="true" /> : <FaMicrophone aria-hidden="true" />}
                    {isListening ? assistantText.turnMicOff : assistantText.enableVoice}
                  </button>
                  <label className="ginny-voice-replies">
                    <input type="checkbox" checked={voiceReplies} onChange={handleVoiceRepliesChange} />
                    {voiceReplies ? <FaVolumeUp aria-hidden="true" /> : <FaVolumeMute aria-hidden="true" />}
                    {assistantText.voiceReplies}
                  </label>
                </div>
                {voiceStatus && <p className="ginny-voice-status" role="status">{voiceStatus}</p>}
                <p className="ginny-disclaimer">{assistantText.disclaimer}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default GinnyAssistant;
