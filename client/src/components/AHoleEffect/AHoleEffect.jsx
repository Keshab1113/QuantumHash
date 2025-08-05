import React, { useEffect, useRef } from 'react';
import easingUtils from 'https://esm.sh/easing-utils';

const AHoleEffect = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const auraRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Animation state
        const state = {
            discs: [],
            lines: [],
            particles: [],
            clip: {},
            startDisc: {},
            endDisc: {},
            particleArea: {},
            render: {
                width: 0,
                height: 0,
                dpi: window.devicePixelRatio
            }
        };

        // Helper functions
        const tweenValue = (start, end, p, ease = false) => {
            const delta = end - start;
            const easeFn = easingUtils[
                ease ? "ease" + ease.charAt(0).toUpperCase() + ease.slice(1) : "linear"
            ];
            return start + delta * easeFn(p);
        };

        const tweenDisc = (disc) => {
            disc.x = tweenValue(state.startDisc.x, state.endDisc.x, disc.p);
            disc.y = tweenValue(state.startDisc.y, state.endDisc.y, disc.p, "inExpo");
            disc.w = tweenValue(state.startDisc.w, state.endDisc.w, disc.p);
            disc.h = tweenValue(state.startDisc.h, state.endDisc.h, disc.p);
            return disc;
        };

        const initParticle = (start = false) => {
            const sx = state.particleArea.sx + state.particleArea.sw * Math.random();
            const ex = state.particleArea.ex + state.particleArea.ew * Math.random();
            const dx = ex - sx;
            const vx = 0.1 + Math.random() * 0.5;
            const y = start ? state.particleArea.h * Math.random() : state.particleArea.h;
            const r = 0.5 + Math.random() * (window.innerWidth < 768 ? 2 : 4); // Smaller particles on mobile
            const vy = 0.5 + Math.random();

            return {
                x: sx,
                sx,
                dx,
                y,
                vy,
                p: 0,
                r,
                c: `rgba(255, 255, 255, ${Math.random()})`
            };
        };

        // Setup functions
        const setSize = () => {
            const rect = container.getBoundingClientRect();
            state.render = {
                width: rect.width,
                height: rect.height,
                dpi: window.devicePixelRatio
            };
            canvas.width = state.render.width * state.render.dpi;
            canvas.height = state.render.height * state.render.dpi;
            
            // Adjust aura size for mobile
            if (window.innerWidth < 768) {
                auraRef.current.style.width = '80%';
                auraRef.current.style.top = '-30%';
                auraRef.current.style.filter = 'blur(30px)';
            } else if (window.innerWidth < 1024) {
                auraRef.current.style.width = '60%';
                auraRef.current.style.top = '-35%';
                auraRef.current.style.filter = 'blur(40px)';
            } else {
                auraRef.current.style.width = '50%';
                auraRef.current.style.top = '-40%';
                auraRef.current.style.filter = 'blur(50px)';
            }
        };

        const setDiscs = () => {
            const { width, height } = state.render;
            state.discs = [];

            // Adjust disc sizes based on screen size
            const isMobile = window.innerWidth < 768;
            const isTablet = window.innerWidth < 1024;
            
            const startWidth = isMobile ? width * 0.9 : isTablet ? width * 0.8 : width * 0.75;
            const startHeight = isMobile ? height * 0.6 : isTablet ? height * 0.65 : height * 0.7;
            
            state.startDisc = {
                x: width * 0.5,
                y: height * (isMobile ? 0.4 : 0.45),
                w: startWidth,
                h: startHeight
            };

            state.endDisc = {
                x: width * 0.5,
                y: height * (isMobile ? 0.9 : 0.95),
                w: isMobile ? 15 : 20,
                h: isMobile ? 8 : 10
            };

            const totalDiscs = isMobile ? 80 : 100; // Fewer discs on mobile
            let prevBottom = height;
            state.clip = {};

            for (let i = 0; i < totalDiscs; i++) {
                const p = i / totalDiscs;
                const disc = { p };
                tweenDisc(disc);

                const bottom = disc.y + disc.h;
                if (bottom <= prevBottom) {
                    state.clip = { disc: { ...disc }, i };
                }

                prevBottom = bottom;
                state.discs.push(disc);
            }

            state.clip.path = new Path2D();
            state.clip.path.ellipse(
                state.clip.disc.x,
                state.clip.disc.y,
                state.clip.disc.w,
                state.clip.disc.h,
                0,
                0,
                Math.PI * 2
            );
            state.clip.path.rect(
                state.clip.disc.x - state.clip.disc.w,
                0,
                state.clip.disc.w * 2,
                state.clip.disc.y
            );
        };

        const setLines = () => {
            const { width, height } = state.render;
            state.lines = [];

            const isMobile = window.innerWidth < 768;
            const totalLines = isMobile ? 60 : 100; // Fewer lines on mobile
            const linesAngle = (Math.PI * 2) / totalLines;

            for (let i = 0; i < totalLines; i++) {
                state.lines.push([]);
            }

            state.discs.forEach((disc) => {
                for (let i = 0; i < totalLines; i++) {
                    const angle = i * linesAngle;
                    const p = {
                        x: disc.x + Math.cos(angle) * disc.w,
                        y: disc.y + Math.sin(angle) * disc.h
                    };
                    state.lines[i].push(p);
                }
            });
        };

        const setParticles = () => {
            const { height } = state.render;
            state.particles = [];

            state.particleArea = {
                sw: state.clip.disc.w * 0.5,
                ew: state.clip.disc.w * 2,
                h: height * (window.innerWidth < 768 ? 0.8 : 0.85)
            };
            state.particleArea.sx = (state.render.width - state.particleArea.sw) / 2;
            state.particleArea.ex = (state.render.width - state.particleArea.ew) / 2;

            const isMobile = window.innerWidth < 768;
            const totalParticles = isMobile ? 60 : 100; // Fewer particles on mobile
            for (let i = 0; i < totalParticles; i++) {
                state.particles.push(initParticle(true));
            }
        };

        // Draw functions
        const drawDiscs = () => {
            ctx.strokeStyle = "#444";
            ctx.lineWidth = window.innerWidth < 768 ? 1 : 2; // Thinner lines on mobile

            // Outer disc
            const outerDisc = state.startDisc;
            ctx.beginPath();
            ctx.ellipse(
                outerDisc.x,
                outerDisc.y,
                outerDisc.w,
                outerDisc.h,
                0,
                0,
                Math.PI * 2
            );
            ctx.stroke();
            ctx.closePath();

            // Inner discs
            const isMobile = window.innerWidth < 768;
            const skipCount = isMobile ? 10 : 5; // Draw fewer discs on mobile
            
            state.discs.forEach((disc, i) => {
                if (i % skipCount !== 0) return;

                if (disc.w < state.clip.disc.w - 5) {
                    ctx.save();
                    ctx.clip(state.clip.path);
                }

                ctx.beginPath();
                ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();

                if (disc.w < state.clip.disc.w - 5) {
                    ctx.restore();
                }
            });
        };

        const drawLines = () => {
            ctx.strokeStyle = "#444";
            ctx.lineWidth = window.innerWidth < 768 ? 1 : 2; // Thinner lines on mobile

            state.lines.forEach((line) => {
                ctx.beginPath();
                for (let i = 0; i < line.length - 1; i++) {
                    const p0 = line[i];
                    const p1 = line[i + 1];
                    ctx.moveTo(p0.x, p0.y);
                    ctx.lineTo(p1.x, p1.y);
                }
                ctx.stroke();
                ctx.closePath();
            });
        };

        const drawParticles = () => {
            ctx.save();
            ctx.clip(state.clip.path);

            state.particles.forEach((particle) => {
                ctx.fillStyle = particle.c;
                ctx.beginPath();
                ctx.rect(particle.x, particle.y, particle.r, particle.r);
                ctx.closePath();
                ctx.fill();
            });

            ctx.restore();
        };

        // Animation functions
        const moveDiscs = () => {
            const speed = window.innerWidth < 768 ? 0.001 : 0.002; // Slower animation on mobile
            state.discs.forEach((disc) => {
                disc.p = (disc.p + speed) % 1;
                tweenDisc(disc);
            });
        };

        const moveParticles = () => {
            state.particles.forEach((particle) => {
                particle.p = 1 - particle.y / state.particleArea.h;
                particle.x = particle.sx + particle.dx * particle.p;
                particle.y -= particle.vy;

                if (particle.y < 0) {
                    Object.assign(particle, initParticle());
                }
            });
        };

        // Main animation loop
        const tick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.scale(state.render.dpi, state.render.dpi);

            moveDiscs();
            moveParticles();

            drawDiscs();
            drawLines();
            drawParticles();

            ctx.restore();
            animationRef.current = requestAnimationFrame(tick);
        };

        // Initial setup
        setSize();
        setDiscs();
        setLines();
        setParticles();
        tick();

        // Handle resize
        const handleResize = () => {
            cancelAnimationFrame(animationRef.current);
            setSize();
            setDiscs();
            setLines();
            setParticles();
            tick();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="a-hole" ref={containerRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#17042b',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <canvas className="js-canvas" ref={canvasRef} style={{ display: 'block', width: '100%', height: '100vh' }}></canvas>
            <div className="aura" ref={auraRef} style={{
                position: 'absolute',
                left: '50%',
                zIndex: 3,
                height: '100%',
                background: 'linear-gradient(20deg, #00f8f1, #ffbd1e20 16.5%, #ff9a1e 10%, #39008d 30%, #00f8f1 66%, #00f8f160 85.5%, #ffbd1e 100%) 0 100% / 100% 200%',
                borderRadius: '0 0 100% 100%',
                mixBlendMode: 'plus-lighter',
                opacity: 0.75,
                transform: 'translate3d(-50%, 0, 0)',
                animation: 'aura-glow 5s infinite linear'
            }}></div>
            <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 10,
                width: '100%',
                height: '100%',
                background: window.innerWidth < 768 ? 
                    'repeating-linear-gradient(transparent, transparent 2px, white 2px, white 3px)' : 
                    'repeating-linear-gradient(transparent, transparent 1px, white 1px, white 2px)',
                mixBlendMode: 'overlay',
                opacity: window.innerWidth < 768 ? 0.3 : 0.5
            }}></div>
            <style>{`
                @keyframes aura-glow {
                    0% { background-position: 0 100%; }
                    100% { background-position: 0 300%; }
                }
                .a-hole::before {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 2;
                    display: block;
                    width: 150%;
                    height: 100%;
                    background: radial-gradient(ellipse at 50% 55%, transparent 10%, rgb(11, 2, 25) 50%);
                    transform: translate3d(-50%, -50%, 0);
                    content: "";
                }
                .a-hole::after {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 5;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(ellipse at 50% 75%, #a900ff 20%, transparent 75%);
                    mix-blend-mode: overlay;
                    transform: translate3d(-50%, -50%, 0);
                    content: "";
                }
                
                @media (max-width: 768px) {
                    .a-hole::before {
                        background: radial-gradient(ellipse at 50% 55%, transparent 5%, rgb(11, 2, 25) 40%);
                    }
                    .a-hole::after {
                        background: radial-gradient(ellipse at 50% 75%, #a900ff 15%, transparent 70%);
                    }
                }
            `}</style>
        </div>
    );
};

export default AHoleEffect;