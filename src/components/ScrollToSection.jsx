import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.slice(1) || "home";
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}
