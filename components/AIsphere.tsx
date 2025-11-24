import React, { useRef, useEffect } from 'react';

const AIsphere: React.FC = () => {
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

      // Hardcoded color to ensure stability
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7'; 

      dots.forEach((dot) => {
        // Rotation Y
        let x = dot.x * Math.cos(rotationY) - dot.z * Math.sin(rotationY);
        let z = dot.z * Math.cos(rotationY) + dot.x * Math.sin(rotationY);
        
        // Rotation X
        let y = dot.y * Math.cos(rotationX) - z * Math.sin(rotationX);
        z = z * Math.cos(rotationX) + dot.y * Math.sin(rotationX);

        // Projection
        // Increase perspective distance to avoid negative scale when dots are close
        const perspective = 400; 
        const scale = perspective / (perspective + z);
        
        const x2d = x * scale + cx;
        const y2d = y * scale + cy;

        // CRITICAL FIX FOR IndexSizeError: Ensure radius is non-negative
        const size = Math.abs(scale * 2);

        // Draw dot
        const alpha = Math.max(0.1, (scale - 0.5) * 1.5);
        ctx.globalAlpha = alpha;
        
        ctx.beginPath();
        // Prevent drawing if size is effectively 0 or infinite
        if (size > 0 && Number.isFinite(size)) {
            ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
            ctx.fill();
        }
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

export default AIsphere;