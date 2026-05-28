import { useEffect, useRef } from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

interface Blob {
  x: string;
  y: string;
}

const ConnectingLines = () => {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollY } = useViewportScroll();

  const blobs: Blob[] = [
    { x: "10%", y: "10%" },
    { x: "70%", y: "20%" },
    { x: "80%", y: "70%" },
    { x: "20%", y: "80%" },
    { x: "50%", y: "50%" },
    { x: "30%", y: "40%" },
  ];

  useEffect(() => {
    const updateSVG = () => {
      if (!svgRef.current) return;

      const svg = svgRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      const lines = svg.querySelectorAll("line");
      lines.forEach((line) => line.remove());

      const positions = blobs.map((blob) => ({
        x: parseFloat(blob.x) * width / 100,
        y: parseFloat(blob.y) * height / 100,
      }));

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[j].x - positions[i].x;
          const dy = positions[j].y - positions[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 400) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", String(positions[i].x));
            line.setAttribute("y1", String(positions[i].y));
            line.setAttribute("x2", String(positions[j].x));
            line.setAttribute("y2", String(positions[j].y));

            const opacity = (1 - distance / 400) * 0.5;
            if (theme === "cyberpunk") {
              line.setAttribute("stroke", `rgba(0, 255, 255, ${opacity})`);
              line.setAttribute("filter", "drop-shadow(0 0 8px rgba(0, 255, 255, 0.4))");
            } else if (theme === "dark") {
              line.setAttribute("stroke", `rgba(59, 130, 246, ${opacity})`);
            } else {
              line.setAttribute("stroke", `rgba(147, 51, 234, ${opacity})`);
            }

            line.setAttribute("stroke-width", "1.5");
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
          }
        }
      }
    };

    window.addEventListener("resize", updateSVG);
    updateSVG();

    return () => window.removeEventListener("resize", updateSVG);
  }, [theme]);

  const parallaxY = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <motion.svg
      ref={svgRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        y: parallaxY,
      }}
    />
  );
};

export default ConnectingLines;
