import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Programs from "./sections/Programs";
import News from "./sections/News";
import Gallery from "./sections/Gallery";
import OrgChart from "./sections/OrgChart";
import Enroll from "./sections/Enroll";
import Contact from "./sections/Contact";
import { school } from "./data/siteData";

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("jkcsi-theme", theme); } catch {}
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Programs />
        <News />
        <Gallery />
        <OrgChart />
        <Enroll />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {school.fullName}. All rights reserved.</p>
          <p>{school.location}</p>
        </div>
      </footer>
    </>
  );
}
