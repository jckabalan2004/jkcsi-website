import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import { orgChart } from "../data/siteData";

function Person({ p, size = "" }) {
  return (
    <div className={`person ${size}`}>
      <Photo src={p.image} label="Photo" alt={p.name} className="avatar" />
      <strong>{p.name}</strong>
      <span>{p.role}</span>
    </div>
  );
}

export default function OrgChart() {
  const { administrator, principal, teachers } = orgChart;
  return (
    <section id="team" className="section">
      <div className="container">
        <SectionHeading eyebrow="Our Team" title="Organizational Chart" subtitle="The dedicated people who lead and teach at JKCSI." />
        <div className="org">
          <Reveal className="org-level"><Person p={administrator} size="lg" /></Reveal>
          <div className="org-line" />
          <Reveal className="org-level" delay={2}><Person p={principal} size="lg" /></Reveal>
          <div className="org-line" />
          <div className="org-teachers">
            {teachers.map((t, i) => (
              <Reveal className="org-branch" key={i} delay={i % 4}><Person p={t} /></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
