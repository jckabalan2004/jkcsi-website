// Applies the saved/system theme before first paint (external file so a strict CSP can block inline scripts).
try {
  var t = localStorage.getItem("jkcsi-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
} catch (e) {}
