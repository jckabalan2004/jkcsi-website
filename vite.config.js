import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Content-Security-Policy. Added only to production builds (dev server needs inline scripts for hot reload).
// Keep in sync with public/_headers, vercel.json and public/.htaccess.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  "style-src-attr 'unsafe-inline'",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data: https:",
  "frame-src https://www.google.com",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const cspPlugin = () => ({
  name: "inject-csp",
  apply: "build",
  transformIndexHtml: (html) =>
    html.replace("<head>", `<head>\n    <meta http-equiv="Content-Security-Policy" content="${csp}" />`),
});

export default defineConfig({ plugins: [react(), cspPlugin()] });
