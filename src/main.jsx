import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function setupScrollReveal() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const selectors = [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "li", "blockquote", "figcaption", "label"
  ].join(",");

  const all = Array.from(document.querySelectorAll(selectors));
  all.forEach((el, index) => {
    if (!el.classList.contains("sr-init") && !el.classList.contains("sr-show")) {
      el.classList.add("sr-init");
      el.style.transitionDelay = `${Math.min(index * 20, 300)}ms`;
    }
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sr-show");
      } else {
        entry.target.classList.remove("sr-show");
      }
    });
  }, { threshold: 0.15 });

  all.forEach((el) => io.observe(el));

  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        const targets = node.matches?.(selectors) ? [node] : Array.from(node.querySelectorAll?.(selectors) || []);
        targets.forEach((el) => {
          if (!el.classList.contains("sr-init") && !el.classList.contains("sr-show")) {
            el.classList.add("sr-init");
          }
          io.observe(el);
        });
      });
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

setupScrollReveal();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
