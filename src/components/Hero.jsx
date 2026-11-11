import { motion } from "framer-motion";
import useLanguage from "../hooks/useLanguage";

import FloatingLeaves from "../components/hero/FloatingLeaves";
import ProfileFrame from "../components/hero/ProfileFrame";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24"
    >
      <FloatingLeaves />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-8">

              🌿

              {t.hero.greeting}

            </span>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight text-slate-900">

              Virgin

              <br />

              R. S.

              <br />

              Kaporoh

            </h1>

            <h2 className="mt-8 text-3xl font-semibold text-green-700">

              {t.hero.title}

            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-9 max-w-xl">

              {t.hero.description}

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="#projects"
                className="
                  rounded-2xl
                  bg-green-600
                  px-8
                  py-4
                  text-white
                  font-semibold
                  shadow-lg
                  hover:bg-green-700
                  transition
                "
              >
                🌱 {t.hero.projectButton}
              </a>

              <a
                href="#contact"
                className="
                  rounded-2xl
                  border-2
                  border-green-600
                  px-8
                  py-4
                  font-semibold
                  text-green-700
                  hover:bg-green-50
                  transition
                "
              >
                🍃 {t.hero.contactButton}
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            className="flex justify-center"
          >

            <ProfileFrame />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;