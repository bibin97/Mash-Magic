import { useEffect, useRef } from "react";

export default function PageTransition() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    let timer;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Trigger transition
          overlay.classList.add("show");

          clearTimeout(timer);
          timer = setTimeout(() => {
            overlay.classList.remove("show");
          }, 400); // animation visible for 0.4s

          ticking = false;
        });
        ticking = true;
      }
    };

    // Listen to scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] pointer-events-none transition-transform duration-500 ease-out transform translate-y-full 
                 bg-gradient-to-b from-white via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    ></div>
  );
}
