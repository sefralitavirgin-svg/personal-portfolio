import useLanguage from "../hooks/useLanguage";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">{t.about.kicker}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="lead-copy">{t.about.intro}</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-name">{t.about.name}</h3>
            <p className="about-copy">{t.about.description}</p>

            <div className="about-focus">
              {t.about.focusAreas.map((item) => (
                <div key={item.title} className="focus-item">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;