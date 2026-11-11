function About() {
  const focusAreas = [
    {
      title: "Software Development",
      text: "Designing practical solutions and building user-centered digital products.",
    },
    {
      title: "Web Development",
      text: "Crafting responsive interfaces and modern web experiences with attention to detail.",
    },
    {
      title: "Technology",
      text: "Exploring tools, frameworks, and systems that improve how products work and feel.",
    },
    {
      title: "Problem Solving",
      text: "Turning ideas into functional experiences through learning, iteration, and iteration.",
    },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● About</span>
          <h2 className="section-title">My Story</h2>
          <p className="lead-copy">
            Hello, I&apos;m Virgin, an Informatics student passionate about technology, web development, and building practical digital solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-name">VIRGIN KAPOROH</h3>
            <p className="about-copy">
              I am a student who enjoys exploring technology, sharpening my software skills, and creating digital experiences that are both useful and engaging. I care about clean interfaces, problem-solving, and continuous learning as I grow toward becoming a stronger developer.
            </p>

            <div className="about-focus">
              {focusAreas.map((item) => (
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