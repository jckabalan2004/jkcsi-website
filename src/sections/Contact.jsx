import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import { school } from "../data/siteData";

// Only allow plain https links (blocks javascript: or other schemes if the data file is edited wrongly).
const safeUrl = (u) => { try { return new URL(u).protocol === "https:" ? u : ""; } catch { return ""; } };
const facebook = safeUrl(school.facebook);

const mapSrc = "https://www.google.com/maps?q=" + encodeURIComponent(school.location) + "&output=embed";

export default function Contact() {
  const items = [
    { icon: "pin", label: "Location", value: school.location },
    { icon: "mail", label: "Email", value: school.email, href: `mailto:${school.email}` },
    { icon: "phone", label: "Contact Number", value: school.phone, href: `tel:${school.phone.replace(/\s/g, "")}` },
    { icon: "clock", label: "Office Hours", value: school.officeHours },
  ];
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact Us" title="We'd Love to Hear From You" subtitle="Visit us, call, or send a message — we're happy to help." />
        <div className="contact-grid">
          <div className="contact-list">
            {items.map((i, n) => (
              <Reveal className="card contact-item" key={i.label} delay={n} dir="left">
                <span className="reason-icon"><Icon name={i.icon} size={24} /></span>
                <div>
                  <small>{i.label}</small>
                  {i.href ? <a href={i.href}>{i.value}</a> : <p>{i.value}</p>}
                </div>
              </Reveal>
            ))}
            {facebook && (
              <a className="btn btn-primary" href={facebook} target="_blank" rel="noopener noreferrer"><Icon name="facebook" size={18} className="btn-icon" />Follow us on Facebook</a>
            )}
          </div>
          <Reveal className="map" dir="right">
            <iframe sandbox="allow-scripts allow-same-origin" title="JKCSI location map" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
