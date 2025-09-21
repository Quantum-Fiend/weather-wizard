"use client";
import React, { useEffect } from "react";

export default function AnimatedSky() {
  useEffect(() => {
    // Create stars dynamically
    const starCount = 100;
    const container = document.getElementById("star-container");
    if (!container) return;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2 + 1; // between 1px and 3px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      const dur = Math.random() * 5 + 5; // 5s to 10s
      star.style.animation = `twinkle ${dur}s infinite ease-in-out`;
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      <div id="star-container" className="absolute inset-0"></div>

      {/* Moon */}
      <div
        className="absolute top-10 left-[-20%] w-32 h-32 bg-yellow-200 rounded-full shadow-lg filter blur-sm opacity-0
        animate-moon-move"
      ></div>

      {/* Clouds — multiple layers */}
      <div className="absolute bottom-0 w-full h-1/3 overflow-hidden">
        <div
          className="absolute bottom-10 w-[200%] h-32 bg-white/30 rounded-full blur-md
          animate-cloud-move-slow"
        ></div>
        <div
          className="absolute bottom-20 w-[200%] h-48 bg-white/20 rounded-full blur-lg
          animate-cloud-move-fast"
        ></div>
      </div>
    </div>
  );
}
