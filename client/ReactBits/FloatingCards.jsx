import React, { useRef, useEffect, Children, cloneElement } from "react";
import gsap from "gsap";

export const Card = ({ children, className, style }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl ${className}`}
    style={style}
  >
    {children}
  </div>
);

const FloatingCards = ({ children }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = containerRef.current.children;
    cardsRef.current = [...cards];

    // Initial 3D spread
    cardsRef.current.forEach((card, i) => {
      gsap.set(card, {
        x: i * 40 - 60,
        y: i % 2 === 0 ? 0 : 10,
        z: -i * 30,
        rotationY: i * 5 - 10,
        scale: 0.95,
      });

      // Floating animation
      gsap.to(card, {
        y: `+=${i % 2 === 0 ? 5 : -5}`,
        repeat: -1,
        yoyo: true,
        duration: 3 + Math.random() * 2,
        ease: "sine.inOut",
      });
    });

    // Hover parallax effect
    const handleMouseMove = (e) => {
      const { width, left, top, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;

      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          rotationY: 5 * x + (i * 2 - 5),
          rotationX: -5 * y,
          duration: 0.5,
          ease: "power3.out",
        });
      });
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] perspective-[1200px] flex justify-center items-center"
    >
      {Children.map(children, (child, i) =>
        cloneElement(child, {
          className: `absolute cursor-pointer transition-transform ${child.props.className || ""}`,
          style: { transformStyle: "preserve-3d", backfaceVisibility: "hidden", ...child.props.style },
        })
      )}
    </div>
  );
};

export default FloatingCards;
