import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import favicon from "./assets/favicon.png";

const link = document.querySelector('link[rel="icon"]');
if (link) link.setAttribute("href", favicon);

createRoot(document.getElementById("root")!).render(<App />);
