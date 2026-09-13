import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "lenis/dist/lenis.css";
// Self-hosted fonts: avoids the extra cross-origin round-trip (and render
// blocking) that the previous Google Fonts `@import` in index.css added.
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
