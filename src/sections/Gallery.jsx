import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import { gallery } from "../data/siteData";

export default function Gallery() {
  const [idx, setIdx] = useState(null);
  const n = gallery.length;

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + n) % n);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx === null, n]);

  return (
    <section id="gallery" className="section alt">
      <div className="container">
        <SectionHeading eyebrow="School Gallery" title="Life at JKCSI" subtitle="Moments of learning, faith, and fun." />
        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <Reveal as="button" key={i} delay={i % 3} dir="zoom" className="gallery-item" onClick={() => setIdx(i)} aria-label={`Open ${g.caption}`}>
              <Photo src={g.image} label={g.caption} alt={g.caption} />
              <span className="gallery-cap">{g.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div className="modal lightbox" onClick={() => setIdx(null)} role="dialog" aria-modal="true">
          <button className="modal-close" onClick={() => setIdx(null)} aria-label="Close"><Icon name="close" size={20} /></button>
          <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + n) % n); }} aria-label="Previous"><Icon name="left" size={26} /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Photo src={gallery[idx].image} label={gallery[idx].caption} alt={gallery[idx].caption} />
            <figcaption>{gallery[idx].caption} · {idx + 1}/{n}</figcaption>
          </figure>
          <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % n); }} aria-label="Next"><Icon name="right" size={26} /></button>
        </div>
      )}
    </section>
  );
}
