import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import { posts } from "../data/siteData";

const fmt = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" });

export default function News() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const types = ["All", ...new Set(posts.map((p) => p.type))];
  const list = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((p) => filter === "All" || p.type === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="news" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="News & Events"
          title="What's Happening at JKCSI"
          subtitle="Announcements, school events, and articles for our school community."
        />
        <div className="filters">
          {types.map((t) => (
            <button key={t} className={`filter ${filter === t ? "on" : ""}`} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        <div className="grid news-grid">
          {list.map((p, i) => (
            <Reveal as="article" key={`${filter}-${p.id}`} delay={i % 3} className="card news-card" onClick={() => setActive(p)} tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActive(p)}>
              <Photo src={p.image} label="News photo" alt={p.title} />
              <div className="card-body">
                <div className="meta"><span className={`tag t-${p.type.toLowerCase()}`}>{p.type}</span><time>{fmt(p.date)}</time></div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="more">Read more <Icon name="arrow" size={16} /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={active.title}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close"><Icon name="close" size={20} /></button>
            <Photo src={active.image} label="News photo" alt={active.title} />
            <div className="modal-body">
              <div className="meta"><span className={`tag t-${active.type.toLowerCase()}`}>{active.type}</span><time>{fmt(active.date)}</time></div>
              <h3>{active.title}</h3>
              {active.body.split(/\n\s*\n/).map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
