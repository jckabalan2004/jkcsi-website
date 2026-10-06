import { useEffect, useRef, useState } from "react";

// Fades/slides its element in when scrolled into view.
// <Reveal as="article" className="card" delay={2} dir="up|left|right|zoom">
export default function Reveal({ as: Tag = "div", className = "", delay = 0, dir = "up", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${dir} ${shown ? "in" : ""} ${className}`}
      style={{ "--d": `${delay * 90}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
