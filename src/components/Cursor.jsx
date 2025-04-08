import React, { useEffect, useRef, useState } from "react";
import "../css/cursor.css";

export default function Cursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const speed = 0.35;
      cursorPosition.current.x +=
        (mousePosition.current.x - cursorPosition.current.x) * speed;
      cursorPosition.current.y +=
        (mousePosition.current.y - cursorPosition.current.y) * speed;

      const { x, y } = cursorPosition.current;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleClick = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 400);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", handleClick);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return <div ref={cursorRef} className="cursor" />;
}
