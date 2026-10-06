import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import { programs } from "../data/siteData";

export default function Programs() {
  return (
    <section id="programs" className="section alt">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Nursery 1 to Grade 5"
          subtitle="A complete early-years and elementary program, taught in a loving Christian environment."
        />
        <div className="grid programs-grid">
          {programs.map((p, i) => (
            <Reveal as="article" key={p.id} className="card program" delay={i % 4}>
              <Photo src={p.image} label={`${p.level} photo`} alt={`${p.level} class`} />
              <div className="card-body">
                <span className="tag">{p.age}</span>
                <h3>{p.level}</h3>
                <p>{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
