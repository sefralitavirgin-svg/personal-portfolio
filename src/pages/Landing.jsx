import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useLanguage from "../hooks/useLanguage";
import NatureBackground from "../components/nature/NatureBackground";

function Landing() {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
      navigate("/dashboard");
    }
  }, [navigate, setLanguage]);

  const chooseLanguage = (language) => {
    localStorage.setItem("language", language);
    setLanguage(language);
    navigate("/dashboard");
  };

  return (
    <>
      <NatureBackground />

      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="glass w-full max-w-lg rounded-3xl p-10 text-center">

          <h1 className="mb-3 text-5xl font-bold text-green-700">
            Virgin.
          </h1>

          <p className="mb-8 text-slate-600">
            Software Developer Portfolio
          </p>

          <h2 className="mb-2 text-2xl font-semibold">
            Welcome 👋
          </h2>

          <p className="mb-10 text-slate-500">
            Please choose your preferred language.
          </p>

          <button
            onClick={() => chooseLanguage("id")}
            className="
              mb-4
              w-full
              rounded-xl
              bg-green-600
              py-3
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            🇮🇩 Bahasa Indonesia
          </button>

          <button
            onClick={() => chooseLanguage("en")}
            className="
              w-full
              rounded-xl
              border
              border-green-600
              py-3
              text-lg
              font-semibold
              text-green-700
              transition
              hover:bg-green-50
            "
          >
            🇺🇸 English
          </button>

        </div>

      </div>
    </>
  );
}

export default Landing;