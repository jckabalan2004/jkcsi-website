import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import { hero, about, school } from "../data/siteData";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <Photo src={hero.image} label="Hero photo: hero/hero.jpg" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="pill">Private Christian School · Rosario, Agusan del Sur</span>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <div className="btn-row">
            <a href="#enroll" className="btn btn-light">Enroll Now</a>
            <a href="#programs" className="btn btn-outline-light">Explore Programs</a>
          </div>
          <p className="hero-tag">{school.tagline}</p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <Reveal className="about-photo" dir="left">
            <Photo src={about.image} label="About photo: hero/about.jpg" alt="JKCSI students" />
            <div className="about-badge">
              {about.stats.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right">
            <SectionHeading center={false} eyebrow="Welcome" title={about.heading} />
            {about.paragraphs.map((p, i) => <p key={i} className="lead">{p}</p>)}
            <div className="mv-grid">
              <Reveal className="card mv" delay={1}><h3>Our Mission</h3><p>{about.mission}</p></Reveal>
              <Reveal className="card mv" delay={2}><h3>Our Vision</h3><p>{about.vision}</p></Reveal>
            </div>
            <ul className="chips">
              {about.values.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
