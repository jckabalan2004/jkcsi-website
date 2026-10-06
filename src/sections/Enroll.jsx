import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import { enroll, school } from "../data/siteData";

export default function Enroll() {
  return (
    <section id="enroll" className="section alt">
      <div className="container">
        <SectionHeading eyebrow="Enroll Today" title={enroll.heading} subtitle={enroll.intro} />
        <div className="grid reasons-grid">
          {enroll.reasons.map((r, i) => (
            <Reveal className="card reason" key={r.title} delay={i % 3}>
              <span className="reason-icon"><Icon name={r.icon} size={24} /></span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="cta" dir="zoom">
          <div className="cta-photo"><Photo src={enroll.image} label="Enroll photo: hero/enroll.jpg" alt="Happy JKCSI students" /></div>
          <div className="cta-body">
            <h3>Ready to join the JKCSI family?</h3>
            <ol className="steps">
              {enroll.steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            <h4>Requirements</h4>
            <ul className="checks">
              {enroll.requirements.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <div className="btn-row">
              <a href={`mailto:${school.email}?subject=Enrollment Inquiry`} className="btn btn-light"><Icon name="mail" size={18} className="btn-icon" />Email Us</a>
              <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="btn btn-outline-light"><Icon name="phone" size={18} className="btn-icon" />Call {school.phone}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
