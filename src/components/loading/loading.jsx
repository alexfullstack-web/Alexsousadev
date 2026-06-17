import { useState, useEffect } from "react";
import "./Loading.css";

export default function Loading({ duration = 2000 }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, duration + 1600); // tempo do fade + 600ms pra animação terminar

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`loading ${fadeOut ? "loading--hidden" : ""}`}>
      <div className="spinner"></div>
      <h1 className="title-loading">Carregando...</h1>
    </div>
  );
}