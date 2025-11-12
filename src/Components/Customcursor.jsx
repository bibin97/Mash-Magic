import { useEffect, useState, useRef } from "react";

const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

export default function CustomCursor() {
  const [visible, setVisible] = useState(!isTouchDevice());
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const position = useRef({
    current: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    target: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  });

  useEffect(() => {
    if (!visible) return;

    const handleMouseMove = (e) => {
      position.current.target.x = e.clientX;
      position.current.target.y = e.clientY;
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleDocLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };
    const handleDocEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleDocLeave);
    document.addEventListener("mouseenter", handleDocEnter);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, .interactive"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    let animationFrameId;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      position.current.current.x = lerp(
        position.current.current.x,
        position.current.target.x,
        0.15
      );

      position.current.current.y = lerp(
        position.current.current.y,
        position.current.target.y,
        0.15
      );

      const x = position.current.current.x;
      const y = position.current.current.y;

      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleDocLeave);
      document.removeEventListener("mouseenter", handleDocEnter);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        body, * {
          cursor: none !important;
        }

        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 99999;
          mix-blend-mode: difference;
        }

        .cursor-ring {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid rgba(50, 184, 198, 0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          box-shadow: 0 0 20px rgba(50, 184, 198, 0.3);
        }

        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(50, 184, 198, 1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.2s ease;
          box-shadow: 0 0 15px rgba(50, 184, 198, 0.6);
        }

        .cursor-hover .cursor-ring {
          width: 60px;
          height: 60px;
          border-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
        }

        .cursor-hover .cursor-dot {
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.9);
        }

        .cursor-click .cursor-ring {
          width: 30px;
          height: 30px;
        }

        .cursor-click .cursor-dot {
          width: 12px;
          height: 12px;
        }

        @media (hover: none) and (pointer: coarse) {
          body, * {
            cursor: auto !important;
          }
          .custom-cursor {
            display: none;
          }
        }
      `}</style>

      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "cursor-hover" : ""} ${
          isClicking ? "cursor-click" : ""
        }`}
      >
        <div ref={ringRef} className="cursor-ring"></div>
        <div ref={dotRef} className="cursor-dot"></div>
      </div>
    </>
  );
}
