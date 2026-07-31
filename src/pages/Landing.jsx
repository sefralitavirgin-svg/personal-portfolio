import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-lg text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-3">Virgin.</h1>
        <p className="text-gray-600 mb-8">Software Developer Portfolio</p>
        <h2 className="text-2xl font-semibold mb-2">Welcome 👋</h2>
        <p className="text-gray-500 mb-10">Please choose your preferred language.</p>

        <button
          onClick={() => chooseLanguage("id")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition mb-4"
        >
          🇮🇩 Bahasa Indonesia
        </button>

        <button
          onClick={() => chooseLanguage("en")}
          className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl text-lg font-semibold transition"
        >
          🇺🇸 English
        </button>
      </div>
    </div>
  );
}

export default Landing;