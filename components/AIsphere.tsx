import React, { useRef, useEffect } from 'react';

const AiSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Sphere parameters
    const radius = Math.min(width, height) * 0.35;
    const dots: { x: number; y: number; z: number }[] = [];
    const numDots = 400;

    // Initialize dots on a sphere
    for (let i = 0; i < numDots; i++) {
      const phi = Math.acos(-1 + (2 * i) / numDots);
      const theta = Math.sqrt(numDots * Math.PI) * phi;

      dots.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      });
    }

    let rotationX = 0;
    let rotationY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate sphere
      rotationX += 0.002;
      rotationY += 0.002;

      const cx = width / 2;
      const cy = height / 2;

      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--tw-bg-opacity') 
        ? '#0ea5e9' // Fallback blue
        : '#0ea5e9'; 
      
      // Check for dark mode via class on html/body to adjust color if needed, 
      // but keeping it 'primary' color (Sky-500) works on both backgrounds usually.
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7'; // Light Sky vs Darker Blue

      dots.forEach((dot) => {
        // Rotation Y
        let x = dot.x * Math.cos(rotationY) - dot.z * Math.sin(rotationY);
        let z = dot.z * Math.cos(rotationY) + dot.x * Math.sin(rotationY);
        
        // Rotation X
        let y = dot.y * Math.cos(rotationX) - z * Math.sin(rotationX);
        z = z * Math.cos(rotationX) + dot.y * Math.sin(rotationX);

        // Projection
        const scale = 300 / (300 + z);
        const x2d = x * scale + cx;
        const y2d = y * scale + cy;

        // Draw dot
        const alpha = Math.max(0.1, (scale - 0.5) * 1.5); // Fade out back dots
        ctx.globalAlpha = alpha;
        
        ctx.beginPath();
        ctx.arc(x2d, y2d, scale * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections (optional, keep it simple for now to emulate "nodes")
        // If we wanted lines, we'd loop again here. keeping it dots-only for "modern clean" look.
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60"
    />
  );
};

export default AiSphere;
