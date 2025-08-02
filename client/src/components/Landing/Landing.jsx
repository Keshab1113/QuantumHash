import { useEffect, useRef } from 'react';
import {Link} from "react-router-dom";

const Landing = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const gridCanvasRef = useRef(null);

  // Grid animation
  useEffect(() => {
    const canvas = gridCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let frameCount = 0;
    const gridSize = 40;
    const lineWidth = 1;
    const speed = 0.5;

    const drawGrid = () => {
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = lineWidth;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + (frameCount * speed) % gridSize, 0);
        ctx.lineTo(x + (frameCount * speed) % gridSize, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + (frameCount * speed) % gridSize);
        ctx.lineTo(width, y + (frameCount * speed) % gridSize);
        ctx.stroke();
      }

      frameCount++;
      animationRef.current = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#17042b]">
      {/* Moving Grid Background */}
      <canvas 
        ref={gridCanvasRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-50"
      />

      {/* QuantumHash Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* <h1 className="text-5xl md:text-7xl font-bold mb-2">
          QuantumHash <span className="text-3xl md:text-4xl block md:inline">CORPORATION</span>
        </h1> */}
        
        <p className="max-w-4xl 2xl:max-w-6xl mx-auto text-xl md:text-3xl 2xl:text-5xl font-bold mb-8 mt-6">
            From safety intelligence to next-gen education and voice technologies – we pioneer AI-driven transformation, turning raw data into actionable intelligence that empowers industries, educators, and innovators worldwide.
        </p>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl mb-12">
          Driving transformation across industries by empowering educators, innovators, and frontline teams with cutting-edge, applied AI solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
            <Link to={"platforms"}>
          <button className="px-8 cursor-pointer py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
            Explore Our Platforms
          </button>
          </Link>
          <Link to={"investor"}>
          <button className="px-8 py-3 cursor-pointer border-2 border-white hover:bg-white hover:text-purple-900 rounded-lg font-semibold transition-colors">
            Investor Relations
          </button>
          </Link>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-40%] left-1/2 h-full w-1/2 -translate-x-1/2 rounded-b-[100%] opacity-75 mix-blend-plus-lighter"
          style={{
            background: 'linear-gradient(20deg, #00f8f1, #ffbd1e20 16.5%, #ff9a1e 10%, #39008d 30%, #00f8f1 66%, #00f8f160 85.5%, #ffbd1e 100%)',
            filter: 'blur(50px)',
          }}>
        </div>
      </div>
    </div>
  );
};

export default Landing;